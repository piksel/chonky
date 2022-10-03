import React, { CSSProperties } from "react";

import './Box.scss'

export const Box: React.FC<{style?: CSSProperties}> = (props) => {
    const {children, style} = props;
    return (<div className='chy-box' style={style}>{children}</div>)
}