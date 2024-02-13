import './ReviewsCard.css';

type ReviewsCardProps = { 
	imgUrl?: string,	
	name?: string,
	description?: string,
	text: string,
	rating: number
 }

 const innerStyle = {
    display:"flex",
	gap:"20px",
	alignItems:"center"		
 }

function ReviewsCard({imgUrl,name,description,text,rating}:ReviewsCardProps) {
 
	return (
		<div className="reviewCard__card">
			<div style={innerStyle}>
				<img  src={imgUrl} alt="" />
				<div>
					<div className="reviewCard__name">{name}</div>
			        <div className="reviewCard__description">{description}</div>
				</div>
				{imgUrl && 
				<img style={{marginLeft:"auto"}} src="/images/Reviews/Path 173.svg" alt="" />
				}
			    
			</div>
			<p className="reviewCard__text">{text}</p>
			
			<div>
				
				{
					Array(rating)
					.fill(undefined)
					.map(ignory=> <img style={{padding:"3px"}} src="/images/Reviews/Star.svg" alt="" />)
				}
				
			</div>
				
			
		</div>
	)
}
export default ReviewsCard;