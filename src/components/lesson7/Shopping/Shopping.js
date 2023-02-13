import React, {useEffect, useState} from "react";
import {ShoppingItem} from "./ShoppingItem";

export const Shopping = () => {
    const [items, setItems] = useState([])
    const [newItemName, setNewItemName] = useState('')

    const deleteItem = id => {
        const newItemsState = items.filter(item => item.id !== id)
        setItems(newItemsState)
    }

    const addItem = evt => {
        evt.preventDefault()
        const lastId = items.length > 0 ? Math.max(...items.map(item => item.id)) : 0
        const newItemsState = items.concat({ name: newItemName, id: lastId + 1})

        // [].push(val) => [val]
        // const x = []; x.concat(val) => [val] !== x
        //     [...items, { name: newItemName, id: lastId + 1 }]  => items.concat({ name: newItemName, id: lastId + 1})

        setItems(newItemsState)
        setNewItemName('')
    }

    const handleInputChange = evt => setNewItemName(evt.target.value)

    useEffect(() => {
        const list = window.localStorage.getItem('shopping-list') // 1
        if(!list) return

        try {
            setItems(JSON.parse(list))
        } catch (e) {
            console.error(e)
        }
    }, [])

    useEffect(() => {
        const shoppingListStringified = JSON.stringify(items)
        window.localStorage.setItem('shopping-list', shoppingListStringified)
    }, [items])

    return (
        <div>
            {items.map((item, index) => (
                <ShoppingItem item={item} deleteItem={deleteItem} key={index} />
            ))}
            <form onSubmit={addItem}>
                <input value={newItemName} type="text" onChange={handleInputChange} />
            </form>
        </div>
    )
}