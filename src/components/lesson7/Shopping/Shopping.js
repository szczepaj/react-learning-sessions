import React from 'react'
import {ShoppingItem} from "./ShoppingItem";

// componentDidMount - pobieramy z local storage ostatnio zapisany stan
// componentDidUpdate - zapisujemy zmieniony stan do local storage
// componentWillUnmount - alert informujacy o usunięciu z listy

export class Shopping extends React.PureComponent {
    state = {
        items: [],
        newItemName: ''
    }

    deleteItem = id => {
        this.setState(state => ({
            items: state.items.filter(item => item.id !== id)
        }))
    }

    addItem = evt => {
        evt.preventDefault()

        const { items } = this.state
        const lastId = items.length > 0 ? Math.max(...items.map(item => item.id)) : 0

        this.setState(state => ({
            items: state.items.concat({ name: state.newItemName, id: lastId + 1}),
            newItemName: ''
        }))
    }

    handleInputChange = evt => {
        this.setState(state => ({
            newItemName: evt.target.value
        }))
    }

    componentDidMount() {
        const list = window.localStorage.getItem('shopping-list') // 1
        if(!list) return

        try {
            this.setState({
                items: JSON.parse(list)
            })
        } catch (e) {
            console.error(e)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.items.length !== this.state.items.length) {
            const shoppingListStringified = JSON.stringify(this.state.items)
            window.localStorage.setItem('shopping-list', shoppingListStringified)
        }
    }

    render() {
        return (
            <div>
                {this.state.items.map((item, index) => (
                    <ShoppingItem item={item} deleteItem={this.deleteItem} key={index} />
                ))}
                <form onSubmit={this.addItem}>
                    <input value={this.state.newItemName} type="text" onChange={this.handleInputChange} />
                </form>
            </div>
        )
    }
}