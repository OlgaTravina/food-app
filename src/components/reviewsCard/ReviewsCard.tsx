import './ReviewsCard.css';

type ReviewsCardProps = { 
	name?: string,
	text: string
 }

 const innerStyle = {
    display:"flex",
	gap:"20px",
	alignItems:"center"		
 }

function ReviewsCard({name,text}:ReviewsCardProps) {
 
	return (
		<div className="reviewCard__card">
			<div style={innerStyle}>
				<div>
					<div className="reviewCard__name">{"@"+name}</div>			        
				</div>
				
				<img style={{marginLeft:"auto"}} src="/images/Reviews/Path 173.svg" alt="" />
				
			    
			</div>
			<p className="reviewCard__text">{text}</p>
			
			
			
		</div>
	)
}
export default ReviewsCard;