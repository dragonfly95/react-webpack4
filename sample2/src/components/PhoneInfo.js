import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '000-1111-2222',
      id: 0
    }
  }

  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '9px'
    }

    const {
      name, phone, id
    } = this.props.info ;

    return (
     <div>
       <div><b>{name}</b></div>
       <div>{phone}</div>
     </div>
    )
  }


}

export default PhoneInfo;










