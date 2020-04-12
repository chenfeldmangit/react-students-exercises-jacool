import React, {Component} from 'react';
import PropTypes from 'prop-types';

import EditField from "../common/EditField";

import close_img from "../../img/close.svg";
import TextButton from "../common/TextButton";

class ProfileEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: props.profile
        }
    }

    handleFieldChange = (fieldName, value) => {
        this.setState((state, props) => {
            const profile = {...state.profile};
            profile[fieldName] = value;
            return {profile:profile};
        })
    };

    handleSave = () => {
        this.props.closeHandler(this.state.profile)
    };

    render() {
        return (
            <div id="profileEditModal" className="modal">
                <div id="profileEditContainer">
                    <div className="modal-top-bar">
                        <img src={close_img} width="22" height="22" alt="Close" className="icon-button colored"
                             onClick={() => this.props.closeHandler(null)}/>
                        <span className="tab-title">Edit profile</span>
                        <TextButton text="Save" onClick={this.handleSave} />
                    </div>
                    <img src={this.state.profile.background} alt="Background"/>
                    <img src={this.state.profile.imgPath} width="112" height="112" className="profile-face"
                         alt="My Pic"/>
                    <EditField fieldName="name" fieldNameDisplay="Name"
                               maxLength={50}
                               placeholder="Add your name"
                               value={this.state.profile.name}
                               changeHandler={this.handleFieldChange}/>
                    <EditField fieldName="bio" fieldNameDisplay="Bio"
                               fieldType="textarea"
                               maxLength={160}
                               placeholder="Add your bio"
                               value={this.state.profile.bio}
                               changeHandler={this.handleFieldChange}/>
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
