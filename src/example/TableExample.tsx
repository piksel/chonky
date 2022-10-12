import React from "react";
import { ChipColor, Table, TableRow, Button, Chip, Section, Radio } from "../components";
import { dummyTableData, dummyTableDataCols } from "./dummyData";

const typeColor = (type: string): ChipColor => {
    switch(type) {
      case 'Weird': return 'rgb';
      case 'Grass': return 'green';
      case 'Fire': return 'orange';
      case 'Water': return 'blue';
      default: return 'primary';
    }
  } 

export const TableExample = () => {
    const [tableHint, setTableHint] = React.useState<string>("none");

    return (<>
        <div style={{minHeight: '300px'}}>

        <Table columns={dummyTableDataCols}>

        {tableHint === 'above' && (<TableRow name={undefined as any} details={<>
            <b>Instructions:</b><br/>
            Select a Pokébowl to get started!
        </>} />)}

        {dummyTableData.map(row => 
            <Table.Row key={row.Name} name={row.Name} details={(
                <div className="example-table-details">
                    <div>
                        <b>Description:</b><br />
                        {row.Description}
                    </div>
                    <Button style={{float: 'right'}} color={row.Color}>
                        Use this starting pokébowl
                    </Button>
                </div>
            )}>
                {row.Name}
                {row.Type.split('/').map(t => <Chip key={t} color={typeColor(t)}>{t}</Chip>)}
                {row.Status}
                {row.Weight}
            </Table.Row>
        )}

        {tableHint === 'beneath' && (<TableRow name={undefined as any} details={<>
            <b>Instructions:</b><br/>
            Select a Pokébowl to get started!
        </>} />)}

        </Table>
        </div>

        <Section.Footer>
        <details>
        <summary><b>Options</b></summary>
            <br/>
        Usage hint:
        <Radio size="small" valueChanged={setTableHint} value={tableHint}>
            <Radio.Button value="above">Above rows</Radio.Button>
            <Radio.Button value="none">Hide</Radio.Button>
            <Radio.Button value="beneath">Beneath rows</Radio.Button>
        </Radio>
        </details>
        </Section.Footer>
    
    </>)
}