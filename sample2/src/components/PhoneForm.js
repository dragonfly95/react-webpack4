/*jshint esversion: 6 */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class PhoneForm extends React.Component {

  state = { name: '' , phone: ''}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: ''
    })
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder={this.state.name}
          onChange={this.handleChange}
         name="name"/>
        <input type="text" placeholder="전화번호" onChange={this.handleChange} name="phone"/>
        <Button type="submit"  variant="contained" color="primary">등록</Button>
      </form>
    )
  }
}

export default PhoneForm;