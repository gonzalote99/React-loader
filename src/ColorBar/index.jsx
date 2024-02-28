
import React from 'react';
import './style.css';

const ColorBar = props => {
  const colors = [
      '#FFFFFF',
      '#ef3535',
      '#5c2ceb',
      '#69f759',
      '#ef8905',
      '#03a9f4',
      '#795548',
      '#e91e63',
      '#009688'

  ];

  return (
      <div className={"row"}>
          {
          colors.map((color, index) => {
              return (
              <div className={"parent-color"} key={index}>
                  <div 
                  className={"color"}
                  style={{
                      "--bg": color
                  }}
                  onClick={() => props.setColor(color)}
                  ></div>
              </div>
              )
          })
          }
     </div>
   )
}
export default ColorBar;