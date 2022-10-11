import { ColorValues } from "../colors";
import { Box, Chip, Section } from "../components";


export const ChipsExample = () => (
    <Section collapsible open header="Chips">
      <div style={{padding: '15px'}}>
        {ColorValues.map(c => <Chip color={c} key={c}>{c}</Chip>)}
        {/* <Chip color='primary'>Dill</Chip>
        <Chip color="green">Green!</Chip>
        <Chip color="danger">Danger!</Chip>
        <Chip color="blue">Blue!</Chip>
        <Chip color="orange">Orange!</Chip>
        <Chip color="pink">Pink!</Chip> */}
        <Chip color='rgb'>PARTAY</Chip>
      </div>

        <Box>
          <details>
            <summary>More party</summary>
              <br/>
              <div style={{overflowY: 'scroll', height: '200px'}}>
              {Array.from(Array(12), (_, i) => <div key={i}>
                <Chip color='rgb'>PARTAY</Chip>
                <Chip color='rgb'>PARTAY</Chip>
                <Chip color='rgb'>PARTAY</Chip>
              </div>)}
            </div>
          </details>

        </Box>
      </Section>
);