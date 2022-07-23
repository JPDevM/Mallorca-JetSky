// Dependences
import { Fragment } from 'react';

// Styles
import './App.css';

// Multimedia
import ConstructionImg from './images/pexels-photo-1430671.jpeg';

// JSX
function App() {
  return (
    <Fragment>
      <div className="w-full h-screen flex justify-center gap-8">
        <img
          src={ConstructionImg}
          className="object-cover w-full"
          alt="site in construction"
        />{' '}
      </div>
    </Fragment>
  );
}

export default App;
