import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Users />}/>
      <Route path="/places/new" element={<NewPlace />}/>
          

      </Routes>
      
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