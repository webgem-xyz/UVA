import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

// Import the components
// import Header from './components/Header';
import Overview from './components/MeasurementOverview';
import Add from './components/Add';
import Measurement from './components/Measurement';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" render={()=><Overview head="MEASUREMENTS" />} />
          <Route path="/add" render={()=><Add head="ADD MEASUREMENT" />} />
          <Route path="/view/:measurementId" render={()=><Measurement head="VIEW MEASUREMENT" />} />
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
