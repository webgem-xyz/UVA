import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Import Firebase Login
import firebase from 'firebase/app';
require('firebase/auth');
import fireApp from '../base2';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../img/mymarine.jpeg')} style={{width: 150, height: 88}} />
        </View>
        <View>
            <Text style={styles.label}>Username</Text>
            <TextInput
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              style={styles.input}
              autoCorrect={false}
              placeholder="test@example.com"
              keyboardType="email-address"
              returnKeyType="done"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              style={styles.input}
              autoCorrect={false}
              secureTextEntry
              placeholder="**********"
              returnKeyType="done"
            />
            <TouchableOpacity onPress={() => { this.props.authenticate(this.state.email, this.state.password) }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>LOG IN</Text>
              </View>
            </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.forgot}>I FORGOT MY PASSWORD</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    padding: 15,
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
  forgot: {
    alignSelf: 'center',
    color: '#333',
    fontWeight: '800',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
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
