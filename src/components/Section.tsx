
import './Section.scss'

interface SectionBodyProps {
    header?: string;
}

const SectionBody: React.FC<SectionBodyProps> = (props) => {
    const {children, header} = props;

    return (<section className="chy-section">
        <h3>{header}</h3>
        <div className="chy-section-content">
        {children}
        </div>
    </section>)
}

interface SectionFooterProps {
    header?: string;
}
type SectionFooterType = React.FC<SectionFooterProps>;
const SectionFooter: SectionFooterType = (props) => {
    const {children} = props;
    return (<div className='chy-section-footer'>{children}</div>)
}

export const Section = SectionBody as (React.FC<SectionBodyProps> & {Footer: SectionFooterType});
Section.Footer = SectionFooter;

// Footer