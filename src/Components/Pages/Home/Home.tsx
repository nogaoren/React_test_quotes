import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home centerColumn">
			<h3>Welcome to the Quotes app</h3>
            <p className="quote">Everybody bring joy to this app - some when they enter, other when they leave</p>
            <p className="author">Anonymous</p>
            <div className="centerColumn">
                <iframe 
                src="https://giphy.com/embed/l41YwHnWIQic9sRuU" 
                width="300"
                height="500"
                frameBorder="0" 
                allowFullScreen
                title="home"></iframe>
            </div>
        </div>
    );
}

export default Home;
