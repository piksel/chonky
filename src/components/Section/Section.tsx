
import { CommonProps } from '../../types';
import './Section.scss'

export interface SectionProps extends CommonProps {
    header?: string;
}
const SectionBody: React.FC<SectionProps> = (props) => {
    const {children, header} = props;

    return (<section className="chy-section" style={props.style}>
        <h3>{header}</h3>
        <div className="chy-section-content">
        {children}
        </div>
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