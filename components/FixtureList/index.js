import React, { Component } from 'react';
import styled from 'styled-components/native';
import { images } from '../../assets/images';
import moment from 'moment';
import { FlatList, Text, ScrollView, View, Image } from 'react-native';

import Loading from '../Loading';

class FixtureList extends Component {

  state = {
    fixtures: []
  };

	componentDidMount() {

		let team = this.props.navigation.state.params.team;
		
		fetch(`https://vast-beach-43552.herokuapp.com/nextGames/${team}`).then(res => {
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

	// componentWillReceiveProps(nextProps) {
	// 	if(this.props != nextProps) {
	// 		this.setState({
	// 			fixtures: nextProps.fixtures
	// 		});
	// 	}
	// }


  render() {

		if(this.state.fixtures.length == 0) {
			 return <Loading />;
		}


    return (
			<ContainerView>
				<TopRow>
					<HeaderTeamText>{this.props.teamName}</HeaderTeamText>
					<TeamLogo source={this.props.logo} />
				</TopRow>
				<FlatList
					data={
						this.state.fixtures
					}
					renderItem={({item}) => {

						let team = item.abbr;
						let oppositionLogo = images[team]["uri"] ? images[team]["uri"] : null;

						return (
							<BoxView key={item.name}>
								<DateText>{moment(item.start).format('DD MMMM YYYY')}</DateText>
								<MiddleRow>
									<TeamLogo source={oppositionLogo} />
									<ScoreText>{item.score}</ScoreText>
								</MiddleRow>
								<BottomRow>
									<TeamText>{item.opponent}</TeamText>
									<InfoText>{item.winLossDraw}</InfoText>
								</BottomRow>
							</BoxView>
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

const BoxView = styled.View`
	shadow-opacity: 0.75;
	shadow-radius: 1px;
	shadow-color: rgba(0, 0, 0, 0.8);
	shadow-offset: 0px 0px;
	margin-left: 10;
	margin-right: 10;
	margin-top: 10;
	padding: 20px;
`;

const TopRow = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: 10;
	margin-right: 10;
	margin-top: 10;
	margin-bottom: 10;
`

const MiddleRow = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const BottomRow = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const DateText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	font-family: 'PT Sans';
	padding-bottom: 15px;
`;

const ScoreText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 28px;
	font-family: 'PT Sans';
`;

const HeaderTeamText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 24px;
	font-family: 'PT Sans';
	padding-top: 10px;
`;

const TeamText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	font-family: 'PT Sans';
	padding-top: 10px;
`;

const InfoText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 15px;
	font-family: 'PT Sans';
	padding-top: 10px;
`;

const TeamLogo = styled.Image`
  width: 50px;
	height: 50px;
`;

export default FixtureList;
