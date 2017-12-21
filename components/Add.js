import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';

// Import select
import base from '../base';

// Components
import Header from './Header';
import SelectItem from './Select';
import AddFormField from './AddFormField';
import { Redirect } from 'react-router-native';
import Measurement from './Measurement';

export default class Add extends React.Component {
  constructor(props) {
    super(props);

    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.textInputEdit = this.textInputEdit.bind(this);

    this.submitMeasurement = this.submitMeasurement.bind(this);
    this.addMeasurement = this.addMeasurement.bind(this);

    const date = new Date();

    this.state = {
      longitude: '',
      latitude: '',
      date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      acidity: null,
      salinity: null,
      tempature: null,
      measurements: {},
      redirectTrue: false,
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(this.success, this.error);
    this.ref = base.syncState(`/${this.props.uid}/mes/`, {
      context: this,
      state: 'measurements'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  textInputEdit(kind, value) {
    this.setState({
      [kind]: value
    });
  }

  success(pos) {
    var crd = pos.coords;

    this.setState({
      latitude: `${crd.latitude}`,
      longitude: `${crd.longitude}`,
    });
  };

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  submitMeasurement() {
    const measurement = {
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      date: moment(this.state.date, 'YYYY-MM-DD').format('YYYY-MM-DD'),
      acidity: this.state.acidity,
      salinity: this.state.salinity,
      tempature: this.state.tempature,
    }
    this.addMeasurement(measurement)
  }

  addMeasurement(measurement) {
    // Update our measurements state
    const measurements = { ...this.state.measurements };
    // add in our new measurement
    const timestamp = Date.now();
    const dateFormatted = moment(this.state.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    console.log(dateFormatted);
    measurements[`measurement_${dateFormatted}_${timestamp}`] = measurement;
    // set state
    this.setState({
      measurements,
      redirectTrue: true,
    });
  }

  render() {
    const redirectTrue = this.state.redirectTrue;
    if (redirectTrue === true) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <View style={styles.container}>
        <Header head={this.props.head}/>
        <KeyboardAwareScrollView style={styles.main}>
          <View>
            <View style={styles.beside}>
              <View style={{width: '48%'}}>
                <Text style={styles.label}>Longtitude</Text>
                <TextInput
                  onChangeText={(longitude) => this.setState({ longitude })}
                  value={this.state.longitude}
                  style={styles.input}
                  autoCorrect={false}
                  returnKeyType="done"
                />
              </View>
              <View style={{width: '48%'}}>
                <Text style={styles.label}>Latitude</Text>
                <TextInput
                  onChangeText={(latitude) => this.setState({ latitude })}
                  value={this.state.latitude}
                  style={styles.input}
                  autoCorrect={false}
                  returnKeyType="done"
                />
              </View>
            </View>
            <Text style={styles.label}>Date of measurement</Text>
            <TextInput
              onChangeText={(date) => this.setState({ date })}
              value={this.state.date}
              style={styles.input}
              autoCorrect={false}
              returnKeyType="done"
              selectionColor="#555"
            />
            <Text style={styles.label}>Acidity (Ph)</Text>
            <TextInput
              onChangeText={(acidity) => this.setState({ acidity })}
              value={this.state.acidity}
              style={styles.input}
              autoCorrect={false}
              returnKeyType="done"
            />
            <Text style={styles.label}>Salinity (PSU)</Text>
            <TextInput
              onChangeText={(salinity) => this.setState({ salinity })}
              value={this.state.salinity}
              style={styles.input}
              autoCorrect={false}
              returnKeyType="done"
            />
            <Text style={styles.label}>Tempature</Text>
            <TextInput
              onChangeText={(tempature) => this.setState({ tempature })}
              value={this.state.tempature}
              style={styles.input}
              autoCorrect={false}
              returnKeyType="done"
            />
            <TouchableOpacity onPress={() => { this.submitMeasurement() }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>SUBMIT MEASUREMENT</Text>
              </View>
            </TouchableOpacity>
            { /* <AddFormField textInputEdit={this.textInputEdit}/> */}
          </View>
        </KeyboardAwareScrollView>
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
  label: {
    fontWeight: '800',
    fontSize: 15,
    color: '#444',
    marginTop: 5,
  },
  input: {
    borderColor: '#333',
    borderStyle: 'solid',
    borderWidth: 0.5,
    height: 35,
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
    padding: 5,
  },
  beside: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: 'white'
  }
});
