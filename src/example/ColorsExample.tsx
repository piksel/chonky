import { useEffect, useRef, useState } from "react";
import { Box } from "../components";
import {ColorAliases, ColorValues} from "../colors";

const levels = [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
]

export const ColorsExample = ({open}: {open?: boolean}) => (
        <Box style={{maxWidth: '700px', overflowX: 'auto'}}>
            <table className="colors-example">
                <thead>
                <tr>
                    <th>Name</th>
                    {levels.map(level => <th key={level}>{level}</th>)}
                    <th>Aliases</th>
                </tr>
                </thead>
                <tbody>
                {ColorValues.map(color => 
                <tr key={color}>
                    <td><code>{color}</code></td>
                    {levels.map(level => <td key={level}>
                        <ColorPreview level={level} color={color} />                        
                    </td>)}
                    <td><code>{(ColorAliases[color] ?? []).join(', ')}</code></td>
                </tr>
                )}
                </tbody>
            </table>
        </Box>
);

const rgb2hex = (rgb: string) => {
    const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if(!match) return '[invalid]';
    const hex = match.slice(1).map(n => 
        parseInt(n, 10).toString(16).padStart(2, '0')
    ).join('');
    return `#${hex}`
}


const ColorPreview = (props: {level: string, color: string}) => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [hexColor, setHexColor] = useState('');

    const {color, level} = props;
    const style: React.CSSProperties = {

        background: `var(--${color}-${level})`,

    };

    useEffect(() => {
        if(!boxRef.current) {
            console.log('No ref!')
            return;
        }
        setHexColor(rgb2hex(getComputedStyle(boxRef.current).backgroundColor));
    }, []);

    return (
        <div className="color">
        <div className="preview" ref={boxRef} style={style}></div>
        <code>{hexColor}</code>

        </div>
    )

}