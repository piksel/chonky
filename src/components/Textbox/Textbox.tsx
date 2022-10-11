import { useMemo, useState } from "react";
import { addClassNames } from "../../classNames";
import { CommonProps } from "../../types";

import './Textbox.scss'

interface TextboxProps extends CommonProps {
    label?: string
    multiline?: boolean
    value?: string
    placeholder?: string
    valueChanged?: (newValue: string) => void;
}


const genId = (() => {
    let counter = 0xa0;
    return () => {
        counter += 1;
        return counter.toString(16);
    }
})()

export const Textbox: React.FC<TextboxProps> = (props) => {
    const uid = useMemo(() => "tb-" + genId(), []);

    const {style, label, multiline, placeholder, valueChanged} = props;


    const classNames = addClassNames(props.classNames, 'cky-textbox');

    const [valueState, setValueState] = useState(props.value);
    const setValue = valueChanged ?? setValueState;
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        console.log(`Setting new value: %o, valueChanged is: %o`, e.target?.value, valueChanged);
        setValue(e.target?.value);
    }

    const value = (valueChanged ? props.value : valueState) ?? '';

    const commonProps = {placeholder, value, id: uid, onChange};

    return <div style={style} className={classNames}>
        <label htmlFor={uid}>
            {label}
        </label>
        {multiline ? <textarea {...commonProps} /> 
                   : <input {...commonProps} type="text" /> }
    </div>

}