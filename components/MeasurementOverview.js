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
        <Header head={this.props.head} noBack="true" backCol="#ffffff" />
        <Link to="/logout"><Text>profile **placeholder**</Text></Link>
        <View style={styles.main}>
          <Text style={{ fontFamily: 'Quattrocento Sans Bold', fontSize: 17, paddingBottom: 10 }}>ADD DATA +</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Link to="/add" style={styles.button}>
          <Text style={styles.buttonText}>Add Measurement</Text>
          </Link>
          <Link style={styles.button}>
          <Text style={styles.buttonText}>Add Media</Text>
          </Link>
          </View>
          <Text style={{ fontFamily: 'Quattrocento Sans Bold', fontSize: 17, paddingBottom: 0, paddingTop: 25 }}>OVERVIEW</Text>
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
    width: '49.5%',
    backgroundColor: '#444',
    padding: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'Quattrocento Sans'
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
    fontFamily: 'Quattrocento Sans',
  },
});
