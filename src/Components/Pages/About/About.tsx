import { BsEmojiSmile } from "react-icons/bs";
import "./About.css";
import { MdOutlineWavingHand } from 'react-icons/md';

function About(): JSX.Element {
    return (
        <div className="About">
			<h3>Hi there friend <MdOutlineWavingHand/>, we come in peace <BsEmojiSmile/></h3>
            <p>This app presents great quotes we collected especially for you. Each quote is listed with its author, if it is known.</p>
            <p>You can search through the quotes using according to key words in the quote or the author's name.</p>

        </div>
    );
}

export default About;
