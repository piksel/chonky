
import './Chip.scss';

export type ChipColor 
    = 'primary' 
    | 'rgb' 
    | 'green' 
    | 'danger' 
    | 'blue' 
    | 'orange' 
    | 'pink';
interface Props {
    right?: boolean, 
    color: ChipColor,
}
export const Chip: React.FC<Props> = (props) => {

    const classNames = [
        'cky-chip',
        ...(props.right ? ['cky-mod-right'] : []),
        `cky-mod-${props.color}`
    ];

    return (
        <div className={classNames.join(' ')}>{props.children}</div>
    )
}