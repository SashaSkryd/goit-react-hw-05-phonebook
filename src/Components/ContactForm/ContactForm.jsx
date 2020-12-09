import React, { Component } from "react"
import style from "./ContactForm.module.css"
import hortid from "short-id"

const INITIAL_STATE = {name: '', number: ''}

export default class ContactForm extends Component {
  state = {
    ...INITIAL_STATE
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addContact({...this.state, id: hortid.generate()})
    this.reset();
  }
            
    reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {

    const { name, number } = this.state
    
    return (
      <form onSubmit={this.handleSubmit} className={style.form}>
          <label>
            <h2 className={style.title}>Name</h2>
            <input type="text" name="name" placeholder="Enter name" value={name} onChange={this.handleChange} className={style.input} />
          </label>
          <label>
            <h2 className={style.title}>Phone</h2>
          <input type="text" name="number" placeholder="Enter phone" value={number} onChange={this.handleChange} className={style.input} />
          </label>
        <button type="submit" className={style.btn}> <span className={style.btnText}>add contact</span></button>
        </form>
    )
  }
}
