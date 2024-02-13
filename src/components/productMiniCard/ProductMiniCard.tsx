import './ProductMiniCard.css';

type ProductMiniCardProps = { 
	imgUrl: string,
	title: string,
	text: string,
	time: string,
	style?: React.CSSProperties,
	isRed?: boolean
 }

 const innerStyle = {
    display:"flex",
	gap:"20px",
	alignItems:"center",
	backgroundColor:"white",
	paddingRight:"10px",
	paddingLeft:"10px",
	paddingTop:"5px",
	paddingBottom:"5px",
	borderRadius: "15px"
 }

function ProductMiniCard({imgUrl,title,text,time,style,isRed=false}:ProductMiniCardProps) {
 
	return (
    <div className="productMiniCard__card" style={{ ...style, ...innerStyle }}>
      <img src={imgUrl} alt="" />
      <div>
        <div className="productMiniCard__title">{title}</div>
        <div className="productMiniCard__text" style={isRed?{ color: 'red'}:{}}>
          {text}
        </div>
      </div>
      <span
        className="productMiniCard__time"
        style={{ alignSelf: "flex-end", marginLeft: "auto" }}
      >
        {time}
      </span>
    </div>
  );
}
export default ProductMiniCard;