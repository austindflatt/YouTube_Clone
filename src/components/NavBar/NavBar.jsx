import React from 'react';
import { Menu, Segment } from 'semantic-ui-react'

function NavBar () {
    return (
        <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='home'
          />
          <Menu.Item
            name='messages'
          />
          <Menu.Item
            name='friends'
          />
        </Menu>
      </Segment>
    )
}

export default NavBar;
