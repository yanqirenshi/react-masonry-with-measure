import React, { useState } from 'react';
import Measure from 'react-measure';

export default function Container (props) {
    const [bounds, setBounds] = useState(0);

    const resize = rect => setBounds(rect.bounds);

    return (
        <Measure bounds onResize={resize}>
          {({ measureRef }) => (
              <div ref={measureRef}>
                <div style={{width:bounds.width}}>
                  {props.children}
                </div>
              </div>
          )}
        </Measure>
    );
}
