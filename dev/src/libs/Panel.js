import React from 'react';
import * as Bulma from 'react-bulma-components';

export default function Panel () {
    return (
        <Bulma.Panel className="grid-item" style={{background:'#fff'}}>
          <Bulma.Panel.Header>
            Panel
          </Bulma.Panel.Header>

          <Bulma.Panel.Block>
            <p>XXX</p>
          </Bulma.Panel.Block>
        </Bulma.Panel>
    );
}
