import React from 'react';
import { Grid, Icon, Container } from 'semantic-ui-react';
import TimerForm from './TimerForm';
import TimerCard from './TimerCard';

class Timers extends React.Component {
  constructor(props) {
    super(props);
    this.newTimer = this.newTimer.bind(this);
    this.editTimer = this.editTimer.bind(this);
    this.deleteTimer = this.deleteTimer.bind(this);
    this.buttonStart = this.buttonStart.bind(this);

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
          counter: 0
        }, 
        {
          title: 'React Exercises', 
          project: 'React and Redux', 
          id: 1, 
          edit: false,
          formTitle: '',
          formProject: '',
          active: false,
          counter: 0
        }
      ],
      timing: []
    }
  }

  newTimer() {
    const numberOfTimers = this.state.timers.length;
    const newId = numberOfTimers !== 0 ? (this.state.timers[numberOfTimers-1].id) + 1 : 0;
    const timer = {
      title: '', 
      project: '', 
      id: newId, 
      edit: true,
      formTitle: '',
      formProject: '',
      active: false,
      counter: 0
    };
    this.setState({
      timers: this.state.timers.concat(timer)
    });
  };

  deleteTimer(id) {
    this.setState({
      timers: this.state.timers.filter(timer =>
        id !== timer.id
      )
    });
  };

  editTimer(id) {
    const timers = this.state.timers.map((timer) => {
      if (timer.id === id) {
        return {
          ...timer,
          edit: true
        }
      } else {
        return timer
      }
    })

    this.setState({
      timers: timers
    });
  };

  buttonStart(id,counter) {
    const timers = this.state.timers.map((timer) => {
      if (timer.id === id) {
        return {
          ...timer,
          active: true
        }
      } else {
        return timer
      }
    })

    this.setState({
      timers: timers,
      timing: this.state.timing.concat({
        id: id,
        interval: setInterval(() => {this.tick(id,counter)},10)
      })
    })
  }

  tick(id) { 
    const timers = this.state.timers.map((timer) => {
      if (timer.id === id) {
        return {
          ...timer,
          counter: timer.counter + 1
        }
      } else {
        return timer
      }
    })

    this.setState({
      timers: timers
    });
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
            active={timer.active}
            counter={timer.counter}
            handleDelete={() => this.deleteTimer(timer.id)}
            handleEdit={() => this.editTimer(timer.id)}
            handleStart={() => this.buttonStart(timer.id,timer.counter)}/>
        )}
        <Grid.Row>
          <Icon
          onClick={this.newTimer}
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