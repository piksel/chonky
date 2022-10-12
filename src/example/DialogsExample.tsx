import { useState } from "react";
import { Box, Button, Chip, Dialog } from "../components"

export const DialogsExample = () => {
    const [disabled, setDisabled] = useState(false);
    return <Box>
        <Dialog header={"holup!"} 
            
            actions={[
                <Dialog.Action primary text="omg. THANKS" activated={Dialog.Close} />,
                <Dialog.Action text="I want to hear about our lord and saviour Jesus Christ" activated={Dialog.Close} />,
            ]} 
            activator={(showDialog) => <Button disabled={disabled} primary onClick={() => showDialog()}>Show modal!</Button>}
        >
            I think you forgot something important!
        </Dialog>

        <Dialog header="beep boop" 
            disabled={disabled}
            actions={(d) => <>
            <Button onClick={() => d.handleResult(Dialog.Close)}>Close</Button>
            I have text here for some reason
            </>}
            activator={<Button color="orange" children='🤖' />}
        >
            <div style={{textAlign: 'center'}}>
            <code>data data</code>
            <br/>
            <code>data data</code>
            
            <div style={{margin: '30px', fontSize: '128px'}}>⚙️🔌☕</div>
            </div>
        </Dialog>

        <Dialog color="mint" header={"mint!"} 
            disabled={disabled}
            actions={(d) => <Button onClick={() => d.handleResult(Dialog.Close)}>k</Button>}
            activator={<Button color="mint">Mint?</Button>}
        >
            <div style={{fontSize: '128px', display: 'flex', height: '315px', alignItems: 'center', justifyContent: 'center'}}>
            mint!

            </div>
        </Dialog>


        <Dialog activator='Supahsimple' dismiss="OK" disabled={disabled}>
            wow, that was so simple!
        </Dialog>

        <Dialog inline disabled={disabled} activator={<Button color="pink">Non-modal GO!</Button>} dismiss="go away!">
            I am still in the way! <Chip color='rgb'>#useless</Chip>
        </Dialog>

        <hr />

        <Button pressed={disabled} onClick={() => setDisabled(d => !d)} children='Disable' danger />
    </Box>
}