import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { cats, dogs, petTypes } from './breeds.js';

export default function App() {
	return (
		<ScrollView>
			{cats.map((item, index) => {
				return <Item title={`${index} ${item.breed}`} />;
			})}
		</ScrollView>
	);
}

// Text and View Component to Display Breeds
function Item({ title }) {
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	scrollView: {
		// marginTop: statusBarHeight,
		marginTop: 10,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	item: {
		// width: Dimensions.get('window').width,
		padding: 5,
		paddingLeft: 20,
		backgroundColor: 'yellow',
		borderBottomColor: 'black',
		borderBottomWidth: 1
	},
	title: {
		fontSize: 24,
		fontStyle: 'italic',
		textDecorationLine: 'underline',
		fontWeight: 'bold'
	},
	fields: {
		marginLeft: 20,
		fontWeight: '300',
		fontSize: 18
	}
});
