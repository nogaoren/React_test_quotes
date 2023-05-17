import "./Header.css";
import { BsChatRightQuote, BsChatLeftQuote } from 'react-icons/bs';

function Header(): JSX.Element {
    return (
        <div className="Header centerRow">
            <BsChatRightQuote size={40}/>
			<h1>Quotes app</h1>
            <BsChatLeftQuote size={40}/>
        </div>
    );
}

export default Header;
