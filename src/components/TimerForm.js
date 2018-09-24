import React from 'react';
import { Button, Card , Form, Grid } from 'semantic-ui-react';

const TimerForm = (props) => {
  return (
    <Grid.Row>
      <Card>
        <Card.Content>
          <Form size='large'>
            <Form.Field>
              <label>Title</label>
              <input name='title'/>
            </Form.Field>
            <Form.Field>
              <label>Project</label>
              <input name='project'/>
            </Form.Field>
            <div className='ui two buttons'>
              <Button type='submit' basic fluid color='blue'>Update</Button>
              <Button basic fluid color='red'>Cancel</Button>
            </div>
          </Form>
        </Card.Content>
      </Card>
    </Grid.Row>
  )
};

export default TimerForm;