import React, { Fragment } from 'react';

const BookInfo = ({ boockInfo }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {boockInfo && boockInfo.length > 0 ? (
        <div>
          <p className="fw-bold">Title: {boockInfo[0].title} </p>
          <p className="fw-light">Description: {boockInfo[0].description} </p>
          <p className="fst-italic">Price: {boockInfo[0].price} </p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no boock selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
