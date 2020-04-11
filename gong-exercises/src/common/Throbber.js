import React from "react";

class Throbber extends React.Component {
    render() {
        return <div id="throbber" className="post-container boxy">
            <article className="post">
                <h3>Loading Tweets...</h3>
            </article>
        </div>;
    }
}

export default Throbber;
