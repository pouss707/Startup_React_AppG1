import React from 'react';



// props : { src, alt }

function ImageDisplay (props) {
  return (
    <div style={props.style}>
      <img 
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      <p>{props.alt}</p>
    </div>
  );
};

export default ImageDisplay;
