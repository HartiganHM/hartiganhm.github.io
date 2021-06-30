import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import is from 'is_js';

import { useStateValue } from '../StateProvider/StateProvider';
import './Nav.scss';

const Nav = ({ isResumeShown, history: { push } }) => {
  const [{ currentPage, isMenuShown }, dispatch] = useStateValue();

  const pages = ['home', 'about', 'projects', 'blogs'];

  const navMenuClasses = classNames({
    'nav-menu': true,
    show: isMenuShown,
    hide: !isMenuShown,
  });

  const navBar = pages.map((page, index) =>
    page === 'home' ? (
      <Link
        key={`nav-link-${index}`}
        className="nav-link"
        to="/"
        onClick={() => {
          push('/');
          dispatch({
            type: 'CHANGE_CURRENT_PAGE',
            page,
          });
        }}
      >
        {page}
      </Link>
    ) : (
      <NavLink
        key={`nav-link-${index}`}
        className={`nav-link ${page === currentPage ? 'active' : ''}`}
        onClick={() => {
          push(page);
          dispatch({
            type: 'CHANGE_CURRENT_PAGE',
            page,
          });
        }}
        to={`/${page.toLocaleLowerCase()}`}
        disabled={page === currentPage}
      >
        {page}
      </NavLink>
    )
  );

  return (
    <Fragment>
      <div className="nav-wrapper">
        <span
          className="header-wordmark"
          style={{
            backgroundImage: `url(/assets/images/${
              is.mobile() ? 'Wordmark-Blue' : 'Wordmark-horizontal-blue'
            }.png`,
          }}
        />
        <div className="nav-desktop">
          {<span className="nav-bar">{navBar}</span>}
        </div>
      </div>

      {!isResumeShown && (
        <div
          className={`nav-icon ${isMenuShown ? 'close' : ''}`}
          onClick={() =>
            dispatch({
              type: 'TOGGLE_MENU',
              isMenuShown: !isMenuShown,
            })
          }
        >
          <span className={`burger-line ${isMenuShown ? 'close one' : ''}`} />
          <span className={`burger-line ${isMenuShown ? 'close two' : ''}`} />
          <span className={`burger-line ${isMenuShown ? 'remove' : ''}`} />
        </div>
      )}

      <div className="nav-mobile">
        <div className={navMenuClasses}>
          {<span className="nav-bar">{navBar}</span>}
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;

Nav.propTypes = {
  history: PropTypes.object,
  currentPage: PropTypes.string,
  onRedirect: PropTypes.func,
  isResumeShown: PropTypes.bool,
};
