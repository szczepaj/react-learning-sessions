import React from 'react'

export const Layout = props => (
    <div>
        <h2>Tytuł naszego layoutu</h2>
        {props.children}
        <span>Dół naszego layoutu</span>
        <span>Słowo od sponsorów</span>
    </div>
)