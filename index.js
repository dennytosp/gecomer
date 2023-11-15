/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

if (Text.defaultProps === null) {
  Text.defaultProps = {}
  Text.defaultProps.allowFontScaling = false

  TextInput.defaultProps = TextInput.defaultProps || {}
  TextInput.defaultProps.allowFontScaling = false
}
