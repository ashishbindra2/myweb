import React, { Component } from "react"
import CardList from '../CardList'
import { robots } from '../robots'
import SearchBox from "../SearchBox";
// import './index.css'


// function App() {
//     return (
//         <div className="tc">
//             <h2>Robot Friends</h2>
//             <SearchBox/>
//             <CardList robots={robots} />
//         </div>
//     );
// }

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    onSearchChange=(event)=> {
        this.setState({searchField:event.target.value})
      

    }

    render() {
        const filterdRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log(filterdRobots)
        return (
            <div className="tc">
                <h2 className="f1">Robot Friends</h2>
                <SearchBox SearchChange={this.onSearchChange} />
                <CardList robots={filterdRobots} />
            </div>
        )
    }
}
export default App;