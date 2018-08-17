import React from 'react';
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList'

export default class App extends React.Component {

  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }

  handlerCreate = (data) => {
    const {information } = this.state
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

   render() {
      return (
        <div>
          <PhoneForm onCreate={this.handlerCreate} />
          <PhoneInfoList data={this.state.information} />
        </div>
      );
   }
}