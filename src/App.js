import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header  from './components/header/header.component';
import Authenticate from './pages/authentication/authenticate.component';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Authenticate} />
        </Switch>
      </div>
    );
  }
}

export default App;
