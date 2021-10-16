import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Placeorder from './components/Placeorder/Placeorder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        < BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <HomePage></HomePage>
            </Route>
            <Route exact path='/home'>
              <HomePage></HomePage>
            </Route>
            <PrivateRoute exact path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute exact path='/placeorder'>
              <Placeorder></Placeorder>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
