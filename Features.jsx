import React from 'react';
import Featuresimage from './images/Frame 19.png'

 function Features() {
  return (
    <div id='features'>
    <div className='feauters-model'>
        <img src={Featuresimage} alt='features-image'/>
    </div>
    <div className='features-text'>
      <h2>Features</h2>
      <h3>This Application<span> Software</span> is Art</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, fugit,
         incidunt, voluptas eligendi perferendis tenetur dignissimos ab quis quaerat 
         quisquam quam eos beatae repellendus. Saepe molestiae tempore tempora optio nemo!</p>
         <button>Veiw More Features</button>
    </div>
    </div>
    
  )
}

export default Features;