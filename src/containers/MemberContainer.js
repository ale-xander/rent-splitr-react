import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import MemberExpenses from '../components/Members/MemberExpenses'

class MemberContainer extends Component {
  state = {
    members: []
  }
  render () {
    return (
      <>
        <div className='member-container'>
          <div className='member'>
            <h1> Member Name Here</h1>
            <MemberExpenses />
            <div className='member-total'>
              <div>
                <h2> Total</h2>
              </div>
              <div>
                <h2>$123.45</h2>
              </div>
            </div>
          </div>
          <div className='member'>
            <h1> Member Name Here</h1>
            <MemberExpenses />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='member-total'>
              <div>
                <h2> Total</h2>
              </div>
              <div>
                <h2>$123.45</h2>
              </div>
            </div>
          </div>
          <div className='member'>
            <h1> Member Name Here</h1>
            <MemberExpenses />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='member-total'>
              <div>
                <h2> Total</h2>
              </div>
              <div>
                <h2>$123.45</h2>
              </div>
            </div>
          </div>
    
        </div>
      
        <div>
          <Button
            content='Settle Up'
            icon='right arrow'
            labelPosition='right'
            className='settle-up'
          />
        </div>
      </>
    )
  }
}
export default MemberContainer
