interface Props {
  pressed?: boolean;
  primary?: boolean;
  color?: 'primary' | 'success' | 'danger' | 'green' | 'blue' | 'orange' | 'pink';
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