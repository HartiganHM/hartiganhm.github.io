import React from 'react';
import { func, object } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useStateValue } from '../StateProvider/StateProvider';
import './LandingPage.scss';

const pages = ['about', 'projects', 'blogs'];

const LandingPage = ({ history: { push } }) => {
  const [, dispatch] = useStateValue();

  return (
    <div className="LandingPage">
      <span
        className="wordmark"
        style={{
          backgroundImage: 'url(/assets/images/Wordmark.png',
        }}
      />

      <div className="nav-bar">
        {pages.map((page) => (
          <NavLink
            key={page}
            className="nav-link-home"
            to={`/${page}`}
            onClick={() => {
              push(page);
              dispatch({
                type: 'CHANGE_CURRENT_PAGE',
                page,
              });
            }}
          >
            {page}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;

LandingPage.propTypes = {
  onRedirect: func.isRequired,
  history: object.isRequired,
};
