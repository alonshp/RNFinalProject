import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Image, Linking} from 'react-native'


const styles = StyleSheet.create({
  row: {padding: 20},
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',

  }
})

const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => Linking.openURL(props.url)}>
    <View style={styles.headerContainer}>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: props.siteLogoUrl}}
      />
      <Text numberOfLines={2} style={styles.titleText} >{props.title}</Text>
    </View>
    <Image
      style={{width: 300, height: 150}}
      source={{uri: props.thumbnailUrl}}
    />
  </TouchableOpacity>
)

export default Row
