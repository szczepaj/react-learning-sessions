import React, { Component } from "react";

const initialStateValue = {
    value: 0
}

export class Counter extends Component {
    state = initialStateValue

    static defaultProps = {
        step: 1,
    };


    handleIncrement = (evt) => {
        this.setState(state => ({
            value: state.value + this.props.step
        }))
    }

    handleDecrement = (evt) => {
        this.setState(state => {
            let value = state.value - this.props.step
            if(value < 0 ) {
                value = 0
            }

            return {
                value
            }
        })
    }

    handleReset = () => {
        this.setState(state => initialStateValue)
    }

    render() {
        const { step } = this.props;

        return (
            <div>
                <span>{this.state.value}</span>
                <button
                    onClick={this.handleIncrement}
                    type="button">Increment by {step}</button>
                <button
                    onClick={this.handleDecrement}
                    type="button">Decrement by {step}</button>
                <button
                    onClick={this.handleReset}
                    type="button">Reset counter</button>
            </div>
        );
    }
}

Counter.propTypes = {

}