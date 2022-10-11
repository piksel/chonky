import { addClassNames } from '../../classNames';
import { CommonProps } from '../../types';
import './Button.scss'

export type ButtonColor = 'primary' | 'success' | 'danger' | 'green' | 'blue' | 'orange' | 'pink';
export interface ButtonProps extends CommonProps {
  pressed?: boolean;
  primary?: boolean;
  color?: ButtonColor;
}

const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const color = props.color ?? (
    props.primary ? 'primary' : undefined
  );

  const className = addClassNames(props.classNames, 'cky-button', color && `cky-mod-${color}`);

    return (
      <button className={className} style={props.style}>
        <label>{props.children}</label>
      </button>
    )
}

export const Button = ButtonComponent;