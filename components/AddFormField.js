import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

import SelectItem from './Select';

export default class AddFormField extends React.Component {
  constructor(props) {
    super(props);

    this.selectState = this.selectState.bind(this);
    this.edit = this.edit.bind(this);

    this.state = {
      inputkind: 'acidity',
      textval: ''
    };
  }

  selectState(selected) {
    this.setState({
      inputkind: selected
    });
  }

  edit(textval) {
    this.setState({ textval })
    this.props.textInputEdit(this.state.inputkind, textval);
  }

  render() {
    return (
      <View>
        <SelectItem selectState={this.selectState} />
        <TextInput
          onChangeText={(textval) => this.edit(textval)}
          value={this.state.textval}
          style={styles.input}
          autoCorrect={false}
        />
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
