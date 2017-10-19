import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter, Link, Route, Switch, withRouter} from "react-router-dom";

class NestedComponent extends React.Component {
  render(){
    console.log(this.props);
    return null;
  }
}

const RouterNestedComponent = withRouter(NestedComponent);

class Profile extends React.Component {
  render(){
    return (
      <div>
        <h1>Profile nav</h1>
        <RouterNestedComponent />
        <Link to={"/profile/settings"}>Settings</Link>
        <Link to={"/profile/Home"}>Home</Link>
        <Route path="/profile/settings" render={() => <p>Settings</p>}/>
        <Route path="/profile/home" render={() => <p>Home</p>}/>
      </div>
    )
  }
}


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/profile" component={Profile}/>
      <Route path="/:id" render={({location, history, match}) => {
        return(
          <div>
            <p>Hello, {match.params.id}</p>
            <button onClick={history.goBack}>Go back</button>
          </div>)
      }}/>
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));


registerServiceWorker();
