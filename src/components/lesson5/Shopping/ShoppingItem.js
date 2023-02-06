import React from 'react'

export class ShoppingItem extends React.PureComponent{
    deleteThisItem = () => {
        const { item, deleteItem } = this.props
        const { id } = item

        deleteItem(id)
    }

    shouldComponentUpdate() {
        // Komponent zaktualizuje się każdym razem gdy nie jest PureComponentem
        // Domyslna implementacja shouldComponentUpdate zawsze zwraca true
        // Implementacja shouldComponentUpdate w przypadku PureComponent robi shallowComparison gdzie porównuje wartości propsów/stanu
    }

    componentWillUnmount() {
        // alert(`${this.props.item.name} is going to be removed`)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prev props', prevProps.item)
        console.log('current props', this.props.item)
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