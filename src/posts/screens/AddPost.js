
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Navigation } from 'react-native-navigation';



const AddPost = (props) => {

    Navigation.events().registerNavigationButtonPressedListener(({buttonId}) => {
        if (buttonId === 'cancelBtn') {
          Navigation.dismissModal(props.componentId);
        } else if (buttonId === 'saveBtn') {
            Navigation.dismissModal(props.componentId);
            alert('saveBtn');
        }
      })

      const onChangeText = (text) => {
        Navigation.mergeOptions(props.componentId, {
          topBar: {
            rightButtons: [{
              id: 'saveBtn',
              text: 'Save',
              enabled: !!text
            }]
          }
        });
      }


    return (
        <View style={styles.container}> 
            <Text style={styles.text}>AddPost Screen</Text>
            <TextInput
                placeholder="Start writing to enable the save btn"
                onChangeText={onChangeText}
            />
        </View>
    );
}

AddPost.options = {
    topBar: {
        title: {
            text: 'Add Post'
        },
        rightButtons: [{
            id: 'saveBtn',
            text: 'Save',
            enabled: false
        }],
        leftButtons: [{
            id: 'cancelBtn',
            text:'Cancel'
        }]
    }   
}

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F7EF',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  }
});