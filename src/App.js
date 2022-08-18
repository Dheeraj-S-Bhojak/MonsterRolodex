
import { Component } from 'react';
import SearchBar from './Components/Search-bar/SearchBar.component.jsx';
import './App.css';

import CardList from './Components/Card-list/CardList.component.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchData: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
            return { monsters: users };
          });
      });
  }

  SearchMethod = (event) => {
            const searchValue = event.target.value.toLowerCase();

            this.setState(() => {
              return { searchData: searchValue }
            });
  };
  

  render() {
    const filterMonsters = this.state.monsters.filter((monster) => {   
      return monster.name.toLowerCase().includes(this.state.searchData);
    }); 
    
    return (
        <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBar function = {this.SearchMethod} />
          <CardList filterMonsterData = {filterMonsters} />
        </div>
      );
    }; 
}
  
export default App;

