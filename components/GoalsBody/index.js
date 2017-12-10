import React, { Component } from 'react';
import PlayerList from '../PlayerList';

class GoalsBody extends Component {

	state = {
		players: []
	}

  componentDidMount() {
    fetch('https://vast-beach-43552.herokuapp.com/topscorers').then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        players: res
      });
    }).catch(err => {
			console.log(err);
		});
  }

  render() {
    return (
			<PlayerList navigation={this.props.navigation} players={ this.state.players }/>
    );
  }
}

export default GoalsBody;
