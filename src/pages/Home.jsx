// Dependences
import React, { Fragment } from 'react';

// components
import Activities from '../components/Activities';

// Images
import JetSkiImg from '../images/jetski.png';
import BuggyImg from '../images/buggy.png';
import YatchImg from '../images/yatch.png';

// JSX
const Home = () => {
  return (
    <Fragment>
      <div className="bg-black p-6 h-screen">
        <div className="w-full">
          <p className="text-gray-500 text-sm font-bold">
            Palma de Mallorca, xx/xx/xx
          </p>
          <p className="text-white text-3xl font-bold pt-2">Título</p>
        </div>
        <div className="w-full h-full grid grid-cols-1 gap-6 py-4">
          <Activities data={{ img: JetSkiImg, title: 'JetSki' }} />
          <Activities data={{ img: BuggyImg, title: 'Buggies' }} />
          <Activities data={{ img: YatchImg, title: 'JetSki' }} />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
