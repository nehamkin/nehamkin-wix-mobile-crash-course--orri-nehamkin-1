import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {useNavigationButtonPress} from 'react-native-navigation-hooks';
import {useConnect} from 'remx';
import {postsStore} from '../posts.store';
import * as postsActions from '../posts.actions';
import {ListItem, View, Text} from 'react-native-ui-lib';

const PostsList = props => {
  const {posts} = useConnect(() => ({
    posts: postsStore.getPosts(),
  }));

  useEffect(() => {
    postsActions.fetchPosts();
  }, []);

  useNavigationButtonPress(e => {
    if (e.buttonId === 'addPost') showAddPostModal();
  });

  const pushViewPostScreen = useCallback(
    post => {
      Navigation.push(props.componentId, {
        component: {
          name: 'blog.ViewPost',
          passProps: {
            post,
          },
          options: {
            topBar: {
              title: {
                text: post.title,
              },
            },
          },
        },
      });
    },
    [props.componentId],
  );

  const renderItem = ({item}) => (
    <ListItem onPress={() => pushViewPostScreen(item)}>
      <Text>{item.title}</Text>
    </ListItem>
  );

  const showAddPostModal = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'blog.AddPost',
            },
          },
        ],
      },
    });
  };

  const postKeyExtractor = item => `${item.id}-key`;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PostsList Screen</Text>
      <FlatList
        data={posts}
        keyExtractor={postKeyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

PostsList.options = {
  topBar: {
    rightButtons: [
      {
        id: 'addPost',
        text: 'Add',
      },
    ],
  },
};

export default PostsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3EDFF',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
