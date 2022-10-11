
import { ColorValue } from '../../colors';
import './Chip.scss';

export type ChipColor 
    = ColorValue
    | 'rgb';
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