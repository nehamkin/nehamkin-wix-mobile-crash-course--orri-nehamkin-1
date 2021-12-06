import {Navigation} from 'react-native-navigation';
import { registerScreens } from './src/screens';
import {registerLoggerForDebug} from 'remx'

registerScreens()
registerLoggerForDebug(console.log)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'blog.PostsList',
              options: {
                topBar: {
                  title: {
                    text: 'Blog'
                  }
                }
              }
            }
          }
        ],
      }
    }
  });
});
