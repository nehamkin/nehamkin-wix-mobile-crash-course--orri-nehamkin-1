import React, {Component, useState, useEffect, useCallback} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import {useNavigationButtonPress} from 'react-native-navigation-hooks/dist';
import * as postsActions from '../posts.actions';

const AddPost = props => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSavePressed = () => {
    console.log('title', title);
    postsActions.addPost({
      title: title,
      text: text,
      img: `https://picsum.photos/200/200/?image=${randomImageNumber}`,
    });
    Navigation.dismissModal(props.componentId);
    const randomImageNumber = Math.floor(Math.random() * 500 + 1);
  };

  useNavigationButtonPress(e => {
    if (e.buttonId === 'cancelBtn') Navigation.dismissModal(props.componentId);
    else if (e.buttonId === 'saveBtn') {
      onSavePressed();
      alert('saveBtn');
    }
  });

  const onChangeText = text => {
    setText(text);
  };

  const onChangeTitle = title => {
    setTitle(title);
  };

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'saveBtn',
            text: 'Save',
            enabled: !!title,
          },
        ],
      },
    });
  }, [title]);

  return (
    <View flex padding-24>
      <Text >AddPost Screen</Text>
      <TextInput
        placeholder="Add a Catchy Title"
        value={title}
        onChangeText={onChangeTitle}
      />
      <TextInput
        placeholder="This is the beginning of a great post"
        value={text}
        onChangeText={onChangeText}
      />
    </View>
  );
};

AddPost.options = {
  topBar: {
    title: {
      text: 'Add Post',
    },
    rightButtons: [
      {
        id: 'saveBtn',
        text: 'Save',
        enabled: false,
      },
    ],
    leftButtons: [
      {
        id: 'cancelBtn',
        text: 'Cancel',
      },
    ],
  },
};

export default AddPost;

