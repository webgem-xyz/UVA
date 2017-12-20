import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

// Import select
import {Select, Option} from "react-native-chooser";

// Components
import Header from './Header';

export default class SelectItem extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);

    this.state = {
      value : "Select Me Please"
    }
  }

  onSelect(value, label) {
    this.setState({ value });
    this.props.selectState(value);
  }

  render() {
    return (
      <Select
        onSelect = {this.onSelect}
        defaultText  = {this.state.value}
        style = {{borderWidth : 1, borderColor : "green"}}
        textStyle = {{}}
        backdropStyle  = {{backgroundColor : "#fafafa"}}
        optionListStyle={{ backgroundColor: "#F5FCFF" }}
      >
        <Option value = "acidity" >Acidity (Ph)</Option>
        <Option value = "salinity">Salinity (PSU)</Option>
      </Select>
    );
  }
}