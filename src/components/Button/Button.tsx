import { addClassNames } from '../../classNames';
import { CommonProps } from '../../types';
import { ColorValue } from '../../colors';
import './Button.scss'

export type ButtonColor = Exclude<ColorValue, 'danger'>;
export interface ButtonProps extends CommonProps {
  pressed?: boolean;
  primary?: boolean;
  danger?: boolean;
  color?: ButtonColor;
}

const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const color = props.color ?? (
    props.primary ? 'primary' :
    props.danger ? 'danger' : undefined
  );

  const className = addClassNames(props.classNames, 'cky-button', color && `cky-mod-${color}`);

    return (
      <button className={className} style={props.style}>
        <label>{props.children}</label>
      </button>
    )
}

export const Button = ButtonComponent;