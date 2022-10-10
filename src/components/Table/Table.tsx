
import { addClassNames } from '../../classNames';
import { CommonProps } from '../../types';
import React, { useContext, useState } from 'react';
import './Table.scss'

interface TableState {
    selectedRow?: string,
    cols: number,
}

interface TableContextProps extends TableState {
    selectRow: (name?: string) => () => void,
}

const TableContext = React.createContext<TableContextProps>({cols: 0, selectRow: () => () => {}});

export interface TableProps extends CommonProps {
    columns: string[]
}
const TableComponent: React.FC<TableProps> = (props) => {
    const {columns, children} = props;

    const [tableState, setTableState] = useState<TableState>({cols: columns.length})
    const classNames = addClassNames(props.classNames, `chy-table`);
    const selectRow = (name?: string) => () => setTableState(s => ({ 
        ...s, 
        selectedRow: (name !== s.selectedRow ? name : undefined) 
    }));

    return (
        <TableContext.Provider value={{...tableState, selectRow}}>
        <table className={classNames} style={props.style}>
            <thead>
                <tr>
                {columns.map(c => <th key={c}>{c}</th>)}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
        </TableContext.Provider>
    )
}

interface TableRowProps extends CommonProps {
    name: string,
    details?: React.ReactNode
}
type TableRowType = React.FC<TableRowProps>;
// type TableRowType = FCWithChildren<TableRowProps, React.ReactNode[]>;
// type TableRowType = React.FC<TableRowProps> & {children: Iterable<React.ReactNode>}
export const TableRow: TableRowType = (props) => {

    const {name, children, details} = props;
    const table = useContext(TableContext);
    const selected = table.selectedRow === name;
    const classNames = addClassNames(props.classNames, selected && 'chy-table-selected-row');

    return <><tr className={classNames} style={props.style} onClick={table.selectRow(name)}>
            {( Array.isArray(children) 
                ? children.map((c, i) => <td key={i}>{c}</td>) 
                : <td>{children}</td>
            )}
        </tr>
        <tr className={`chy-table-details-row`}>
            <td colSpan={table.cols}>
                <div className='chy-table-details'>
                    {details}
                </div>
                <div className='chy-table-details-shadow' />
            </td>
        </tr>
    </>
}

export const Table = TableComponent as (React.FC<TableProps>) & ({Row: React.FC<TableRowProps>});
Table.Row = TableRow;