import React from 'react';
import { Button, Card, Icon, Grid } from 'semantic-ui-react';

const TimerCard = (props) => {
  return (
    <Grid.Row>
        <Card>
        <Card.Content>
          <Card.Header textAlign='left'>Title</Card.Header>
          <Card.Meta textAlign='left'>Project</Card.Meta>
          <Card.Description style={{fontSize: '25px'}}> <strong>00:00:00</strong> </Card.Description>
          <Card.Description textAlign='right'>
            <Icon link name='trash alternate'/>
            <Icon link name='edit'/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic fluid color='green'>Start</Button>
        </Card.Content>
      </Card>
    </Grid.Row>
  )
}

export default TimerCard;