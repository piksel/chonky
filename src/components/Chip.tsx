
import './Chip.scss';

type ChipColor 
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
        'chy-chip',
        ...(props.right ? ['chy-mod-right'] : []),
        `chy-mod-${props.color}`
    ];

    return (
        <div className={classNames.join(' ')}>{props.children}</div>
    )
}