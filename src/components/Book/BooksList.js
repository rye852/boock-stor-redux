import React from 'react';
import { deleteBoock } from '../../store/boockSlice';
import { useDispatch } from 'react-redux';
import { getBoockInfo } from '../../store/boockSlice';

const BooksList = ({ isLoading, isLogin, boocks }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? (
        <p>isLoading...</p>
      ) : boocks.length > 0 ? (
        <ul className="list-group">
          {boocks.map((boock) => (
            <li
              key={boock.id}
              className="alertColor list-group-item d-flex  justify-content-between align-items-center">
              <div className="title">{boock.title}</div>
              <div className="btn-group" role="group">
                <button
                  disabled={!isLogin}
                  type="button"
                  className="btn btn-primary"
                  onClick={() => dispatch(getBoockInfo(boock.id))}>
                  Read
                </button>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(deleteBoock(boock))
                      .unwrap()
                      .then((data) => {
                        console.log(data);
                      })
                      .catch((e) => console.log(e))
                  }
                  disabled={!isLogin}
                  className="btn btn-danger">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="warnning title">No Boocks To Show</p>
      )}
    </div>
  );
};

export default BooksList;
