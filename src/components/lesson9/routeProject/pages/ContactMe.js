import React from "react";

export const ContactMe = () => {
  return (
    <main>
      <h1>Contact me </h1>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>
        <label htmlFor="name">
            Name
        </label>
        <input type="text" id="name" />
        <label htmlFor="desc">
            Please give me some more details
        </label>
        <textarea id="desc"/>
    </main>
  );
};
