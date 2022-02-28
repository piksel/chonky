interface Props {
  pressed?: boolean;
  primary?: boolean;
}
export const Button: React.FC<Props> = (props) => {
  const color = props.primary ? 'primary' : 'secondary';
    return (
      <button className={`chy-button ${color}`}>
        <label>{props.children}</label>
      </button>
    )
}