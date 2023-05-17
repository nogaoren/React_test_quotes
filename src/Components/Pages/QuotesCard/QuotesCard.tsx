import "./QuotesCard.css";
import { useEffect, useState } from "react";
import { Quote, Root } from "../../../Models/QuoteModel";
import axios from "axios";
import notyfService from "../../../Service/NotificationService";
import urlService from "../../../Service/UrlService";
import Card from "../../Shared/Card/Card";

function QuotesCard(): JSX.Element {
    const[quote, setQuote] = useState<Quote[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        axios.get<Root>(urlService.urls.quotes)
            .then(res => {
                setQuote(res.data.quotes);
                notyfService.success('Data loaded successfully');})
            .catch(err => {notyfService.error('Data did not load');})
    },[]);

    return (
        <div className="QuotesCard">
            <header className="centerColumn">
                <h2>Quotes in cards</h2>
                <div className="centerRow">
                    <label>Search in the quotes</label>
                    <input type="text" placeholder="Word or words in the quotes" className="border" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
                </div>
            </header>

            <div className="centerRow">
			{
                quote.filter(q => q.quote.toLowerCase().includes(search)).map(q => <Card key={q.id} card={q}/>)
            }
            </div>
        </div>
    );
}

export default QuotesCard;
