export type ButtonColor = 'primary' | 'success' | 'danger' | 'green' | 'blue' | 'orange' | 'pink';
interface Props {
  pressed?: boolean;
  primary?: boolean;
  color?: ButtonColor;
}
export const Button: React.FC<Props> = (props) => {
  const color = props.color ?? (
    props.primary ? 'primary' : undefined
  );
    return (
      <button className={`chy-button ${color ? 'chy-mod-' + color : ''}`}>
        <label>{props.children}</label>
      </button>
    )
}