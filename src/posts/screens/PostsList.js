import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation, NavigationComponentProps, NavigationFunctionComponent} from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks';
import {useConnect} from 'remx';
import {postsStore} from '../posts.store';
import * as postsActions from '../posts.actions';


const PostsList = (props) => {


    const {posts} = useConnect(() => ({
      posts: postsStore.getPosts(),
    }));

    useEffect(()=>{
      postsActions.fetchPosts();
    },[])

    useEffect(() => {const listener = Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
          if (buttonId === 'addPost')
            showAddPostModal()
          return listener.remove();
    })},[]);
    
    const pushViewPostScreen = useCallback((post) => {
      Navigation.push(props.componentId, {
        component: {
          name: 'blog.ViewPost',
          passProps: {
            post
          },
          options: {
            topBar: {
              title: {
                text: 'Post1'
              }
            }
          }
        }
      })}, [props.componentId]
  );

    const showAddPostModal = () => {
        Navigation.showModal({
        stack: {
            children: [{
            component: {
                name: 'blog.AddPost',
            }
            }]
        }
        });
    }
  

  
  return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={pushViewPostScreen}>PostsList Screen</Text>
        <Text>{JSON.stringify(posts)}</Text>
      </View>
    )
}

PostsList.options = {
    topBar: {
        rightButtons: [
          {
            id: 'addPost',
            text: 'Add'
          }
        ]
      }
}

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
  }
});

