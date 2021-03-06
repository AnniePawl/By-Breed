import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, SafeAreaView, FlatList, Button } from 'react-native';
import { cats, dogs } from './breeds.js';

export default function App() {
	const [ showCats, setshowCats ] = useState(false);
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.safearea}>
				{/* Replaced by flatlist? */}

				<View style={styles.heading_container}>
					<Text style={styles.heading_text}>Find the Cat and/or Dog of Your Dreams</Text>
					<View style={styles.buttonContainer}>
						<Button
							title="Switch"
							color="#841584"
							onPress={() => {
								setshowCats(!showCats);
							}}
						/>
					</View>
				</View>

				<FlatList
					style={styles.flatlist}
					data={showCats ? cats : dogs}
					renderItem={({ item, index }) => {
						return <Item title={`${item.breed} `} data={item} />;
					}}
					// keyExtractor
					keyExtractor={(item) => item.breed}
				/>

				{/* <ScrollView>
					{cats.map((item, index) => {
						return <Item title={`${index} ${item.breed}`} />;
					})}
				</ScrollView> */}
			</SafeAreaView>
		</View>
	);
}

// Text and View Component to Display Breeds
function Item({ title, data }) {
	const characteristics = Object.keys(data);
	const char_components = characteristics.map((str) => {
		return (
			<Text>
				{str}:{data[str]}
			</Text>
		);
	});
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
			{char_components}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'center'
	},
	heading_container: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'
	},
	heading_text: {
		fontSize: 15
	},
	scrollView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	item: {
		backgroundColor: 'steelblue',
		width: '100%',
		padding: 15,
		borderBottomColor: 'white',
		borderBottomWidth: 2
	},
	title: {
		fontSize: 24,
		color: 'white'
	},
	flatlist: {
		flex: 1,
		width: '100%'
	},
	safearea: {
		flex: 1,
		width: '100%'
	},
	buttonContainer: {
		margin: 10
	}
});
