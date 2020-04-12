import React from 'react';
import "../../sass/trends.scss";
import search_img from "../../img/search.svg";

class TrendsContainer extends React.Component {
    render() {
        return (
            <div id="suggestionsContainer">
                <div id="searchBox">
                    <label htmlFor="search-input">
                        <img src={search_img} width="25" height="25" alt="Search" className="icon-button"
                             onClick={() => {}}/>
                    </label>
                    <input type="text" id="searchInput" placeholder="Search something"/>
                </div>
                <div>
                    Trends for you
                </div>
            </div>
        );
    }
}

export default TrendsContainer;
