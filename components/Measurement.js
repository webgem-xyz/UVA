import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Import Firebase
import base from '../base';

// Components
import Header from './Header';

export default class Measurement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      measurement: {}
    }
  }

  componentWillMount(nextProps) {
    this.ref = base.bindToState(`/${this.props.uid}/mes/${this.props.match.params.measurementId}`, {
      context: this,
      state: 'measurement'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const measurement = this.state.measurement;
    return (
      <View style={styles.container}>
        <Header head={this.props.head}/>
        <ScrollView style={styles.main}>
          {measurement.longtitude &&
            <View style={styles.row}>
              <Text style={styles.label}>Longtitude</Text>
              <Text style={styles.value}>{measurement.longtitude}</Text>
            </View>
          }
          {measurement.latitude &&
            <View style={styles.row}>
              <Text style={styles.label}>Latitude</Text>
              <Text style={styles.value}>{measurement.latitude}</Text>
            </View>
          }
          {measurement.date &&
            <View style={styles.row}>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.value}>{measurement.date}</Text>
            </View>
          }
          {measurement.acidity &&
            <View style={styles.row}>
              <Text style={styles.label}>Acidity (pH)</Text>
              <Text style={styles.value}>{measurement.acidity}</Text>
            </View>
          }
          {measurement.salinity &&
            <View style={styles.row}>
              <Text style={styles.label}>Salinity (PSU)</Text>
              <Text style={styles.value}>{measurement.salinity}</Text>
            </View>
          }
        </ScrollView>
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
    flex: 0,
    width: '100%',
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  value: {
    fontWeight: '300',
    fontSize: 14,
    width: '50%',
    color: '#333',
  },
  label: {
    fontWeight: '900',
    fontSize: 15,
    color: '#333',
  }
});
