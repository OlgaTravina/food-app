import "./Menu.css";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const navigation = [
  { name: "Recipes", href: "/#recipes" },
  { name: "FAQ", href: "/#faq" },
  { name: "Blog", href: "/blog" },
];

function Menu() {
  return (
    <header className="container-1248">
      <nav
        style={{
          display: "flex",
          gap: "110px",
          paddingTop: "57px",
          paddingBottom: "25px",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img src="/images/LogoMenu/Logo.svg" alt="" />
          <span className="menu__logo__link-text">eatly</span>
        </Link>
        <div
          className=""
          style={{ display: "flex", gap: "50px", alignItems: "center" }}
        >
          {navigation.map((item) =>
            item.href.startsWith("/#") ? (
              // <a key={item.name} href={item.href} className="menu__link-text">
              //   {item.name}
              // </a>
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
              <Link key={item.name} to={item.href} className="menu__link-text">
                {item.name}
              </Link>
            )
          )}
        </div>
      </nav>
      <hr />
    </header>
  );
}
export default Menu;
