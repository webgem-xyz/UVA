import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default class Item extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <Link style={styles.itemLink} to={`/view/${this.props.index}`}>
        <View style={styles.itemLinkWrap}>
          <Text style={styles.date}>{details.date}</Text>
        </View>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  itemLink: {
    width: '100%',
    backgroundColor: '#fafafa',
    height: 50,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#333',
    marginTop: 2.5,
    marginBottom: 2.5,
  },
  itemLinkWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontWeight: '700',
    fontFamily: 'Quattrocento Sans',
    fontSize: 16,
    color: '#333',
  },
});
