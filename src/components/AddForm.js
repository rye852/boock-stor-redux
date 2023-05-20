import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBoock } from '../store/boockSlice';
import { useSelector } from 'react-redux';
const Addform = () => {
  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  const { boocks } = useSelector((stor) => stor.boocks);
  const { isLogin } = useSelector((stor) => stor.auth);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: boocks.length ? boocks[boocks.length - 1].id + 1 : 1,
      title: title.current.value,
      description: description.current.value,
      price: Number(price.current.value),
    };
    dispatch(addBoock(data));

    title.current.value = '';
    description.current.value = '';
    price.current.value = '';
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              ref={title}
              type="text"
              className="alertColor form-control"
              id="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              ref={price}
              type="number"
              className="form-control"
              id="price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              ref={description}
              className="form-control"
              id="Description"
              rows="3"
              required></textarea>
          </div>
          <button disabled={!isLogin} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
