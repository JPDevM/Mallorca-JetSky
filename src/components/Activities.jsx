// Dependences
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// JSX
const Activities = ({ data }) => {
  // Props
  const { img, title } = data;
  return (
    <Fragment>
      <div className="w-full h-full grow boxMenu bg-center bg-local">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <Link to="/page1">
            <div className="w-full h-full bg-center bg-local">
              <div className="w-full h-full flex justify-left items-end">
                <p className="text-2xl text-white">{title}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Activities;
