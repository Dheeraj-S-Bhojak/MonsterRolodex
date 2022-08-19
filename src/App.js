import React, {useState , useEffect} from 'react';

import SearchBar from './Components/Search-bar/SearchBar.component.jsx';
import CardList from './Components/Card-list/CardList.component.jsx';

import './App.css';

const App = () => {
  
  const [monsters,  setMonsters] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => {
        setMonsters(monsters);
      })
  }, []);
  
  const SearchMethod = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchData(searchValue);
  };
  const filterMonsters = monsters.filter((monster) => {   
    return monster.name.toLowerCase().includes(searchData);
  }); 
    
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBar function = {SearchMethod} />
      <CardList filterMonsterData = {filterMonsters} />
    </div>
  );
     
}
  
export default App;

