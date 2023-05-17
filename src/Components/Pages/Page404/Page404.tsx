import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
			<h3>Sorry, the page you were looking for is not available. But don't worry, we know someone how can take care of it...</h3>
            <div className="centerColumn">
                <iframe 
                src="https://giphy.com/embed/3oEjHNCWpx4iQYytAA" 
                width="300"
                height="500"
                frameBorder="0" 
                allowFullScreen
                title="Page404"></iframe>
            </div>
        </div>
    );
}

export default Page404;
