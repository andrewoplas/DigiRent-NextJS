const SectionDivider = ({ title, description }) => (
  <div className="section-divider">
    <div className="title main-desc">{title}</div>
    <div className="action">
      <p className="main-desc">{description}</p>
      <button className="button">SHOW MORE</button>
    </div>
  </div>
);

export default SectionDivider;
