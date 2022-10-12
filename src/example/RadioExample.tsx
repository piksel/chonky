import React from "react";
import { Box, Radio } from "../components";

export const RadioExample = () => {
    const [radioValue, setRadioValue] = React.useState<string>("");
    return (
        <Box style={{maxWidth: '400px'}}>
            <h3>Very important questions</h3>
            <label>How do you feel about cookies?</label>

            <Radio value={radioValue} valueChanged={(v) => { console.log('ValueChanged! New: %o', v); setRadioValue(v); }}>
            <Radio.Button value="love">Love 'em</Radio.Button>
            <Radio.Button value="hate">Hate 'em</Radio.Button>
            <Radio.Button value="other">Ask me later</Radio.Button>
            </Radio>

        </Box>);
    }