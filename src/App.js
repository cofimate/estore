import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-signup.components';
import Header   from './components/header/header.component';
import { auth ,createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = { 
      currentUser: null
    }
  }

  unsubscribefFromAuth = null;

  componentDidMount() {
    this.unsubscribefFromAuth = auth.onAuthStateChanged(async userAuth => {
          if ( userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            console.log("USER REF:", userRef);
            userRef.onSnapshot(snapShot =>  {
              this.setState({
                  currentUser: {
                     id: snapShot.id,
                     ...snapShot.data()
                  } 
              });

              console.log("CHANGES IN STATE",this.state);

            });
        }
        
        
        this.setState({currentUser : userAuth});

        //createUserProfileDocument(user);
        //console.log(user);
    });

  }

  componentWillUnmount() {
    this.unsubscribefFromAuth();
  }

  render() {
    return (
        <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/estore' component={HomePage} />
              <Route  path='/shop' component={ShopPage} />
              <Route  path='/signin' component={SignInAndSignUpPage} />
            </Switch>

        </div>
      );
  }
}

export default App;
