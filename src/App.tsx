import React from 'react';

import './App.scss';
import { Box, Button, Chip, ChipColor, Radio, Section, Table } from './components';
import { dummyTableDataCols, dummyTableData } from './dummyData';

const typeColor = (type: string): ChipColor => {
  switch(type) {
    case 'Weird': return 'rgb';
    case 'Grass': return 'green';
    case 'Fire': return 'orange';
    case 'Water': return 'blue';
    default: return 'primary';
  }
} 

function App() {
  const [selectedTableRow, setSelectedTableRow] = React.useState<string>();
  const [radioValue, setRadioValue] = React.useState<string>("");
  const [tableHint, setTableHint] = React.useState<string>("none");


  const selectTableRow = (name?: string) => () => setSelectedTableRow(s => s === name ? undefined : name);

  return (
    <div className="App">

      <Section header="Buttons">

        <div style={{padding: '15px'}}>
          <Button primary>Primary</Button>
          <Button>Not as important</Button>
          <Button color="green">Green!</Button>
          <Button color="danger">Danger!</Button>
          <Button color="blue">Blue!</Button>
          <Button color="orange">Orange!</Button>
          <Button color="pink">Pink!</Button>
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

      <Section header="Chips">
      <div style={{padding: '15px'}}>
        <Chip color='primary'>Dill</Chip>
        <Chip color="green">Green!</Chip>
        <Chip color="danger">Danger!</Chip>
        <Chip color="blue">Blue!</Chip>
        <Chip color="orange">Orange!</Chip>
        <Chip color="pink">Pink!</Chip>
        <Chip color='rgb'>PARTAY</Chip>
      </div>

        <Box>
          <details>
            <summary>More party</summary>
              <br/>
              <div style={{overflowY: 'scroll', height: '200px'}}>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
              <Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><Chip color='rgb'>PARTAY</Chip><br/>
            </div>
          </details>

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
              <td>{row.Type.split('/').map(t => <Chip key={t} color={typeColor(t)}>{t}</Chip>)}</td>
              <td>{row.Status}</td>
              <td>{row.Weight}</td>
            </tr>

            <tr className={`chy-table-details-row`} onClick={selectTableRow()}>
              <td colSpan={dummyTableDataCols.length}>
                <div className='chy-table-details'>
                  <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{}}>
                    <b>Description:</b><br />
                {row.Description}
                    </div>
                    <div style={{float: 'right'}}><Button color={row.Color}>Use this starting pokébowl</Button></div>
                  </div>
                

                </div>
                <div className='chy-table-details-shadow' />
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
