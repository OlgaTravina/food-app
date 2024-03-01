import { Element} from "react-scroll";
import "./MainPage.css";
import Recipes from "../../components/recipes/Recipes";
import AccordeonCard from "../../components/accordeonCard/AccordeonCard";
import PurchaseCard from "../../components/purchaseCard/PurchaseCard";
import CustomerSay from "../../components/customerSay/CustomerSay";
import Features from '../../components/features/Features';
import Hero from '../../components/hero/Hero';
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

const purchasePriceItem = [
  {
    imgUrl: "/images/Control Purchase/icon (1).svg",
    title: "Expense",
    text: "Increased By 10%",
    price: "$409.00",
    urlPurchas: "/images/Control Purchase/divider (1).svg",
  },
  {
    imgUrl: "/images/Control Purchase/icon.svg",
    title: "Vocher Usage",
    text: "Increased By 5%",
    price: "$45.78",
    urlPurchas: "/images/Control Purchase/divider.svg",
  },
];

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
  },
  { question: "How Does It Work ?", answer: "" },
  { question: "How does your food delivery service work?", answer: "" },
  { question: "What payment options do you accept?", answer: "" },
  { question: "Do you offer discounts or promotions?", answer: "" },
];

// Menu
function MainPage() {  
  return (
    <>
      
      <Hero/>

      <Features />
     

      {/* Download App */}

      <section className="container-1248">
        <div
          style={{
            display: "flex",
            marginTop: "110px",
            marginBottom: "110px",
            gap: "50px",
          }}
        >
          <div style={{ textAlign: "center", width: "50%" }}>
            <img src="images/Download App/Mobile.png" alt="" />
          </div>

          <div
            style={{ width: "50%", paddingTop: "85px", paddingLeft: "100px" }}
          >
            <div className="downloadApp__header">
              Premium <span className="highlight-text">Quality</span>
            </div>{" "}
            <div className="downloadApp__header">For Your Health</div>
            <ul style={{ paddingTop: "50px" }}>
              <li className="downloadApp__text">
                Premium quality food is made with ingredients that are packed
                with essential vitamins, minerals.
              </li>
              <li className="downloadApp__text">
                These foods promote overall wellness by support healthy
                digestion and boosting immunity
              </li>
            </ul>
            <div style={{ paddingTop: "50px" }}>
              <button className="downloadApp__download-button">
                <span
                  className="downloadApp__download-button__text"
                  style={{ verticalAlign: "middle" }}
                >
                  Download
                </span>
                <img
                  src="images/Download App/Arrow.svg"
                  alt=""
                  style={{ verticalAlign: "middle" }}
                />
              </button>
              <img
                style={{ position: "relative", top: "83px", left: "-30px" }}
                src="images/Download App/Vector 14.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <hr />
      </section>

      {/* Our Top Restaurants */}
      <Element name="recipes">
        <Recipes />
      </Element>

      {/* Control Purchase  */}
      <section className="container-1248">
        <div
          className="flex-gap-50"
          style={{ marginTop: "135px", marginBottom: "120px" }}
        >
          <div style={{ width: "50%" }}>
            <div className="controlPurchase__header">
              Control <span className="highlight-text">Purchases</span>{" "}
            </div>
            <div className="controlPurchase__header">Via Dashboard</div>
            <div style={{ width: "345px", marginTop: "43px" }}>
              {purchaseItem.map((item, i) => (
                <ProductMiniCard
                  key={i}
                  {...item}
                  isRed={i === 2}
                  style={{ marginBottom: "20px" }}
                />
              ))}
            </div>
          </div>

          <div
            style={{
              width: "50%",
              backgroundColor: "white",
              borderRadius: "30px",
              padding: "30px",
              boxShadow: "6px 32px 30px 0px rgba(34, 60, 80, 0.2)",
            }}
          >
            <div
              className="purchase__header"
              style={{ display: "flex", gap: "50px", alignItems: "center" }}
            >
              <div className="purchase__header__text">Purchases</div>
              <div
                className="purchase__combobox"
                style={{ marginLeft: "auto" }}
              >
                <span className="purchase__combobox__text">This month</span>
                <img
                  src="images/Our Top Restaurants/chevron-down.svg"
                  alt=""
                  style={{ verticalAlign: "middle", marginLeft: "15px" }}
                />
              </div>
            </div>

            <div>
              {purchasePriceItem.map((item, i) => (
                <PurchaseCard key={i} {...item} />
              ))}
            </div>
          </div>
        </div>

        <hr />
      </section>

      {/* Reviews */}
      <CustomerSay />

      {/* FAQs */}
      <Element name="faq">
        <section id="faq" className="container-1248">
          <div>
            <div style={{ textAlign: "center", marginTop: "255px" }}>
              <img
                style={{ position: "relative", top: "0px", right: "-220px" }}
                src="images/FAQs/illustration 01.svg"
                alt=""
              />
            </div>
            <div className="faq__header" style={{ textAlign: "center" }}>
              Frequently Asked{" "}
            </div>
            <div style={{ textAlign: "center" }} className="faq__header">
              <span className="highlight-text">Questions</span>
            </div>
          </div>
          <div
            style={{
              marginTop: "105px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            {faqs.map((item, i) => (
              <AccordeonCard
                key={i}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>
      </Element>
    </>
  );
}

export default MainPage;
