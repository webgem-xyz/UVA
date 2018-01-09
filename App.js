import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

// Import Firebase Login
import firebase from 'firebase/app';
require('firebase/auth');
import fireApp from './base2';

// Import the components
import Login from './components/Login';
import Overview from './components/MeasurementOverview';
import Add from './components/Add';
import Measurement from './components/Measurement';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.authenticate = this.authenticate.bind(this);

    this.state = {
      uid: null,
    };
  }

  logout() {
    firebase.auth(fireApp).signOut();
    this.setState({ uid: null });
  }

  authenticate(email,password) {
    fireApp.auth().signInAndRetrieveDataWithEmailAndPassword(email, password).then(user => {
      this.setState({
        uid: user.user.uid
      });
    });
  }

  render() {
    if (this.state.uid === null) {
      return <Login authenticate={this.authenticate} />
    }
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" render={()=><Overview head="MEASUREMENTS" uid={this.state.uid} />} />
          <Route path="/add" render={()=><Add head="ADD MEASUREMENT" uid={this.state.uid} />} />
          <Route path="/view/:measurementId" render={({match}) => <Measurement head="VIEW MEASUREMENT" match={match} uid={this.state.uid} />} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});