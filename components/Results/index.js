import React, { Component } from 'react';
import { images } from '../../assets/images';
import FixtureList from '../FixtureList';

class Results extends Component {

  state = {
    fixtures: [],
  };

  componentDidMount() {

		let team = this.props.navigation.state.params.team;

    fetch(`https://vast-beach-43552.herokuapp.com/prevGames/${team}`).then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        fixtures: res,
				team
      });
    }).catch(err => {
			console.log(err);
		});
  }

  render() {

		let teamIcon = this.props.navigation.state.params.team;
		let teamName = this.props.navigation.state.params.teamName;
		let logo = images[teamIcon]["uri"];

    return (
			<FixtureList fixtures={this.state.fixtures} logo={logo} teamIcon={teamIcon} teamName={teamName} />
    );
  }
}

export default Results;
