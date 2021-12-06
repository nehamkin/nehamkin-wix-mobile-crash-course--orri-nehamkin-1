import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {Navigation} from 'react-native-navigation';

export function registerScreens() {

  Navigation.registerComponent('blog.PostsList', () => require('./posts/screens/PostsList').default);
  Navigation.registerComponent('blog.AddPost', () => require('./posts/screens/AddPost').default);
  Navigation.registerComponent('blog.ViewPost', () => require('./posts/screens/ViewPost').default);

}



