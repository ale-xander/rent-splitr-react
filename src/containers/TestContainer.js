import React from 'react'
import { Container } from 'semantic-ui-react';

import CreateGroup from '../components/Group/CreateGroup'

const TestContainer = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
    </p>
    <CreateGroup />
  </Container>
)

export default TestContainer;