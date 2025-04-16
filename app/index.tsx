// app/index.tsx

import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export default function IndexScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://infomary.com/login' }}
        style={styles.container}
        javaScriptEnabled
        domStorageEnabled
        scalesPageToFit
        useWebKit
        originWhitelist={['*']}
        userAgent={
          Platform.OS === 'android'
            ? 'Chrome/18.0.1025.133 Mobile Safari/535.19'
            : 'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75'
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
