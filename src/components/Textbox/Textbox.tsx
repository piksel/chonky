import { useMemo } from "react";
import { addClassNames } from "../../classNames";
import { CommonProps } from "../../types";

import './Textbox.scss'

interface TextboxProps extends CommonProps {
    label?: string
    multiline?: boolean
    value?: string
    placeholder?: string
}


const genId = (() => {
    let counter = 0xa0;
    return () => {
        counter += 1;
        return counter.toString(16);
    }
})()

export const Textbox: React.FC<TextboxProps> = (props) => {
    const uid = useMemo(() => "tb-" + genId(), []);

    const {style, label, multiline, value, placeholder} = props;

    const classNames = addClassNames(props.classNames, 'cky-textbox');

    const commonProps = {placeholder, value, id: uid};

    return <div style={style} className={classNames}>
        <label htmlFor={uid}>
            {label}
        </label>
        {multiline ? <textarea {...commonProps} /> 
                   : <input {...commonProps} type="text" /> }
    </div>

}