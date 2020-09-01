import React, {useEffect, useState} from 'react';
import * as actions from './actions';

import './styles/styles.css';

import Discover from './components/Discover';
import Category from './components/Category';
import Sidebar from './components/Sidebar';

// Shonen = shounen

const App = () => {
  return (
    <div className="root">
      <Sidebar />
      <Discover />
    </div>
  );
}

export default App;
