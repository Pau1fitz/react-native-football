import React, { Component } from 'react';
import styled from 'styled-components/native';
import { View, ActivityIndicator } from 'react-native';

const Loading = () => {
	return(
		<LoadingView>
			<ActivityIndicator size="large" color="rgb(60, 0, 60)" />
		</LoadingView>
	);
}

const LoadingView = styled.View`
	justify-content: center;
	align-items: center;
	flex: 1;
`;


export default Loading;
