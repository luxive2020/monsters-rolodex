import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super()// calls constructors methods on the Component class.
    this.state = {
      monsters : [ ],
      searchField : ''
    }
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  handleChange = e => {this.setState({searchField: e.target.value}),
console.log(this)}
  render(){
    const {monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters'
      handleChange = { this.handleChange }
       />
        <CardList monsters={filterMonsters}>
        </CardList>
       
      </div>
    );
  }
}

export default App;
