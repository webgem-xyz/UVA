import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

// Import React native Form
// import { Form, InputField, LinkField, SwitchField, PickerField,DatePickerField, TimePickerField } from 'react-native-form-generator';

// Components
import Header from './Header';

export default class Add extends React.Component {
  constructor(props) {
    super(props);

    this.success = this.success.bind(this);
    this.error = this.error.bind(this);

    this.state = {
      longitude: '',
      latitude: '',

    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(this.success, this.error);
  }

  success(pos) {
    var crd = pos.coords;

    this.setState({
      latitude: `${crd.latitude}`,
      longitude: `${crd.longitude}`,
      date: ''
    });
  };

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };


  render() {
    const date = new Date();
    return (
      <View style={styles.container}>
        <Header head={this.props.head}/>
        <View style={styles.main}>
          <View>
            <TextInput
              onChangeText={(longitude) => this.setState({ longitude })}
              value={this.state.longitude}
              style={styles.input}
              autoCorrect={false}
            />
            <TextInput
              onChangeText={(latitude) => this.setState({ latitude })}
              value={this.state.latitude}
              style={styles.input}
              autoCorrect={false}
            />
            <TextInput
              onChangeText={(date) => this.setState({ date })}
              value={`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
              style={styles.input}
              autoCorrect={false}
            />
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
  },
  label: {
    fontWeight: '800',
    fontSize: 15,
    color: '#333',
    marginTop: 5,
  },
  input: {
    borderColor: '#333',
    borderStyle: 'solid',
    borderWidth: 0.5,
    height: 35,
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
  },
});
