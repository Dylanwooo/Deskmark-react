import React, { Component } from 'react';
import uuid from 'uuid';
import ListItem from 'ListItem/ListItem';
import List from 'List/List';
import ItemShowLayer from 'ItemShowLayer/ItemShowLayer';
import './App.css';

class App extends Component {


  render() {
    const items = [
        {
            "id":"aaaa",
            "title":"hello",
            "content":"#testing markdown",
            "time":14520
        },
        {
            "id":"bbbb",
            "title":"hello2",
            "content":"#hello world",
            "time":1452045
        }
    ];
    return (
      <section className="deskmark-component">
        <div className="container">
          <div className="row">

            <List items={items}/>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
