import "./Hero.css";
import ProductMiniCard from "../../components/productMiniCard/ProductMiniCard";

const purchaseItem = [
  {
    imgUrl: "/images/Control Purchase/ChickenHell.png",
    title: "Chicken Hell",
    text: "On The Way",
    time: "3:09 PM",
  },
  {
    imgUrl: "/images/Control Purchase/SweDish.png",
    title: "Swe Dish",
    text: "Delivered",
    time: "Yesterday",
  },
  {
    imgUrl: "/images/Control Purchase/FishHellVeg.png",
    title: "Fish Hell Veg",
    text: "Cancelled",
    time: "Yesterday",
  },
];
const Hero = function () {
  return (
    <section
      className="container-1248"
      style={{
        display: "flex",
        marginTop: "130px",
        paddingBottom: "30px",
        gap: "50px",
      }}
    >
      <div style={{ width: "50%" }}>
        <div>
          <img
            style={{ verticalAlign: "middle" }}
            src="images/Hero/Line 203.svg"
            alt=""
          />
          <span className="hero__pre-text">OVER 1000 USERS</span>
        </div>
        <div className="hero__header">
          Enjoy Foods All Over The
          <span className="highlight-text">World</span>
        </div>
        <div
          className="hero__text"
          style={{ width: "85%", marginTop: "20px", marginBottom: "50px" }}
        >
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a <span className="highlight-text">$20 bonus.</span>
        </div>
        <div>
          <button className="hero__get-started-button">Get Started</button>
          <button className="hero__go-pro-button">Go Pro</button>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "50%",
          marginLeft: "130px",
          marginTop: "20px",
        }}
      >
        <img
          style={{ position: "absolute", top: "-17px", right: "68px" }}
          src="images/Hero/Ellipse 2038.svg"
          alt=""
        />
        <img
          style={{ position: "absolute", right: "85px", top: "-10px" }}
          src="images/Hero/Food Image.png"
          alt=""
        />
        <img
          style={{ position: "absolute", right: "350px", top: "220px" }}
          src="images/Hero/Graph.png"
          alt=""
        />
        <img
          style={{ position: "absolute", right: "-30px", top: "-103px" }}
          src="images/Hero/Illustration 01.svg"
          alt=""
        />
        <img
          style={{ position: "absolute", right: "600px", top: "470px" }}
          src="images/Hero/Illustration 02.svg"
          alt=""
        />
        <img
          style={{ position: "absolute", right: "7px", top: "43px" }}
          src="images/Hero/Arrow 01.svg"
          alt=""
        />
        <ProductMiniCard
          {...purchaseItem[0]}
          style={{
            position: "absolute",
            right: "7px",
            top: "-72px",
            width: "310px",
          }}
        />
      </div>
    </section>
  );
};
export default Hero;
