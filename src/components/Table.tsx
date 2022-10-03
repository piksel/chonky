
import './Table.scss'

interface TableProps {columns: string[]}
export const Table: React.FC<TableProps> = (props) => {
    const {columns, children} = props;

    const classNames = `chy-table`;

    return (
        <table className={classNames}>
            <thead>
                <tr>
                {columns.map(c => <th key={c}>{c}</th>)}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}