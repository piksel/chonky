import { Box, Textbox } from "../components";

export const TextboxesExample = () => (
    <Box style={{maxWidth: '400px'}}>

    <Textbox label="What is your dream horse?" placeholder='pink' />
    <Textbox multiline label="Why not?" value="you're not my real mom" />

  </Box>
)