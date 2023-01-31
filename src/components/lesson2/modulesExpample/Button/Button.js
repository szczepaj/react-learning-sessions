import React from 'react'
import css from './Button.module.css'

export class Button extends React.Component {

    render() {
        const { text } = this.props
        return (
            <button
                onClick={(event) => console.log('event')}
                className={css.button}
            >
                <span className={css.text}>{text}</span>
            </button>
        )
    }
}