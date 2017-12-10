import React, { Component } from 'react';
import styled from 'styled-components/native';
import { images } from './images';
import { AppLoading, Font } from 'expo';
import moment from 'moment';
import { FlatList, Text, ScrollView, View, Image } from 'react-native';

class Fixtures extends Component {

  state = {
    fixtures: [],
		loaded: false
  };

	componentWillMount() {
		this._loadAssetsAsync();
	}

	_loadAssetsAsync = async () => {
		await Font.loadAsync({
			pt: require('../../assets/fonts/pt.ttf'),
		});
		this.setState({ loaded: true });
	};

  componentDidMount() {
    fetch('https://opjiuqzobv.localtunnel.me/team/arsenal').then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        fixtures: res
      });
    }).catch(err => {
			console.log(err);
		});
  }

  render() {

		if(!this.state.loaded) {
			 return <AppLoading />;
		}

    return (
			<ContainerView>
			<FlatList
				data={
					this.state.fixtures
				}
				renderItem={({item}) => {

					let team = item.opponent;
					let logoExists = images[team] && images[team]["uri"] ? images[team]["uri"] : null;
					let arsenalLogo = images['Arsenal']["uri"];
					let firstLogo = item.home_or_away === 'home' ? arsenalLogo : logoExists;
					let secondLogo = item.home_or_away === 'away' ? arsenalLogo : logoExists;

					return (
						<BoxView key={item.name}>
							<DateText>{moment(item.start).format('DD MMMM YYYY')}</DateText>
							<MiddleRow>
								<TeamLogo source={firstLogo} />
								<ScoreText>{item.score}</ScoreText>
								<TeamLogo source={secondLogo} />
							</MiddleRow>
							<BottomRow>
								<TeamText>{item.home_or_away === 'home' ? 'Arsenal' :item.opponent}</TeamText>
								<TeamText>{item.home_or_away === 'away' ? 'Arsenal' :item.opponent}</TeamText>
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
	padding-bottom: 120px;
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

const InfoText = styled.Text`
  color: rgb(62, 69, 74);
	font-size: 16px;
	font-family: 'pt';
`;

const DateText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	font-family: 'pt';
	text-align: center;
	padding-bottom: 15px;
`;

const ScoreText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 28px;
	font-family: 'pt';
`;

const TeamText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	font-family: 'pt';
	padding-top: 10px;
`;

const TeamLogo = styled.Image`
  width: 50px;
	height: 50px;
`;

export default Fixtures;
