import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInOut } from '../store/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((store) => store.boocks);
  const { auth, isLogin } = useSelector((stor) => stor.auth);
  return (
    <Fragment>
      {error && (
        <div className="alert alert-danger mb-0 c-main" role="alert">
          {error}
        </div>
      )}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>
        <span className="navbar-brand mb-0 h1">{auth}</span>
        <button
          onClick={() => dispatch(logInOut())}
          className="btn btn-outline-primary"
          type="submit">
          {isLogin ? 'Log out' : 'Log in'}
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;
