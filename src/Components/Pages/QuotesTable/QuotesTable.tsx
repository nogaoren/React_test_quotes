import "./QuotesTable.css";
import { useEffect, useState } from "react";
import { Quote, Root } from "../../../Models/QuoteModel";
import axios from "axios";
import notyfService from "../../../Service/NotificationService";
import urlService from "../../../Service/UrlService";

function QuotesTable(): JSX.Element {
    const[quote, setQuote] = useState<Quote[]>([]);
    const [search, setSearch] = useState<string>('');
    const tableHeader = ['Quote', 'Author']

    useEffect(() => {
        axios.get<Root>(urlService.urls.quotes)
            .then(res => {
                setQuote(res.data.quotes);
                notyfService.success('Data loaded successfully');})
            .catch(err => {notyfService.error('Data did not load');})
    },[]);

    return (
        <div className="QuotesTable">
            <header className="centerColumn">
                <h2>Quotes in cards</h2>
                <div className="centerRow">
                    <label>Search in the quotes</label>
                    <input type="text" placeholder="Word or words in the quotes" className="border" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
                </div>
            </header>

            <table>
                <thead>
                <tr>
                    {tableHeader.map(h => <th key={h}>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        quote
                        .filter(q => q.quote.toLowerCase().includes(search))
                        .map(q => 
                            <tr key={q.id}>
                                <td>{q.quote ? <span className="quote">"{q.quote}"</span> : <span className="NotAvailable">Not available</span>}</td>
                                <td>{q.author ? <span className="author">{q.author}</span> : <span className="NotAvailable">Not available</span>}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
			
        </div>
    );
}

export default QuotesTable;
