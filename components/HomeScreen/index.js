import React, { Component } from 'react';
import styled from 'styled-components/native';
import { images } from '../../assets/images';

import {
	FlatList,
	Text,
	ScrollView,
	View,
	Image,
	TouchableHighlight,
	Button
} from 'react-native';

import Loading from '../Loading';

class HomeScreen extends Component {

  state = {
		teams: []
  };

	componentDidMount() {
		fetch('https://vast-beach-43552.herokuapp.com/teams').then(res => {
			return res.json();
		}).then(res => {
			this.setState({
				teams: res
			});
		}).catch(err => {
			console.log(err);
		});
	}

  render() {
		if(this.state.teams.length == 0) {
			 return <Loading />;
		}

    return (
			<View>

				<MainLogoContainer>
					<MainLogo source={require('../../assets/images/main-logo.png')} />
				</MainLogoContainer>

				<NavView>

					<TouchableHighlight
						onPress={() => this.props.navigation.navigate('Table')}>
						<MenuText>TABLE</MenuText>
					</TouchableHighlight>

					<TouchableHighlight
						onPress={() => this.props.navigation.navigate('Goals')}>
						<MenuText>GOALS</MenuText>
					</TouchableHighlight>

					<TouchableHighlight onPress={() => this.props.navigation.navigate('Assists')}>
						<MenuText>ASSISTS</MenuText>
					</TouchableHighlight>

					<TouchableHighlight onPress={() => this.props.navigation.navigate('Assists')}>
						<MenuText>NEWS</MenuText>
					</TouchableHighlight>

				</NavView>

				<FlatList
					data={
						this.state.teams
					}
					numColumns={2}
					renderItem={({item}) => {

						let team = item.abbr;
						let logo = images[team]["uri"];

						return (
							<BoxView>
								<TouchableHighlight onPress={() => this.props.navigation.navigate('Results', {team: item.abbr, teamName: item.name })}>
									<TeamLogo source={logo} />
								</TouchableHighlight>
								<TeamText>{item.name}</TeamText>
							</BoxView>
						);
						}
					}
					keyExtractor={(item, index) => index}
				/>
      </View>
    );
  }
}

const NavView = styled.View`
	flex-direction: row;
	margin-bottom: 20px;
	margin-left: 20px;
	margin-right: 20px;
	justify-content: space-between;
`;


const MenuText = styled.Text`
	font-family: 'premierleague';
  color: rgb(60, 0, 60);
	font-size: 22px;
`;

const BoxView = styled.View`
	shadow-opacity: 0.75;
	shadow-radius: 1px;
	shadow-color: rgba(0, 0, 0, 0.8);
	shadow-offset: 0px 0px;
	flex: 1;
	margin: 5px;
	padding: 8px;
	justify-content: center;
	align-items: center;
`;

const TeamText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	font-family: 'PT Sans';
	padding-top: 5px;
	text-align: center;
`;

const TeamLogo = styled.Image`
  width: 35px;
	height: 35px;
`;

const MainLogoContainer = styled.View`
	align-items: center;
`;

const MainLogo = styled.Image`
	width: 120px;
	height: 120px
`;

export default HomeScreen;
