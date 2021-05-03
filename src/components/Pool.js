import React, { useState } from 'react';
import Measure from 'react-measure';

import Contents from './Contents.js';
import ensure from '../js/Pool.js';

const style = {
    root: {
        width: '100%',
        background:'#333333',
    },
};

export default function Pool (props) {
    const [bounds, setBounds] = useState(0);

    const resize = rect => setBounds(rect.bounds);

    return (
        <div className="mwm-pool" style={style.root}>
          <Measure bounds onResize={resize}>
            {({ measureRef }) => (
                <div ref={measureRef}>
                  <div style={{width:bounds.width}}>

                    <Contents options={ensure(props.options)}
                              w={bounds.width}>
                      {props.children}
                    </Contents>

                  </div>
                </div>
            )}
          </Measure>
        </div>
    );
}
