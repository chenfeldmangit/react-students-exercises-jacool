import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProfileEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: props.profile
        }
    }

    handleNameChange = (ev) => {
        const text = ev.target.value;
        this.setState((state, props) => {
            const profile = {...state.profile};
            profile.name = text;
            return {profile:profile};
        })
    };

    handleBioChange = (ev) => {
        const text = ev.target.value;
        this.setState((state, props) => {
            const profile = {...state.profile};
            profile.bio = text;
            return {profile:profile};
        })
    };

    handleSave = () => {
        this.props.closeHandler(this.state.profile)
    };

    render() {
        return (
            <div id="profile-edit-modal" className="modal">
                <div id="profile-edit-container">
                    <div className="modal-top-bar">
                        <img src="img/close.svg" width="22" height="22" alt="Close" className="icon-button colored" onClick={() => this.props.closeHandler(null)}/>
                        <span className="tab-title">Edit profile</span>
                        <span className="button" onClick={this.handleSave}>Save</span>
                    </div>
                    <img src={this.state.profile.background} alt="Background"/>
                    <img src={this.state.profile.imgPath} width="112" height="112" className="profile-face" alt="My Pic"/>
                    <div className="profile-edit-field-container">
                        <label htmlFor="name-field">Name</label>
                        <input id="name-field" type="text" maxLength="50" className="profile-edit-input"
                               placeholder="Add your name" value={this.state.profile.name} onChange={this.handleNameChange}/>
                        <div className="input-counter">
                            <span className="counter">{this.state.profile.name.length}</span><span>/50</span>
                        </div>
                    </div>
                    <div className="profile-edit-field-container">
                        <label htmlFor="bio-field">Bio</label>
                        <textarea id="bio-field" maxLength="160" className="profile-edit-input"
                                  placeholder="Add your bio" value={this.state.profile.bio} onChange={this.handleBioChange} />
                        <div className="input-counter">
                            <span className="counter">{this.state.profile.bio.length}</span><span>/160</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const profileType = PropTypes.shape({
    name: PropTypes.string,
    handle: PropTypes.string,
    bio: PropTypes.string,
    imgPath: PropTypes.string,
    background: PropTypes.string
});

ProfileEditor.propTypes = {
    closeHandler: PropTypes.func.isRequired,
    profile: profileType.isRequired
};

export default ProfileEditor;
