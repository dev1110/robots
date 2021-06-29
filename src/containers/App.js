import React,{ Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfeild : ''
    }
  }
  onSearchChange = (event)=>{
    this.setState({searchfeild:event.target.value});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}));
  }

  render (){
    const {robots, searchfeild} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfeild.toLowerCase())
    });

    return !robots.length ?
      <h1 className = "green tc">Loading...</h1>
      :
      (
        <div className="App App-Header">
          <h1 className= "green">RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots = {filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}
export default App;
