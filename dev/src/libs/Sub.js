import React from 'react';

import Container from './Container.js';
import Pool from './Pool.js';
import Panel from './Panel.js';

const style = {
    root: {
        width: '100vw',
        height: '100vh',
        background:'#333333',
        padding:22,
    },
};

function Sub () {
    const nodes = [];
    const w = 200 * 4 + (10 * 2) * 4;

    return (
        <div className="monitor" style={style.root}>
          <Container>
            <Pool w={w}>
              <Panel/>
              <Panel/>
            </Pool>
          </Container>
        </div>
    );
}

export default Sub;
