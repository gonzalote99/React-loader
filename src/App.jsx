import React, {useEffect, useState} from 'react';
import './App.css';
import ColorBar from './ColorBar';
import Loader from 'react-js-loader';

const App = props => {
  const [color, setColor] = useState('#FFFFFF');

  return(
    <div className={'App'}>
       <div className={'content'}>
           <div className={'zoom-out'}>
           <ColorBar setColor={color => setColor(color)} />
             <div className={'row'}>
             <div className={'item'}>
              <Loader type='box-rotate-x' bgColor={color} color={color} title={'box-rotate-x'} size={100} />
             </div>
               <div className={'item'}>
                 <Loader type='box-rotate-y' bgColor={color} color={color} title={'box-rotate-y'} size={100} />
                </div>
               <div className={'item'}>
                 <Loader type='box-rotate-z' bgColor={color} color={color} title={'box-rotate-z'} size={100} />
                </div>
               <div className={'item'}>
                 <Loader type='box-up' bgColor={color} color={color} title={'box-up'} size={100} />
                </div>
             </div>
             <div className={'row'}>
              <div className={'item'}>
               <Loader type='bubble-scale' bgColor={color} color={color} title={'bubble-scale'} size={100} />
              </div>
                <div className={'item'}>
                  <Loader type='heart' bgColor={color} color={color} title={'heart'} size={100} />
                 </div>
                <div className={'item'}>
                  <Loader type='bubble-top' bgColor={color} color={color} title={'bubble-top'} size={100} />
                 </div>
                <div className={'item'}>
                  <Loader type='spinner-club' bgColor={color} color={color} title={'spinner-club'} size={100} />
                 </div>
              </div>
           </div>
       </div>
    </div>
  );
}

export default App;