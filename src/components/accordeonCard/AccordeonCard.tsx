import { useState } from 'react';
import './AccordeonCard.css';

type AccordeonCardProps = { 
	question: string,
	answer: string	
 }

function AccordeonCard({question,answer}: AccordeonCardProps) {
 const [opened, setOpened] = useState(false);
	return (
    <div onClick={(e) => setOpened((prevState) => !prevState)}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{question}</h1>
        <img
          className=""
          src={opened ? "images/FAQs/Minus.svg" : "images/FAQs/Plus.svg"}
          alt=""
        />
      </div>

      <p
        className={
          "accordionCard__text " +
          (opened ? "accordionCard__text_opened" : "accordionCard__text_closed")
        }
      >
        {answer}
      </p>

      <hr />
    </div>
  );
}
export default AccordeonCard;