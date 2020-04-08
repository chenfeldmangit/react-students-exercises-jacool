import React from 'react';

class TrendsContainer extends React.Component {
    render() {
        return (
            <div id="suggestions-container">
                <div id="search-box">
                    <label htmlFor="search-input">
                        <img src="img/search.svg" width="25" height="25" alt="Search" className="icon-button"
                             onClick="Search.search()"/>
                    </label>
                    <input type="text" id="search-input" placeholder="Search something"/>
                </div>
                <div>
                    Trends for you
                </div>
            </div>
        );
    }
}

export default TrendsContainer;
