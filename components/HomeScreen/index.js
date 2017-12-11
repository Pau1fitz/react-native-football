import React, { Component } from 'react';
import styled from 'styled-components/native';
import { images } from '../../assets/images';
import { AppLoading, Font } from 'expo';
import { FlatList, Text, ScrollView, View, Image, TouchableHighlight, Button, Dimensions } from 'react-native';

class GoalsBody extends Component {


  state = {
		loaded: false,
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

	componentWillMount() {
		this._loadAssetsAsync();
	}

	_loadAssetsAsync = async () => {
		await Font.loadAsync({
			pt: require('../../assets/fonts/pt.ttf'),
		});
		this.setState({ loaded: true });
	};

  render() {
		if(!this.state.loaded) {
			 return <AppLoading />;
		}

		console.log(this.state)

    return (
			<ContainerView>

			    <Button
			      onPress={() => this.props.navigation.navigate('Table')}
			      title="Go to Table"
			    />

					<Button
						onPress={() => this.props.navigation.navigate('Goals')}
						title="Go to Goals"
					/>

					<Button
						onPress={() => this.props.navigation.navigate('Assists')}
						title="Go to Assists"
					/>

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

      </ContainerView>
    );
  }
}

const ContainerView = styled.ScrollView`

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
	font-family: 'pt';
	padding-top: 5px;
	text-align: center;
`;

const TeamLogo = styled.Image`
  width: 35px;
	height: 35px;
`;

export default GoalsBody;
