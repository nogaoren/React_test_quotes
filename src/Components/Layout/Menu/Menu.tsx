import { Link } from "react-router-dom";
import "./Menu.css";
import { AiOutlineHome } from 'react-icons/ai';
import { BsChatSquareQuote, BsFillChatSquareQuoteFill, BsInfoSquare } from "react-icons/bs";

function Menu(): JSX.Element {
    return (
        <div className="Menu centerColumn">
			<Link to="home" className="border centerColumn" title="Home">
                <AiOutlineHome/>
                Home
            </Link>
			<Link to="quotesCard" className="border centerColumn" title="Quotes in cards">
                <BsChatSquareQuote/>
                Quotes in cards
            </Link>
			<Link to="quotesTable" className="border centerColumn" title="Quotes in a table">
                <BsFillChatSquareQuoteFill/>
                Quotes in a table
            </Link>
			<Link to="about" className="border centerColumn" title="About this site">
                <BsInfoSquare/>
                About
            </Link>
        </div>
    );
}

export default Menu;
