import React, { Fragment } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useSelector, useDispatch } from 'react-redux';
import { getBoocks } from '../../store/boockSlice';
import './book.css';
import { useEffect } from 'react';

const PostContainer = () => {
  const dispatch = useDispatch();
  const { boocks, isLoading, error, boockInfo } = useSelector(
    (store) => store.boocks
  );
  const { isLogin } = useSelector((stor) => stor.auth);

  useEffect(() => {
    async function forUseEffect() {
      dispatch(getBoocks());
    }
    forUseEffect();
  }, [dispatch]);
  console.log(boockInfo)
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLogin={isLogin}
            error={error}
            isLoading={isLoading}
            boocks={boocks}
          />
        </div>
        <div className="col side-line">
          <BookInfo boockInfo={boockInfo} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
