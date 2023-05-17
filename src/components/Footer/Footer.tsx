const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="footer-container__copyright">
          © 2020 Solisgroup. All Rights Reserved.
        </span>
        <div className="footer-container__created">
          <span className="footer-container__created-pre">made by</span>{" "}
          <span className="footer-container__created-name">Zgraya.digital</span>
        </div>
        <div className="footer-container-links">
          <a className="footer-container-links-anchor" href="/">
            <span className="footer-container-links-anchor__txt">
              User Agreement
            </span>
          </a>
          <a className="footer-container-links-anchor" href="/">
            <span className="footer-container-links-anchor__txt">
              Privacy Policy
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
