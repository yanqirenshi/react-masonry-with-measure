import React from 'react';
import Masonry from 'react-masonry-component';

import CardNode from './CardNode.js';

function card (data, options) {
    return (
        <CardNode key={data.code}
                  data={data}
                  options={options} />
    );
}

export default function Pool (props) {
    const item_class = 'grid-item';
    const options = {
        columnWidth: 100,
        itemSelector: `.${item_class}`,
        gutter: 10,
        itemClass: item_class, // original parameter
    };

    return (
        <div style={{ width: props.w || 'auto' }}>
          <Masonry options={options}>
            {props.children}
          </Masonry>
        </div>
    );
}
