import "./Features.css";

const Features = function () {
  return (
    <div className="features__background" style={{ marginTop: "150px" }}>
      <section
        className="container-1248"
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div>
          <div className="features__data">10K+</div>
          <div className="features__text">Satisfied Costumers</div>
          <div className="features__text">All Great Over The World </div>
        </div>
        <div>
          <div className="features__data">4M</div>
          <div className="features__text">Healthy Dishes Sold </div>
          <div className="features__text"> Including Milk Shakes Smooth</div>
        </div>
        <div>
          <div className="features__data">99.99%</div>
          <div className="features__text">Reliable Customer Support </div>
          <div className="features__text">We Provide Great Experiences</div>
        </div>
      </section>
    </div>
  );
};
export default Features;
