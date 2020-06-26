import React from 'react';
import PropTypes from "prop-types";

// import Potato from './Potato';

function Food({ name, picture, rating }) {

  return (
    <div>
      <h1> I Like {name}</h1>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />

    </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'http://www.jongga.co.kr/images/product/20170410130408.01061322.jpg',
    rating: 5,
  }, {
    id: 2,
    name: 'Samgiopsal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/220px-Samgyeopsal-gui.jpg',
    rating: 3,
  }, {
    id: 3,
    name: 'Bibimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/800px-Dolsot-bibimbap.jpg',
    rating: 4,
  }, {
    id: 4,
    name: 'Doncasu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dongaseu_4.jpg/600px-Dongaseu_4.jpg',
    rating: 2,
  }, {
    id: 5,
    name: 'Kimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Korean.food-Kimbap-03.jpg/240px-Korean.food-Kimbap-03.jpg',
    rating: 5,
  },
]

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }


function App() {

  return (
    <div>

      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}

    </div>);
};



Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};


export default App;
