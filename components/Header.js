import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'react-router-native';

export default class Header extends React.Component {
  render() {
    if (!this.props.noBack) {
      return (
        <View style={[styles.nav, {backgroundColor: this.props.backCol}]}>
          <Link to="/" style={styles.backArrow}>
            <Image source={require('../img/chevron-left.png')} style={{ height: 30, width: 15 }} />
          </Link>
          <Text style={styles.pageHead}>{this.props.head}</Text>
        </View>
      );
    }
    return (
      <View style={styles.nav}>
        <Text style={styles.pageHead}>{this.props.head}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    alignItems: 'center',
    flex: 0,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    paddingTop: 20,
    width: '100%',
  },
  pageHead: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Quattrocento Sans Bold',
  },
  backArrow: {
    position: 'absolute',
    width: 70,
    height: 50,
    left: 0,
    top: 25,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
