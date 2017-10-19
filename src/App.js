import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {Link} from "react-router-dom";

export const API = 'https://swapi.co/api';

export class App extends Component {
  state = {
    people: []
  };
  componentDidMount(){
    axios.get(API + '/people')
      .then(({data}) => {
        this.setState({
          people: data.results
        })
      })
  }
  render() {
    return (
      <div className="App">
        {
          this.state.people.map(
            (char, index) => (
              <p key={char.name}>
                <Link
                  to={`/${index}`}>
                  {char.name}
                </Link>
              </p>
            )
          )
        }
      </div>
    );
  }
}