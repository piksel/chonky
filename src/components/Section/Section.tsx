
import React, { useRef } from 'react';
import { CommonProps } from '../../types';
import './Section.scss'
export interface SectionProps extends CommonProps {
    header?: string;
    collapsible?: boolean;
    open?: boolean;
}
const SectionBody: React.FC<SectionProps> = (props) => {
    const {children, header} = props;
    const detailsRef = useRef<HTMLDetailsElement>(null);
    const open = props.open ?? detailsRef.current?.open ?? false;

    const Wrapper =  props.collapsible ? ({children}: {children: React.ReactNode}) => <details ref={detailsRef} open={open} >{children}</details> : React.Fragment;

    return (<section className="cky-section" style={props.style}>
        <Wrapper>
            {props.collapsible 
                ? <summary><h3>{header}</h3></summary> 
                : <h3>{header}</h3>
            }
            <div className="cky-section-content">
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
    return (<div className='cky-section-footer'>{children}</div>)
}

export const Section = SectionBody as (React.FC<SectionProps> & {Footer: React.FC<SectionFooterProps>});
Section.Footer = SectionFooter;

// Footer