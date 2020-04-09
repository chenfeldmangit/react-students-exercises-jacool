import React from 'react';

class TwittingContainer extends React.Component {
    render() {
        return (
            <div id="twitting-container" className="boxy">
                <img src="img/jacob.jpeg" alt="Pic" className="profile-pic" width="50" height="50"/>
                <div id="twitting-box">
                    <input type="text" id="twitting-input" placeholder="What's happening?"/>
                    <div id="twitting-toolbar-container">
                        <div id="twitting-toolbar">
                            <img src="img/open-picture.svg" width="24" height="24" className="colored tool-button" alt="Open pic"/>
                            <img src="img/open-gif.svg" width="24" height="24" className="colored tool-button" alt="Open gif"/>
                            <img src="img/smiley.svg" width="24" height="24" className="colored tool-button" alt="Open smiley"/>
                        </div>
                        <div id="small-tweet" onClick={() => {}}>Tweet</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TwittingContainer;

