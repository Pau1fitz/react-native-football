import React, { Component } from 'react';
import styled from 'styled-components/native';
import { images } from '../../assets/images';
import {
	FlatList,
	Text,
	ScrollView,
	View,
	Image
} from 'react-native';

import Loading from '../Loading';

class TableBody extends Component {

  state = {
    table: [],
  };

  componentDidMount() {
    fetch('https://vast-beach-43552.herokuapp.com/table').then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        table: res
      });
    }).catch(err => {
			console.log(err);
		});
  }

  getTeamDetail = (team) => {
    fetch(`https://192.168.0.14/:3000/team/${team.trim().toLowerCase()}`).then(res => {
      return res.json();
    }).then(res => {
      console.log(res);
    }).catch(err => {
			console.log(err);
		});
  }

  render() {

		if(this.state.table.length == 0) {
			 return <Loading />;
		}

    return (
			<ContainerView>
        <FlatList
          data={
						this.state.table
					}
          renderItem={({item}) => {

						let team = item.abbr;
						let logo = images[team]["uri"];
						return (
							<StyledView>
								<TeamLogo source={logo} />
								<TeamText>{item.name}</TeamText>
								<InfoText>{item.gamesPlayed}</InfoText>
								<InfoText>{item.won}</InfoText>
								<InfoText>{item.draw}</InfoText>
								<InfoText>{item.lost}</InfoText>
								<InfoText>{item.goalDiff}</InfoText>
								<InfoText>{item.points}</InfoText>
							</StyledView>
						)
						}
					}
					keyExtractor={(item, index) => index}
        />
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`

`;

const StyledView = styled.View`
	display: flex;
	flex-direction: row;
	border-bottom-color: rgb(241, 241, 241);
	border-bottom-width: 1px;
	border-style: solid;
	padding: 8px;
`;

const InfoText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	flex: 1;
	font-family: 'PT Sans';
`;

const TeamText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	flex: 5;
	font-family: 'PT Sans';
`;

const TeamLogo = styled.Image`
  width: 20px;
	height: 20px;
	margin-right: 10px;
`;

export default TableBody;
