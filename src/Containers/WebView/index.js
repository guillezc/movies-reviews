import React from 'react';

import {WebView as RNWebView} from 'react-native-webview';

const WebView = ({route}) => {
  const url = route.params?.url;

  return (
    <RNWebView
      originWhitelist={['*']}
      androidLayerType="hardware"
      dataDetectorTypes="none"
      source={{uri: url}}
    />
  );
};

export default WebView;
