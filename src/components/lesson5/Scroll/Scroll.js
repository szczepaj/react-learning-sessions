import React from 'react'

const boxes = Array.from(Array(10))

export class Scroll extends React.Component {
    state = {
        title: 'Welcome',
        progress: 0,
        isFirstRun: true
    }

    handleScroll = () => {
        const currentBottomPosition = window.scrollY + window.innerHeight
        const progressValue = currentBottomPosition / document.documentElement.scrollHeight

        this.setState({
            progress: progressValue
        })
    }

    handleReachBottom = () => {
        window.scrollTo(0,0)
        document.removeEventListener('scroll', this.handleScroll)
        this.setState({
            title: 'You have made it!',
            progress: 0,

        })
    }

    handleRestart = () => {
        document.addEventListener('scroll', this.handleScroll)
        this.setState({
            title: 'Welcome back!',
            isFirstRun: false
        })
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.progress !== this.state.progress && this.state.progress === 1) {
            this.handleReachBottom()
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div style={{
                    backgroundColor: 'red',
                    width: 400,
                    position: 'fixed',
                    top: 20,
                    left: 40,
                    height: 50
                }}>
                    <div style={{
                        backgroundColor: 'green',
                        width: this.state.progress * 400,
                        height: 50
                    }}>

                    </div>
                </div>
                {!this.state.isFirstRun && <button onClick={this.handleRestart}>Let's try again</button>}
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