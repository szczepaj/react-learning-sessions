import React, { Component } from 'react'

export class Toggle extends Component {
    state = {
        isOpen: this.props.isOpen
    }

    toggle = () => {
        this.setState(state =>({
            isOpen: !state.isOpen
        }))
    }

    render() {
        const { isOpen } = this.state
        const { children } = this.props
        return (
            <>
                <button onClick={this.toggle}>Toggle</button>
                {isOpen && children}
            </>
        );
    }
}