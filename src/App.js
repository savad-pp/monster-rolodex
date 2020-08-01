import React,{Component} from 'react';
import {CardList} from './component/card-list/card-list.component'
import './App.css';
import {Searchbox} from './component/search-box/search-box.component'


class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }

  }
 
 componentDidMount(){
   fetch('http://jsonplaceholder.typicode.com/users').then(resp=>resp.json())
   .then(user=>{
    console.log(user)
    this.setState({ monsters:user })
   }
    )
 }

  render(){
    const {monsters,searchField} = this.state;
    const filterMonster=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>MONSTER ROLODEX</h1>
       <Searchbox 
       placeholder="search monster"
       handleChange={e =>this.setState({searchField:e.target.value})}/>
        <CardList monsters={filterMonster}/>    
      </div>
    );
  }
  

}





export default App;
