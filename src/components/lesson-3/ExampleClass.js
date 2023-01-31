import React from 'react'

export class ExampleClass extends React.Component {
    constructor() {
        super();
    }

    handleClick() {
        console.log(this)
    }

    handleClickBounded = () => {
        console.log(this)
    }

    render() {
        return (
            <>
                <div>Hello that's me</div>
                <div></div>
            </>
        )
    }
}