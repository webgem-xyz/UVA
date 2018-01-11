import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

// Import Components
import Header from './Header';


export default class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      measurements: {}
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header head={this.props.head} noBack="true" backCol="#ffffff"/>
        <View style={styles.main}>
          <TouchableOpacity onPress={() => { this.props.logout() }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Signout</Text>
            </View>
          </TouchableOpacity>
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
    width: '49.5%',
    backgroundColor: '#444',
    padding: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'Quattrocento Sans'
  },
  data: {
    flex: 2,
    marginTop: 20,
  },
  listHead: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listHeadTag: {
    color: '#333',
    fontWeight: '700',
    fontFamily: 'Quattrocento Sans',
  },
  button: {
    marginBottom: 0,
    width: '80%',
    top: 30,
    left: '10%',
    alignItems: 'center',
    backgroundColor: '#444'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontFamily: 'Quattrocento Sans',
  }
});
