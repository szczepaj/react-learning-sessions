import React from 'react'

const boxes = Array.from(Array(10))

export class Scroll extends React.Component {
    state = {
        title: 'Welcome'
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div style={{
                    backgroundColor: 'red',
                    width: 400,
                    position: 'absolute',
                    top: 20,
                    left: 40,
                    height: 50
                }}>
                    <div style={{
                        backgroundColor: 'green',
                        width: 100,
                        height: 50
                    }}>

                    </div>
                </div>
                {boxes.map((_, i ) => (
                    <div style={{
                        backgroundColor: 'black',
                        border: '2px solid red',
                        height: '100vh'
                    }}>
                    </div>
                ))}
            </div>
        )
    }
}