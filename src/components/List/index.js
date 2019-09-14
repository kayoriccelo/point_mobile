/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Text, ActivityIndicator} from 'react-native';

const List = ({items, fieldName, getList}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadList();
  }, []);

  loadList = () => {
    if (loading) {
      return;
    }

    setLoading(true);

    getList(page).then(res => {
      setData([...data, ...items]);
      setLoading(false);
      setPage(page + 1);
    });
  };

  renderItem = ({item}) => (
    <ItemView>
      <Text>{item[fieldName]}</Text>
    </ItemView>
  );

  renderFooter = () => {
    if (!loading) {
      return null;
    }

    return (
      <Loading>
        <ActivityIndicator />
      </Loading>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={this.renderItem}
      keyExtractor={item => item.id}
      onEndReached={getList}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
    />
  );
};

export const FlatList = styled.FlatList`
  margintop: 30px;
`;

export const ItemView = styled.View`
  backgroundcolor: #eee;
  margintop: 20px;
  padding: 30px;
`;

export const Loading = styled.View`
  alignself: center;
  marginvertical: 20px;
`;

export default List;
