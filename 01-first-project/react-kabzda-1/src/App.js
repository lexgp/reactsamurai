import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'

import {Route, BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/music" component={Music}></Route>
          <Route path="/settings" component={Settings}></Route>
          {/* <Dialogs /> */}
          {/* <Profile /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
