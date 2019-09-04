import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react';
import CreateMember from '../Members/CreateMember'

const UpdateGroup = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>GROUP NAME GOES HERE</Modal.Header>
    <Modal.Content>
                <Modal.Description>
                    <Header>Add members to your group</Header>
                    <CreateMember />
                </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default UpdateGroup;