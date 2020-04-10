import React from 'react';
import './App.css';
import './sass/style.css';
import Menu from "./Menu";
import Home from "./Home";
import TrendsContainer from "./TrendsContainer";
import Profile from "./Profile";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: App.HOME
        }
    }

    currentTabRender = () => {
        switch (this.state.currentTab) {
            case App.HOME:
                return <Home/>;
            case App.PROFILE:
                return <Profile goBackHandler={this.goBackHandler}/>;
            default:
                alert(`Unexpected tab name passed "${this.state.currentTab}"`);
        }
    };

    menuHandler = (menu) => {
        this.setState({currentTab: menu});
    };

    goBackHandler = () => {
        this.setState({currentTab: App.HOME});
    };

    render() {
        return (
            <>
                <Menu menuHandler={this.menuHandler}/>
                {
                    this.currentTabRender()
                }
                <TrendsContainer/>
            </>
        );
    }
}

App.HOME = "Home";
App.PROFILE = "Profile";

export default App;
