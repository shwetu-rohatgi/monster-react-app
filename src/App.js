import React, {Component} from 'react';
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search/search.component';
import './App.css';

class App extends Component{
  constructor(){
    super();   //Get the state from the Component Class that is extent.
    this.state = {
      monsters : [],
      searchField: '' 
      /*{
          name: 'Frankistein',
          key: 'a1'
        },
        {
          name: 'Vampire',
          key: 'a2'
        },
        {
          name: 'Zombie',
          key: 'a3'
        }*/
  }
}

//Life cycle Method from Component class
//We get response from fetch() and convert it to response.json() which returns a promise and we need to catch it using .then() in which you can change the state using setState().
  
  componentDidMount(){
    fetch('https://cors.x7.workers.dev/http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  //A class methos with => automatically sets the context to where it is defined for this keyword.
  handleChange = (e) => { this.setState({searchField: e.target.value}) };

  render(){
    const { monsters, searchField } = this.state; 
    const filteredMonsterList = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <header className="App-header">
          <h1>Monster Rolodex</h1>
          <SearchBox 
          placeholder="Search Monster"
          handleChange = { this.handleChange }
          />  
          <CardList monsters={filteredMonsterList}/>  
        </header>
      </div>
    );
  };
}

export default App;
