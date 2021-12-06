import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';


const ViewPost = (props) => {


    const onPostDeletePressed = () => {
        //In here we will request from the server to delete the post
        Navigation.pop(props.componentId);
        setTimeout(() => {
            alert('Post deleted');
        }, 500);
    }


    return (
      <View style={styles.container}>
        <Text style={styles.text}>ViewPost Screen</Text>
        <Text>{props.somePropToPass}</Text>
        <Button
          title="Delete Post"
          onPress={onPostDeletePressed}
          color={'red'}
        />
      </View>
    );
  
}
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
  delete:{
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  }
});
