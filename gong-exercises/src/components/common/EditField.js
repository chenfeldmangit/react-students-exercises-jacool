import React from "react";
import PropTypes from "prop-types";

export default function EditField(props) {
    const handleChange = (ev) => {
        const value = ev.target.value;
        props.changeHandler(props.fieldName, value);
    };

    return (
        <div className="edit-field-container">
            <label htmlFor={"editField" + props.fieldName}>{props.fieldNameDisplay}</label>
            <props.fieldType
                id={"editField" + props.fieldName}
                type="text"
                maxLength={props.maxLength}
                className="profile-edit-input"
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleChange}/>
            <div className="input-counter">
                <span className="counter">{props.value.length}</span><span>/{props.maxLength}</span>
            </div>
        </div>);
}

EditField.defaultProps = {
    fieldType: "input",
    value: "",
};

EditField.propTypes = {
    value: PropTypes.string,
    fieldName: PropTypes.string.isRequired,
    fieldNameDisplay: PropTypes.string.isRequired,
    fieldType: PropTypes.string,
    maxLength: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func
};
