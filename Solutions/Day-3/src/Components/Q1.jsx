import html_log from '../assets/html_logo.png';
import css_log from "../assets/css_logo.png"
import js_logo from "../assets/js_logo.png"
import react_logo from "../assets/react_logo.png"
export default function Q1(props) {
    return (<>
        <div className="main-div">
            <div className="row">
                <p className="row-p">Front End Technologies</p>
            </div>
            <div className="col">
                <img src={html_log} alt="html_logo"/>
                <img src={css_log} alt="css_logo"/>
                <img src={js_logo} alt="js_logo"/>
                <img src={react_logo} alt="react_log"/>
            </div>
        </div>
    </>)
}