import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import QuotesCard from "../../Pages/QuotesCard/QuotesCard";
import About from "../../Pages/About/About";
import QuotesTable from "../../Pages/QuotesTable/QuotesTable";
import Page404 from "../../Pages/Page404/Page404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/> 
                <Route path="home" element={<Home />}/> 
                <Route index element={<Home />}/>
                <Route path="about" element={<About/>}/>
                <Route path="quotesCard" element={<QuotesCard/>}/> 
                <Route path="quotesTable" element={<QuotesTable/>}/>
                <Route path="*" element={<Page404/>}/> 
            </Routes> 

        </div>
    );
}

export default Routing;
