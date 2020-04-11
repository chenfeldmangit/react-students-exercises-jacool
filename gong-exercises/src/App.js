import React from 'react';
import './App.css';
import './sass/common.scss';
import Menu from "./menu/Menu";
import Home from "./home/Home";
import TrendsContainer from "./trends/TrendsContainer";
import Profile from "./profile/Profile";
import CurrentTab from "./common/CurrentTab";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: CurrentTab.HOME
        }
    }

    renderCurrentTab = () => {
        switch (this.state.currentTab) {
            case CurrentTab.HOME:
                return <Home/>;
            case CurrentTab.PROFILE:
                return <Profile goBackHandler={this.goBackHandler}/>;
            default:
                alert(`Unexpected tab name passed "${this.state.currentTab}"`);
        }
    };

    menuHandler = (menu) => {
        this.setState({currentTab: menu});
    };

    goBackHandler = () => {
        this.setState({currentTab: CurrentTab.HOME});
    };

    render() {
        return (
            <>
                <Menu menuHandler={this.menuHandler}/>
                {
                    this.renderCurrentTab()
                }
                <TrendsContainer/>
            </>
        );
    }
}

export default App;
