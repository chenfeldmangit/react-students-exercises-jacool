import React, {Component} from "react";
import PropTypes from "prop-types";

class EditField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    handleChange = (ev) => {
        const value = ev.target.value;
        this.setState({value: value});
        this.props.changeHandler(this.props.fieldName, value);
    };

    render() {
        return (
            <div className="profile-edit-field-container">
                <label htmlFor={"editField" + this.props.fieldName}>{this.props.fieldNameDisplay}</label>
                <this.props.fieldType
                    id={"editField" + this.props.fieldName}
                    type="text"
                    maxLength={this.props.maxLength}
                    className="profile-edit-input"
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <div className="input-counter">
                    <span className="counter">{this.state.value.length}</span><span>/{this.props.maxLength}</span>
                </div>
            </div>);
    }
}

EditField.defaultProps = {
    fieldType: "input",
};

EditField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    fieldNameDisplay: PropTypes.string.isRequired,
    fieldType: PropTypes.string,
    maxLength: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    changeHandler: PropTypes.func
};

export default EditField;
