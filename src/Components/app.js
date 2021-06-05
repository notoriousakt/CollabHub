import React, { Component } from "react";
import CardList from "./CardList";
import { people } from "../Assets/people";
import SearchBar from "./Searchbar";
import "./app.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchfield: "",
    };
  }

  onSearchChanged = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentWillMount() {
    this.setState({ people: people });
  }

  render() {
    const filteredPeople = this.state.people.filter((people) => {
      return people.name
        .toUpperCase()
        .includes(this.state.searchfield.toUpperCase());
    });
    return (
      <div className="tc">
        <h1 className="tc heading">HubCollaborator</h1>
        <SearchBar searchChange={this.onSearchChanged} />
        <CardList people={filteredPeople} />
      </div>
    );
  }
}

export default App;
