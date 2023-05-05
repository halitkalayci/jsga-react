import React from 'react';
import './Flexbox.css';

function Flexbox() {
 return (
  <div className="flex">
   <div className="bg-red">
    1 <br /> 2
   </div>
   <div className="bg-red">2</div>
   <div>3</div>
   <div>4</div>
   <div>5</div>
   <div className="width">6</div>
  </div>
 );
}

export default Flexbox;
