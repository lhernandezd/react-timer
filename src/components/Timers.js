import React from 'react';
import { Grid, Icon, Container } from 'semantic-ui-react';
import TimerForm from './TimerForm';
import TimerCard from './TimerCard';

class Timers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Grid container centered columns={3} >
          <TimerCard />
          <TimerForm />
        <Grid.Row>
          <Icon
          link size='big' 
          name="add square"
          />
        </Grid.Row>
      </Grid>
      </Container>
    )
  }
}

export default Timers;