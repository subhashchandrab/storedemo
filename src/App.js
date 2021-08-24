import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';//For router implementation
import { 
    HomePage, 
    CounterButtonPage, 
    ProductListPage, 
    NotFoundPage, 
    ProtectedPage,
    ControlledFormPage,
    UncontrolledFormPage,
    UserProfilePage
  } from './pages';
import './App.css';
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';
import { UserDataLoader } from './UserDataLoader';
import { ThemeContext } from './ThemeContext';


function App() {

  const showAlert = () => {
    alert("Hello!");
  };

  return (
    <ThemeContext.Provider value="dark">
      <div className="App">
        <Router>
          {/* Link element is used to redirect to different pages without reloading the whole page. 
          Must be included within Router element 
          <Link to="/counter">Go to Counter page</Link>
          <Link to="/product-list">Go to product list page</Link>*/}
          <NavBar/>
          <div className="App-header">
            <Switch>
              <Route path="/" exact>
                <HomePage/>
              </Route>
              <Route path="/counter/:name">{/* :name is the parameter passed as part of the URL*/}
                <CounterButtonPage/>
              </Route>
              <Route path="/counter">{/* :name is the parameter passed as part of the URL*/}
                <CounterButtonPage/>
              </Route>             
              <Route path="/product-list">
                <ProductListPage/>
              </Route>
              <Route path="/protected">
                <ProtectedPage/>
              </Route>  
              <Route path="/forms">
                <Router>
                  <FormsNavBar/>
                  <Route path="/forms/controlled">
                    <ControlledFormPage/>
                  </Route>
                  <Route path="/forms/uncontrolled">
                    <UncontrolledFormPage/>
                  </Route>
                </Router> 
              </Route>      
              <Route path="/userprofile">
                {/*
                Container pattern for lodaing user profile.
                <UserDataLoader> 
                    <UserProfilePage/>
                </UserDataLoader>
                */}
                <UserProfilePage/>
              </Route>  
              <Route> {/* Route element without Path will be shown when there is no matching path*/}
                <NotFoundPage/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
