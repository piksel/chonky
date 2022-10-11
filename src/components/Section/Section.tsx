
import React from 'react';
import { CommonProps } from '../../types';
import './Section.scss'
export interface SectionProps extends CommonProps {
    header?: string;
    collapsible?: boolean;
    open?: boolean;
}
const SectionBody: React.FC<SectionProps> = (props) => {
    const {children, header, open} = props;

    const Wrapper =  props.collapsible ? ({children}: {children: React.ReactNode}) => <details open={open} >{children}</details> : React.Fragment;

    return (<section className="chy-section" style={props.style}>
        <Wrapper>
            {props.collapsible 
                ? <summary><h3>{header}</h3></summary> 
                : <h3>{header}</h3>
            }
            <div className="chy-section-content">
            {children}
            </div>
        </Wrapper>
    </section>)
}

export interface SectionFooterProps extends CommonProps {
    header?: string;
}
const SectionFooter: React.FC<SectionFooterProps> = (props) => {
    const {children} = props;
    return (<div className='chy-section-footer'>{children}</div>)
}

export const Section = SectionBody as (React.FC<SectionProps> & {Footer: React.FC<SectionFooterProps>});
Section.Footer = SectionFooter;

// Footer