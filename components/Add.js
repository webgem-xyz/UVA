import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import Header from './Header';

export default class Add extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header head={this.props.head}/>
        <View style={styles.main}>
          <Text>Add</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
  },
});
