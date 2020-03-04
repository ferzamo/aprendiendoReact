import { Table } from "./Table";
import React from "react";
import "./App.css";
import axios from "axios";
import { Home } from "./Home";
import { Detalles } from "./Detalles"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const data = require("./data.json"); // array

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      showOnlyStock: false,
      response: []
    };
  }

  changeFilter = ev => {
    this.setState({ filterText: ev.target.value });
  };

  toggleShowStock = () => {
    this.setState({
      showOnlyStock: !this.state.showOnlyStock

    });
  };

  async componentDidMount() {

    const response = await axios.get('http://157.88.192.120:3000/curso')
    this.setState({ response: response.data });
  }

  render() {
    const contentFilteredByText = this.state.response.filter(el =>
      el.name.includes(this.state.filterText)
    );
    const contentFilteredByStock = this.state.showOnlyStock
      ? contentFilteredByText.filter(el => el.stocked === true)
      : contentFilteredByText;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home changeFilter={this.changeFilter} toggleShowStock={this.toggleShowStock}></Home>
              <Table content={contentFilteredByStock} />
            </Route>
            <Route path="/:name" render={(props) => <Detalles {...props} />}>

            </Route>
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;
