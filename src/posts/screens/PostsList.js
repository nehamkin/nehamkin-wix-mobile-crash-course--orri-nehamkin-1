import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation, NavigationComponentProps, NavigationFunctionComponent} from 'react-native-navigation';

const PostsList = (props) => {



    Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
        if (buttonId === 'addPost')
            showAddPostModal()
    });
    
    const pushViewPostScreen = () => {
        Navigation.push(props.componentId, {
        component: {
            name: 'blog.ViewPost',
            passProps: {
            somePropToPass: 'Some props that we are passing'
            },
            options: {
            topBar: {
                title: {
                text: 'Post1'
                }
            }
            }
        }
        });
    }

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

