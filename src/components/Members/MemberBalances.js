import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

const colors = [
    'blue'
    // 'red',
    // 'orange',
    // 'yellow',
    // 'olive',
    // 'green',
    // 'teal',
    // 'violet',
    // 'purple',
    // 'pink',
    // 'brown',
    // 'grey',
    // 'black',
]

const MemberBalances = () => (
    <div>
        {colors.map(color => (
            <Table color={color} key={color} className="balance-table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Group Member</Table.HeaderCell>
                        <Table.HeaderCell>Is Owed</Table.HeaderCell>
                        <Table.HeaderCell>..member_name.. owes</Table.HeaderCell>
                        <Table.HeaderCell>..member_name.. owes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>A</Table.Cell>
                        <Table.Cell>500</Table.Cell>
                        <Table.Cell>
                            <div className="invoice-button-container">
                                <div className="balance-amount">300</div>
                                <div>
                                    <Button animated>
                                        <Button.Content visible>Send Invoice</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow right' />
                                        </Button.Content>
                                    </Button>
                                </div>
                            </div>
                        </Table.Cell>
                        <Table.Cell>
                            <div className="invoice-button-container">
                                <div className="balance-amount">200</div>
                                <div>
                                    <Button animated>
                                        <Button.Content visible>Send Invoice</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow right' />
                                        </Button.Content>
                                    </Button>
                                </div>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>B</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>C</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        ))}
        <Button animated>
            <Button.Content visible>Go back to make changes</Button.Content>
            <Button.Content hidden>
                <Icon name='arrow left' />
            </Button.Content>
        </Button>
    </div>
)
export default MemberBalances
