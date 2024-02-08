import React from 'react';
// import { useState } from 'react';
class NameForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log(data.get('name')); // Reference by form input's `name` tag

    fetch('http://localhost:3000/', {
      method: 'POST',
      body: data,
    });
  }
  render() {
    return (
      <div><h3> Ready to try your luck </h3>
      <h1> Roll the dice </h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Name</label>
        <input id="username" name="username" type="text" />

        <button>Submit</button>
      </form></div>
      
    );
  }
}

export default NameForm;