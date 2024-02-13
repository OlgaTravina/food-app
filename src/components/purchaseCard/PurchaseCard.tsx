import './PurchaseCard.css';

type PurchaseCardProps = { 
	imgUrl: string,	
	title: string,
	text: string,
	price: string,
	urlPurchas: string
 }

 const innerStyle = {
    display:"flex",
	gap:"20px",
	alignItems:"center"		
 }


function PurchaseCard({imgUrl,title,text,price,urlPurchas}:PurchaseCardProps) {
 
	return (
		<div className='purchaseCard__card'>
			<div style={innerStyle}>
				<img className="" src={imgUrl} alt="" />		
			    <div>
				  <div className='purchaseCard__title'>{title}</div>
			      <div className='purchaseCard__text'>{text}</div> 			
			    </div>
				<span className='purchaseCard__price' style={{marginLeft:"auto"}}>{price}</span>	
			</div>			
			<img style={{minWidth:"100%"}}  src={urlPurchas} alt="" />
		</div>
	)
}
export default PurchaseCard;