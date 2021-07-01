import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App, StateProvider } from './Components';
import './index.css';

const initialState = {
  currentPage: '',
  isMenuShown: false,
  isResumeShown: false,
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'CHANGE_CURRENT_PAGE': {
    return {
      ...state,
      currentPage: action.page,
      isMenuShown: false
    };
  }
  case 'TOGGLE_MENU': {
    return {
      ...state,
      isMenuShown: action.isMenuShown
    };
  }
  case 'TOGGLE_RESUME': {
    return {
      ...state,
      isResumeShown: action.isResumeShown,
    };
  }
  default:
    return state;
  }
};

const router = (
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
