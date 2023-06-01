import * as React from 'react';
import { View } from 'react-native';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  return <View>
    <View>
      <Image
      source={require('../assets/little-limon-logo.png')}
      style={ styles.image }
      accessibilityLabel='Little limon'
      accessibilityValue={true}
      />
    </View>
  </View>;
};

export default SubscribeScreen;
