function SectionTitle({ subtitle, title }) {
    return (
        <>
            <p className="section-subtitle">{subtitle}</p>
            <h2 className="section-title">{title}</h2>
        </>
    );
}

export default SectionTitle;