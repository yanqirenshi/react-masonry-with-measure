import React from 'react';
import Masonry from 'react-masonry-component';

export default function Contents (props) {
    const options = props.options;
    const column_width = options.columnWidth;
    const gutter = options.gutter;

    const colnum = Math.floor(props.w / (column_width + gutter));

    const w = (column_width + gutter) * colnum - gutter;

    const style = {
        width: w || 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: gutter,
        paddingLeft: gutter,
        paddingRight: gutter,
    };

    return (
        <div style={style}>
          <Masonry options={options}>
            {props.children}
          </Masonry>
        </div>
    );
}
