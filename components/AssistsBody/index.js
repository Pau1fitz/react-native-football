import React, { Component } from 'react';
import styled from 'styled-components/native';
import { images } from './images';
import { AppLoading, Font } from 'expo';
import { FlatList, Text, ScrollView, View, Image } from 'react-native';
import PlayerList from '../PlayerList';

class AssistsBody extends Component {

	state = {
		players: []
	}

  componentDidMount() {
    fetch('https://bcbtuizkbj.localtunnel.me/topassists').then(res => {
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
			<PlayerList players={ this.state.players }/>
    );
  }
}

export default AssistsBody;
