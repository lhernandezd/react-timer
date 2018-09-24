import React from 'react';
import { Grid, Icon, Container } from 'semantic-ui-react';
import TimerForm from './TimerForm';
import TimerCard from './TimerCard';

class Timers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timers: [
        {
          title: 'Box Class', 
          project: 'Gym', 
          id: 0,
          edit: false,
          formTitle: '',
          formProject: '',
          active: false,
          counter: 1
        }, 
        {
          title: 'React Exercises', 
          project: 'React and Redux', 
          id: 1, 
          edit: false,
          formTitle: '',
          formProject: '',
          active: false,
          counter: 1
        }
      ],
      timing: []
    }
  }

  render() {
    return (
      <Container>
        <Grid container centered columns={3} >
        {this.state.timers.map(timer =>
          timer.edit ? 
            <TimerForm />  :
            <TimerCard 
            key={timer.id}
            title={timer.title}
            project={timer.project}
            active={timer.active}/>
        )}
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