import React from 'react';
import PostContainer from "./PostContainer";
import Data from "./Data";
import ProfileEditor from "./ProfileEditor";
import BackNavHeader from "./BackNavHeader";
import PropTypes from "prop-types";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfile: null,
            myPosts: [],
            showEdit: false
        };
    }

    async componentDidMount() {
        const [profile, posts] = await Promise.all([Data.fetchUserProfile(), Data.getPosts()]);
        const myPosts = posts.filter(p => p.author === profile.name);
        this.setState({myProfile: profile, myPosts: myPosts});
    }

    deleteHandler = (id) => {
        this.setState((state, props) => {
            const posts = state.myPosts.filter(p => p.id !== id);
            return {myPosts: posts};
        });

        Data.removePost(id);
    };

    editHandler = () => {
        this.setState({showEdit: true})
    };

    closeEditHandler = (editedProfile) => {
        if (editedProfile != null) {
            this.setState({myProfile: editedProfile, showEdit: false});
            Data.storeProfile(editedProfile);
        }
        else
            this.setState({showEdit: false});
    };

    render() {
        if (this.state.myProfile == null)
            return (
                <div id="profile-container" className="boxy">
                    <BackNavHeader text="Loading Profile..." goBackHandler={this.props.goBackHandler}/>
                </div>
            );
        else
            return (
                <div id="profile-container" className="boxy">
                    <BackNavHeader text={this.state.myProfile.name} goBackHandler={this.props.goBackHandler}/>
                    <img src={this.state.myProfile.background} alt="Background"/>
                    <div id="profile-details">
                        <div id="profile-pic-bar">
                            <img src={this.state.myProfile.imgPath} width="134" height="134" className="profile-face" alt="My Face"/>
                            <span onClick={this.editHandler} className="button">Edit profile</span>
                        </div>
                        <div id="profile-data-bar">
                            <h2 className="tab-title" id="profile-name">{this.state.myProfile.name}</h2>
                            <h3 className="small-text" id="profile-handle">{this.state.myProfile.handle}</h3>
                            <p className="post-text" id="profile-bio">{this.state.myProfile.bio}</p>
                        </div>
                    </div>
                    <div id="my-tweets-container">
                        <div className="inner-tab-name">
                            Tweets
                        </div>
                        <div id="my-tweets">
                            {
                                this.state.myPosts.length === 0 ?
                                    (
                                        <div id="throbber" className="post-container boxy">
                                            <article>
                                                <h3>Loading Tweets...</h3>
                                            </article>
                                        </div>
                                    ) : (
                                        this.state.myPosts.map(p =>
                                            <PostContainer post={p} deleteHandler={this.deleteHandler} key={p.id}/>)
                                    )
                            }
                        </div>
                    </div>

                    {
                        this.state.showEdit && <ProfileEditor profile={this.state.myProfile} closeHandler={this.closeEditHandler}/>
                    }
                </div>
            );
    }
}

Profile.propTypes = {
    goBackHandler: PropTypes.func.isRequired
};

export default Profile;
