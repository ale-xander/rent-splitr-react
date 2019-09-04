import React from 'react'
import { Icon, Input, Button } from 'semantic-ui-react'

const CreateMember = () => (
  <div className="new-member">
    <Input icon className="name-input" placeholder='Name'>
      <input />
    </Input>
    <br />
    <br />
    <Input iconPosition='left' className="email-input" placeholder='Email'>
      <Icon name='at' />
      <input />
    </Input>
    
    <Icon.Group size='massive'>
      <Icon name='addNewMember' />
      <Icon corner name='add' />
    </Icon.Group>

    <Button content='Update' icon='right arrow' labelPosition='right' />
  </div>
)

export default CreateMember