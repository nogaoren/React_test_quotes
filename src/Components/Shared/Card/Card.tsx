import { Quote } from "../../../Models/QuoteModel";
import "./Card.css";
import { BsChatQuote } from 'react-icons/bs';

interface CardProps{
    card: Quote;
}

function Card(props: CardProps): JSX.Element {
    return (
        <div className="Card border">
            <BsChatQuote className="icon"/>
			<p>{props.card.quote ? <span className="quote">"{props.card.quote}"</span> : <span className="NotAvailable">Not available</span>}</p>
            <p>{props.card.author ? <span className="author">{props.card.author}</span> : <span className="NotAvailable">Not available</span>}</p>
        </div>
    );
}

export default Card;
