import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
// import {Text} from 'react-native';
import {Text} from 'react-native-ui-lib';
//import {View} from 'react-native';
import {View} from 'react-native-ui-lib';
// import {Button} from 'react-native';
import {Button} from 'react-native-ui-lib';

import {Navigation} from 'react-native-navigation';
import {deletePost} from '../posts.actions';

const ViewPost = props => {
  const onPostDeletePressed = async () => {
    Navigation.pop(props.componentId);
    await deletePost(props.post.id);
  };

  return (
    <View flex spread padding-24>
      <View>
        <Text text30 purple10>
          {props.post.text}
        </Text>
        <Text text70 dark20 marginT-12>
          {props.somePropToPass}
        </Text>
      </View>
      {/* <Button title="Delete Post" onPress={onPostDeletePressed} color={'red'} /> */}
      <Button
        label="Delete Post"
        text80
        red20
        bg-red70
        fullWidth
        onPress={this.onPostDeletePressed}
      />
    </View>
  );
};
export default ViewPost;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCDDDB',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  delete: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
