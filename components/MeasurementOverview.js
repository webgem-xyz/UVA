import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

// Import Firebase Config
import base from '../base';

// Import Components
import Header from './Header';
import Item from './Item';


export default class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      measurements: {}
    };
  }

  componentWillMount(nextProps) {
    this.ref = base.syncState(`/${this.props.uid}/mes/`, {
      context: this,
      state: 'measurements',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header head={this.props.head} noBack="true" backCol="#ffffff"/>
        <View style={styles.main}>
          <Link to="/add" style={styles.button}>
            <Text style={styles.buttonText}>ADD MEASUREMENT+</Text>
          </Link>
          <View style={styles.data}>
            <View style={styles.listHead}>
              <Text style={styles.listHeadTag}>Date</Text>
            </View>
            <ScrollView style={styles.dataWrap}>
              {
                Object
                  .keys(this.state.measurements)
                  .reverse()
                  .map((key) => <Item key={key} index={key} details={this.state.measurements[key]}/>)
              }
            </ScrollView>
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
    padding: 15,
  },
  button: {
    flex: 0,
    width: '100%',
    backgroundColor: '#444',
    padding: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
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
  },
});
