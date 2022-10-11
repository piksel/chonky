import { ColorValues, SpecialColors } from "../colors";
import { Button, ButtonColor, Section } from "../components";
import { colors, specialColors } from "./dummyData";

export const ButtonsExample = ({open}: {open?: boolean}) => (
    <Section collapsible open={open} header="Buttons">
                <div style={{padding: '15px'}}>

        <Button primary>Primary</Button>
        <Button>Not as important</Button>
        <Button danger>Dangerous!</Button>

                </div>
        <div style={{padding: '15px'}}>
            {ColorValues.filter(c => !SpecialColors.includes(c)).map(c => 
            <Button key={c} color={c as ButtonColor}>
                {c[0].toUpperCase()+c.substring(1)}!
            </Button>)}
        {/* <Button primary>Primary</Button>
        <Button>Not as important</Button>
        <Button color="green">Green!</Button>
        <Button color="danger">Danger!</Button>
        <Button color="blue">Blue!</Button>
        <Button color="orange">Orange!</Button>
        <Button color="pink">Pink!</Button> */}
        </div>
    </Section>);