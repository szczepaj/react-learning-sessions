import {Component} from 'react'

export class Loop extends Component {
    state = {
        value: 0
    }

    asyncState = () => {
        for (let i = 0; i < 3; i += 1) {
            console.log(this.state.value);

            this.setState(prevState => {
                console.log(prevState.value);

                return { value: prevState.value + 1 };
            });
        }
    }

    render() {
        return (
            <button onClick={this.asyncState}>do a loop</button>
        )
    }
}