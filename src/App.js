import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css' ;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            robots: robots,
            searchField: '',
        }
      }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filterRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className='f1'>ANDREI ROBOTITO</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobots}/>
            </div>
        )
    }
  }

export default App;