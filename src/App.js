import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Routes>
      <Route path="/" element={<Users />}/>
      <Route path="/places/new" element={<NewPlace />}/>
          

      </Routes>
      </main>
    </Router>
  );
};

export default App;
//<Switch>
        {/* <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          
        </Route>
        <Redirect to="/" />
      </Switch> */}