import React from 'react';

class InputField extends React.Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        this.props.onChange(event.target.value)
    }

    render() {
        return (
            <input
                type="text"
                id={this.props.id}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.handleInputChange}
            />
        )
    }
}

export default InputField;