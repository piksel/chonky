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
    return (
      <button className={`chy-button ${color ? 'chy-mod-btn-' + color : ''}`} style={props.style}>
        <label>{props.children}</label>
      </button>
    )
}

export const Button = ButtonComponent;