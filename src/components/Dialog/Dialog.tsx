import React, { Dispatch, ReactElement, ReactFragment, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import { addClassNames } from "../../classNames";
import { ColorValue } from "../../colors";
import { CommonProps } from "../../types";
import { Button, ButtonContextProvider, ButtonProps } from "../Button";

import './Dialog.scss';

export interface DialogState {
    open: boolean,
    result?: string,
}
export interface DialogMethods {
    handleResult: Dispatch<DialogActionHandler>;
}
export type DialogCtx = DialogState & DialogMethods;
const DialogContext = React.createContext<DialogCtx>({
    handleResult: () => {},
    open: false
})

export interface DialogProps extends CommonProps {
    header?: string,
    actions?: ReactElement<DialogActionProps>[] | ((context: DialogCtx) => ReactNode),
    onClosed?: Dispatch<string | undefined>,
    open?: boolean,
    inline?: boolean,
    activator?: (( showDialog: ()=>void ) => React.ReactNode) | string | ReactElement | ReactFragment
    disabled?: boolean
    dismiss?: string
    color?: ColorValue
}

type DialogElementType = typeof DialogElement;
const DialogElement: React.FC<DialogProps> = (props) => {

    const ref = useRef<HTMLDialogElement>(null);

    const { children, style, actions, inline, onClosed, header, activator, disabled } = props;
    const openProp = props.open;

    const [state, setState] = useState<DialogState>({open: false});

    const contextValue = useMemo<DialogCtx>(() => ({
        ...state,
        handleResult: (handlerOrResult) => {
            console.log('Handling result %o', handlerOrResult);
            const result = (typeof handlerOrResult === 'function') ? handlerOrResult() : handlerOrResult;
            if(!!result) {
                const resultValue = (typeof result === 'string') ? result : undefined;
                const handleClosed = onClosed ?? (result => setState({open: false, result}));
                handleClosed(resultValue);
            }

        }
    }), [state, onClosed]);

    useEffect(() => {
        if (!(ref && 'current' in ref && ref.current)) return;

        const dialog = ref.current;

        console.log('Adding event listeners!')

        const onClose = () => { setState({open: false}); }
        dialog.addEventListener('close', onClose);

        const onChange = (e: Event) => { console.log("Load! %o", e.target); }
        dialog.addEventListener('load', onChange);
         
        return () => {
            console.log('Removing event listeners!')

            dialog.removeEventListener('close', onClose);
            dialog.removeEventListener('change', onChange);
        }
        
    }, [ref]);

    useEffect(() => {
        if (!(ref && 'current' in ref && ref.current)) return;

        if(state.open !== ref.current.open) {
            console.log("Changed open state to %o (was %o), using ref %O", state.open, ref.current.open, ref.current);
            if (!state.open) {
                ref.current.close(state.result);
            } else if (!inline) {
                ref.current.showModal();
            } else {
                ref.current.show();
            }
        }
        
    }, [state, inline, ref]);

    useEffect(() => {
        console.log('State changed: %o', state);
    }, [state]);

    useEffect(() => {
        if(typeof openProp !== 'boolean') return;
        setState({open: openProp});
    }, [openProp])

    const className = addClassNames(props.classNames, 
        'cky-dialog', 
        props.color && `cky-mod-${props.color}`);

    const openAction = () => setState({open: true})

    return <>
        {activator && ( 
            React.isValidElement(activator)
                ? <ButtonContextProvider value={{onClick: openAction, disabled}} children={activator} /> 
            : typeof activator === 'function' 
                ? activator(openAction)
            : typeof activator === 'string'
                ? <Button onClick={openAction} disabled={disabled} children={activator} />
            : undefined
        )}
        <dialog ref={ref} className={className} style={style}>
            <DialogContext.Provider value={contextValue}>
                {header && (<div className="cky-dialog-header">
                    {header}
                </div>)}
                <div className="cky-dialog-content">
                    {children}
                </div>
                <div className="cky-dialog-footer">
                    { 
                    typeof actions === 'function' 
                        ? actions(contextValue)
                    : Array.isArray(actions) 
                        ? actions.map((a,i) =>  <React.Fragment key={i}>{a}</React.Fragment>) 
                    : <DialogAction color={props.color as any} activated={CloseAction} text={props.dismiss ?? 'Close'} />
                    }
                </div>
            </DialogContext.Provider>
        </dialog>
    </>
};

export type DialogActionResult = string | null | undefined | boolean;
export type DialogActionHandler = DialogActionResult | (() => DialogActionResult);

const CloseAction: DialogActionHandler = true;

export interface DialogActionProps extends Exclude<ButtonProps, 'onClick'> {
    activated?: DialogActionHandler
    text: string
}
export const DialogAction: React.VFC<DialogActionProps> = (props) => {
    const {text, classNames, color, danger, primary, style} = props;

    const context = useContext(DialogContext);
    const activated = props.activated ?? CloseAction;

    const inheritProps: ButtonProps = {
        classNames,
        color,
        danger,
        primary,
        style
    };

    return (
        <Button {...inheritProps} onClick={() => context.handleResult(activated)}>{text}</Button>
    )
}

type DialogComponent = DialogElementType & {
    Close: DialogActionHandler,
    Action: React.VFC<DialogActionProps>,
};

export const Dialog: DialogComponent = Object.assign(DialogElement, {
    Close: CloseAction,
    Action: DialogAction,
});