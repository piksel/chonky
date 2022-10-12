import { useState } from "react";
import { Box, Button, Chip, Dialog } from "../components"

export const DialogsExample = () => {
    const [disabled, setDisabled] = useState(false);
    return <Box>
        <Dialog header={"holup!"} 
            
            actions={[
                <Dialog.Action primary text="omg. THANKS" activated={Dialog.Close} />,
                <Dialog.Action danger text="nah" activated={Dialog.Close} />
            ]} 
            activator={(showDialog) => <Button disabled={disabled} primary onClick={() => showDialog()}>Show modal!</Button>}
        >
            I think you forgot something important!
        </Dialog>

        <Dialog header={"mint!"} 
            disabled={disabled}
            actions={(d) => <Button onClick={() => d.handleResult(Dialog.Close)}>bye</Button>}
            activator={<Button color="mint">Mint modal!</Button>}
        >
            <div style={{fontSize: '48px'}}>
            <Chip color="mint">mint!</Chip>

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