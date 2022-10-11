import React from 'react';

import './App.scss';
import { Box, Button, Radio, Section, Table, Chip, ChipColor, TableRow, Textbox } from '../components';
import { dummyTableDataCols, dummyTableData } from './dummyData';
import { ChipsExample } from './ChipsExample';
import { ColorsExample } from './ColorsExample';
import { ButtonsExample } from './ButtonsExample';

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
  const [radioValue, setRadioValue] = React.useState<string>("");
  const [tableHint, setTableHint] = React.useState<string>("none");

  return (
    <div className="App">

      <ButtonsExample />

      <Section collapsible header="Radio Buttons">
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

      <Section collapsible header="Textboxes">
      <Box style={{maxWidth: '400px'}}>

        <Textbox label="What is your dream horse?" placeholder='pink' />
        <Textbox multiline label="Why not?" value="you're not my real mom" />

      </Box>
      </Section>

      <ChipsExample />
      <ColorsExample />

      <Section collapsible open header="Table">
        <div style={{minHeight: '300px'}}>

        <Table columns={dummyTableDataCols}>

          {tableHint === 'above' && (<TableRow name={undefined as any} details={<>
            <b>Instructions:</b><br/>
            Select a Pokébowl to get started!
          </>} />)}

          {dummyTableData.map(row => <Table.Row key={row.Name} name={row.Name} details={(
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div style={{}}>
                  <b>Description:</b><br />
              {row.Description}
                  </div>
                  <div style={{float: 'right'}}><Button color={row.Color}>Use this starting pokébowl</Button></div>
                </div>
          )}>

            {row.Name}
            {row.Type.split('/').map(t => <Chip key={t} color={typeColor(t)}>{t}</Chip>)}
            {row.Status}
            {row.Weight}

          </Table.Row>)}

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

    </Section>
    </div>
  );
}



export default App;
