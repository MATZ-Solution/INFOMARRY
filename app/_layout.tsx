import { SafeAreaView } from 'react-native-safe-area-context';
import { Linking, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export default function RootLayout() {
  const handleShouldStartLoadWithRequest = (event: any) => {
    if (event.url.includes("accounts.google.com")) {
      Linking.openURL(event.url); // Open in Safari
      return false; // Stop WebView from loading Google login
    }
    return true;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://infomary.com/login" }}
        style={styles.container}
        javaScriptEnabled
        domStorageEnabled
        useWebKit
        originWhitelist={['*']}
        onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
