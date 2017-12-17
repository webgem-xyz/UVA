import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

// Components
import Header from './Header';

export default class Overview extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header head={this.props.head} noBack="true"/>
        <View style={styles.main}>
          <Link to="/add" style={styles.button}>
            <Text style={styles.buttonText}>ADD MEASUREMENT+</Text>
          </Link>
          <View style={styles.data}>
            <View style={styles.listHead}>
              <Text style={styles.listHeadTag}>Date</Text>
              <Text style={styles.listHeadTag}>Uploaded</Text>
            </View>
          </View>
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
    width: '100%',
    padding: 15,
  },
  button: {
    flex: 0,
    width: '100%',
    backgroundColor: '#444',
    padding: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
  },
  data: {
    flex: 2,
    marginTop: 20,
  },
  listHead: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listHeadTag: {
    color: '#333',
    fontWeight: '700',
  },
});
