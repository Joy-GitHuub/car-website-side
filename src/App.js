import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import Dashboard from './Page/Dashboard/Dashboard/Dashboard';
import About from './Page/About/About/About';
import Login from './Page/Login/Login/Login';
import Register from './Page/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Page/Login/PrivateRoute/PrivateRoute';
import ExploreServices from './Page/ExploreServices/ExploreServices/ExploreServices';
import AllServiceDetails from './Page/ExploreServices/AllServiceDetails/AllServiceDetails';
import NotFound from './Page/NotFound/NotFound/NotFound'


function App() {


  return (

    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/exploreService'>
              <ExploreServices></ExploreServices>
            </Route>
            <PrivateRoute path='/bookingDetails/:id'>
              <AllServiceDetails></AllServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/topBookingDetails/:id'>
              <AllServiceDetails></AllServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/about'>
              <About></About>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            {/* <PrivateRoute path='/addproduct'>
              <Addproduct></Addproduct>
            </PrivateRoute> */}
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
