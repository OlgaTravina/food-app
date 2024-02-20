import { Link } from 'react-router-dom';
import './Footer.css';
import { Link as LinkScroll } from "react-scroll";

const navigationFooter = [
  { name: "About Us", href: "#" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "#" },
];

const navigationSocial = [
  { imgUrl: "/images/Footer/Group 888.svg", href: "#" },
  { imgUrl: "/images/Footer/Path 7.svg", href: "#" },
  { imgUrl: "/images/Footer/Path 13.svg", href: "#" },
  { imgUrl: "/images/Footer/Path 6.svg", href: "#" },
];

 function Footer() {
 
	return (
    <div className="footer-background-color">
      <section className="container-1248">
        <nav
          style={{
            display: "flex",
            gap: "50px",
            marginTop: "190px",
            paddingTop: "50px",
            paddingBottom: "30px",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img src="/images/LogoMenu/Logo.svg" alt="" />
            <span className="menu__logo__link-text">eatly</span>
          </Link>
          <div
            className=""
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            {navigationFooter.map((item) =>
              item.href.startsWith("/#") ? (                
                
                <LinkScroll
                  className="menu__link-text"
                  to={item.href.replace("/#", "")}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.name}
                </LinkScroll>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="menu__link-text"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </nav>
        <hr />
        <div
          style={{
            display: "flex",
            gap: "50px",
            paddingTop: "50px",
            paddingBottom: "80px",
          }}
        >
          <div className="copiright__text">© 2021 FILON All Rights Reserv</div>
          <div
            className=""
            style={{
              display: "flex",
              gap: "35px",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            {navigationSocial.map((item) => (
              <a key={item.imgUrl} href={item.href} className="">
                <img src={item.imgUrl} alt="" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;