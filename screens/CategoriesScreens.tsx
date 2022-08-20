import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';

interface ICategoriesDataProps {
  id: string;
  title: string;
  color: string;
}

const CategoriesScreens = () => {
  const renderCategoryItem = ({item}) => (
    <CategoryGridTile title={item.title} color={item.color} />
  );

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item: any) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreens;

const styles = StyleSheet.create({});
