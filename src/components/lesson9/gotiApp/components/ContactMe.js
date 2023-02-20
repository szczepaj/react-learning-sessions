import React from 'react'

export const ContactMe = () => (
    <div>
        <h2>Contact me</h2>
        <label htmlFor="name">
            Name
        </label>
        <input type="text" id="name" />
        <label htmlFor="desc">
            Please give me some more details
        </label>
        <textarea id="desc"/>
    </div>
)