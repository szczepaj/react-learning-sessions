import React from 'react'

export class ShoppingItem extends React.PureComponent{
    deleteThisItem = () => {
        const { item, deleteItem } = this.props
        const { id } = item

        deleteItem(id)
    }

    componentWillUnmount() {
        // alert(`${this.props.item.name} is going to be removed`)
    }

    componentDidUpdate(prevProps) { //sprostowac porownanie obiektu prev i current
        console.log('previous', prevProps.item)
        console.log('current:', this.props.item)
        console.log('Czy jestem tym samym obiektem', prevProps.item, this.props.item)
    }

    render() {
        const { item, deleteItem } = this.props
        return (
            <div>
                {item.name}
                <button onClick={this.deleteThisItem}>Delete item</button>
            </div>
        )
    }
}