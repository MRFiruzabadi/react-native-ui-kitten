import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Select, SelectItem } from '@ui-kitten/components';

export const SelectDisabledOptionsShowcase = () => {

  const [selectedIndex, setSelectedIndex] = React.useState();

  return (
    <Layout style={styles.container}>
      <Select
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem disabled={true} title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 228,
  },
});

