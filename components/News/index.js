import React, { Component } from 'react';
import styled from 'styled-components/native';
import { images } from '../../assets/images';
import { FlatList, Text, ScrollView, View, Image } from 'react-native';
import Loading from '../Loading';

class News extends Component {

  state = {
    news: []
  };

	componentDidMount() {
    fetch('https://vast-beach-43552.herokuapp.com/headlines').then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        news: res
      });
    }).catch(err => {
			console.log(err);
		});
  }

  render() {

		if(this.state.news.length == 0) {
		 	return <Loading />;
		}

    return (
			<ContainerView>
				<FlatList
					data={
						this.state.news
					}
					renderItem={({item}) => {
						return (
							<BoxView>
								<NewsImage source={{uri: item.image}} />
								<TextContainer>
									<NewsHeadline>{item.headline}</NewsHeadline>
									<NewsText>{item.snippet}</NewsText>
								</TextContainer>
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

const TextContainer = styled.View`
	padding-left: 10px;
	flex: 1;
`;

const BoxView = styled.View`
	shadow-opacity: 0.75;
	shadow-radius: 1px;
	shadow-color: rgba(0, 0, 0, 0.8);
	shadow-offset: 0px 0px;
	margin-left: 10;
	margin-right: 10;
	margin-top: 10;
	padding: 10px;
	flex-direction: row;
	align-items: center;
`;

const NewsHeadline = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 17px;
	font-family: 'PT Sans';
	padding-bottom: 5px;
`;

const NewsText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 14px;
	font-family: 'PT Sans';
`;

const NewsImage = styled.Image`
  width: 75px;
	height: 75px;
	border-radius: 2px;
`;

export default News;
