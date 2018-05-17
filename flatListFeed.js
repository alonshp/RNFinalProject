import React from 'react'
import {FlatList} from 'react-native'
import Row from './postListItemRow'

const renderItem = ({item}) => <Row {...item} />

const FlatListFeed = props =>
  <FlatList
    keyExtractor={item => item.url}
    renderItem={renderItem}
    data={props.feed}
  />

export default FlatListFeed
