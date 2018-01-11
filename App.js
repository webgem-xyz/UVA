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

import { Font, AppLoading } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.authenticate = this.authenticate.bind(this);

    this.state = {
      uid: 'testuid',
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Quattrocento Sans': require('./assets/fonts/QuattrocentoSans-Regular.ttf'),
      'Quattrocento Sans Italic': require('./assets/fonts/QuattrocentoSans-Italic.ttf'),
      'Quattrocento Sans Bold': require('./assets/fonts/QuattrocentoSans-Bold.ttf'),
      'Quattrocento Sans Bold Italic': require('./assets/fonts/QuattrocentoSans-BoldItalic.ttf'),
    });

    this.setState({ fontLoaded: true })
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
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          onError={console.warn}
        />
      )
    }
    if (this.state.fontLoaded === true) {
      if (this.state.uid === null) {
        return <Login authenticate={this.authenticate} />
      }
      return (
        <NativeRouter>
          <View style={styles.container}>
            <Route exact path="/" render={() => <Overview head="MEASUREMENTS" uid={this.state.uid} />} />
            <Route path="/add" render={() => <Add head="ADD MEASUREMENT" uid={this.state.uid} />} />
            <Route path="/view/:measurementId" render={({ match }) => <Measurement head="VIEW MEASUREMENT" match={match} uid={this.state.uid} />} />
          </View>
        </NativeRouter>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});