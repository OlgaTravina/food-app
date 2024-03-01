import './ProductCard.css';
import type { ProductCardProps } from "../../types";


 const innerStyle = {
    borderRadius: "0 0 30px 30px",
	padding:"20px",
	backgroundColor:"white",
	boxShadow: "6px 32px 30px 0px rgba(34, 60, 80, 0.2)"
 }

function ProductCard({imgUrl,tag,title,time,rating}: ProductCardProps) {
 
	return (
    <div className="productCard__card" data-testid="root-product-card">
      <img
        src={imgUrl}
        alt=""
        style={{
          width: "396px",
          height: "175px",
          objectFit: "cover",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      />
      <div style={innerStyle}>
        <div className="productCard__tag">{tag}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="productCard__title">{title}</div>
          <img
            className="productCard__favorite-button"
            src="/images/Our Top Restaurants/Bookmark.svg"
            alt=""
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span className="productCard__time">{time}</span>
          <img className="" src="/images/Our Top Restaurants/Star.svg" alt="" />
          <span className="productCard__time">{rating}</span>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;