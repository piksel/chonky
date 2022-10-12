import { ColorValues, SpecialColors } from "../colors";
import { Button, ButtonColor, ButtonContextProvider } from "../components";

export const ButtonsExample = () => (<>
    <div style={{padding: '15px'}}>

        <AllStates><Button primary>Primary</Button></AllStates>
        <AllStates><Button>Not as important</Button></AllStates>
        <AllStates><Button danger>Dangerous!</Button></AllStates>

    </div>
    <div style={{padding: '15px'}}>
        {ColorValues.filter(c => !SpecialColors.includes(c)).map(c => 
        <AllStates>
            <Button key={c} color={c as ButtonColor}>
            {c[0].toUpperCase()+c.substring(1)}!
            </Button>
        </AllStates>)}
    </div>
</>);

const AllStates: React.FC = ({children}) => (
    <div style={{display: 'inline-flex', flexDirection: 'column', rowGap: '5px', margin: '5px'}}>
    {children}
    <ButtonContextProvider value={{disabled: true}}>
        {children}
    </ButtonContextProvider>

    </div>

)