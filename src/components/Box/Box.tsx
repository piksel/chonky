import { CommonProps } from "../../types";
import React from "react";

import './Box.scss'

export interface BoxProps extends CommonProps {

}

export const Box: React.FC<BoxProps> = (props) => {
    const {children, style} = props;
    return (<div className='cky-box' style={style}>{children}</div>)
}