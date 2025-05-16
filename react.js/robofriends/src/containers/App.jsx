import React, { Component } from "react"
import CardList from '../components/CardList'
// import { robots } from './robots'
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'
import './App.css'
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        console.log("constructor")
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        console.log("componentDidMount")
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const {robots, searchField} = this.state
        const filterdRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        console.log("render", robots)
        if (robots.length) {
            return (
                <div className="tc">
                    <h2 className="f1">Robot Friends</h2>
                    <SearchBox SearchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterdRobots} />
                    </Scroll>
                </div>
            )
        } else {
            return <h1>Loading...</h1>
        }
    }
}
export default App;