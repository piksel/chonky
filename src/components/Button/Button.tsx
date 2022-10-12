import { addClassNames } from '../../classNames';
import { CommonProps } from '../../types';
import { ColorValue } from '../../colors';
import './Button.scss'
import { createContext, MouseEventHandler, useContext } from 'react';

export type ButtonColor = Exclude<ColorValue, 'danger'>;
export interface ButtonProps extends CommonProps {
  pressed?: boolean;
  primary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  color?: ButtonColor;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface ButtonCtx { onClick?: MouseEventHandler<HTMLButtonElement>, disabled?: boolean }
const ButtonContext = createContext<ButtonCtx>({});
export const ButtonContextProvider = ButtonContext.Provider;

const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const {pressed} = props;

  const color = props.color ?? (
    props.primary ? 'primary' :
    props.danger ? 'danger' : undefined
  );

  const context = useContext(ButtonContext);

  const onClick = props.onClick ?? context.onClick;
  const disabled = props.disabled ?? context.disabled;

  const className = addClassNames(props.classNames, 
    'cky-button', 
    color && `cky-mod-${color}`,
    pressed && 'cky-mod-pressed'
  );

  return (
    <button disabled={disabled} className={className} style={props.style} onClick={onClick}>
      <label>{props.children}</label>
    </button>
  )
}

export const Button = ButtonComponent;