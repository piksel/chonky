import React from 'react';

import './App.scss';
import { Box, Button, Radio, Section, Table } from './components';
import { dummyTableDataCols, dummyTableData } from './dummyData';

function App() {
  const [selectedTableRow, setSelectedTableRow] = React.useState<string>();
  const [radioValue, setRadioValue] = React.useState<string>("");
  const [tableHint, setTableHint] = React.useState<string>("none");


  const selectTableRow = (name?: string) => () => setSelectedTableRow(s => s === name ? undefined : name);

  return (
    <div className="App">

      <Section header="Buttons">

        <div style={{padding: '10px'}}>
          <Button primary>Primary</Button>
          <Button>Not as important</Button>
        </div>
      </Section>

      <Section header="Radio Buttons">
      <Box style={{maxWidth: '400px'}}>
        <h3>Very important questions</h3>
        <label>How do you feel about cookies?</label>

        <Radio value={radioValue} valueChanged={(v) => { console.log('ValueChanged! New: %o', v); setRadioValue(v); }}>
          <Radio.Button value="love">Love 'em</Radio.Button>
          <Radio.Button value="hate">Hate 'em</Radio.Button>
          <Radio.Button value="other">Ask me later</Radio.Button>
        </Radio>

      </Box>
      </Section>

      <Section header="Table">
        <div style={{minHeight: '300px'}}>

        <Table columns={dummyTableDataCols}>

          {tableHint === 'above' && (<>
            <tr className={selectedTableRow === undefined ? 'chy-table-selected-row' : ''} />
            <tr className={`chy-table-details-row`}>
              <td colSpan={dummyTableDataCols.length}>
                <div className='chy-table-details'>
                  <b>Instructions:</b><br/>
                  Select a Pokébowl to get started!
                </div>
              </td>
            </tr>
          </>)}

          {dummyTableData.map(row => <React.Fragment key={row.Name}>
            <tr className={selectedTableRow === row.Name ? 'chy-table-selected-row' : ''} onClick={selectTableRow(row.Name)}>
              <td>{row.Name}</td>
              <td>{row.Type}</td>
              <td>{row.Status}</td>
              <td>{row.Weight}</td>
            </tr>

            <tr className={`chy-table-details-row`} onClick={selectTableRow()}>
              <td colSpan={dummyTableDataCols.length}>
                <div className='chy-table-details'>
                <div style={{float: 'right'}}><Button primary>Use this starting pokébowl</Button></div>
                <b>Description:</b><br />
                {row.Description}
                </div>
              </td>
            </tr>

          </React.Fragment>)}

          {tableHint === 'beneath' && (<>
            <tr className={selectedTableRow === undefined ? 'chy-table-selected-row' : ''} />
            <tr className={`chy-table-details-row`}>
              <td colSpan={dummyTableDataCols.length}>
                <div className='chy-table-details'>
                  <b>Instructions:</b><br/>
                  Select a Pokébowl to get started!
                </div>
              </td>
            </tr>
          </>)}

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

    </Section>
    </div>
  );
}



export default App;
