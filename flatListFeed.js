import React from 'react'
import {FlatList, View} from 'react-native'
import Row from './PostListItemRow'

const renderItem = ({item}) => <Row {...item} />

const FlatListFeed = props => {
  return (
    <FlatList
      keyExtractor={item => item.url}
      renderItem={renderItem}
      data={props.feed}
    />
  )
}


export default FlatListFeed
