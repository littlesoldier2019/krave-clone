import React from 'react';
import ProductSlider1 from './ProductSlider/ProductSlider1'; 
import SlideData from './ProductSlider/data/SlideData';
function App() {
  return (
    <div className="App">
      <ProductSlider1 slides={SlideData}/>
    </div>
  );
}

export default App;