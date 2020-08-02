import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

const product = {
 'Title': 'Apple Macbook Pro 16\'',
 'Cover': 'https://www.ixbt.com/img/x780x600/r30/00/02/25/30/Apple16inchMacBookPro111319large.jpg',
 'Price': '2000',
 'Description': 'Новый тонкий и лёгкий MacBook Air оснащён великолепным дисплеем Retina с технологией True Tone.',
 'Discount': true
}


ReactDOM.render(
  <App product={product} />,
  document.getElementById('root')
);
