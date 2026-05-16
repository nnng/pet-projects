import './Footer.scss';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="left">
          <div className="logo">NEXORA</div>
          <div className="muted">Premium online courses and mentorship</div>
        </div>
        <div className="right muted">
          Telegram • Instagram • YouTube
          <br />© 2026 NEXORA Academy
          <br />
          <span className="disclaimer">
            (Личность или продукт вымышленные — это не коммерческий продукт и не имеет отношения к
            реальной жизни.)
          </span>
        </div>
      </div>
    </footer>
  );
}
