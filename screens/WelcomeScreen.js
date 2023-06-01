import * as React from 'react';
import { View, Image, StyleSheet, Pressable,Text } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  const [Subscribe, isSubscribe] = React.useState(false);
  return
  <View>
  <View>
    <Image
      source={require('../assets/little-limon-logo.png')}
      style={ styles.image }
      accessibilityLabel='Little limon'
      accessibilityValue={true}
    />
    </View>
    <View>
    <Text style={styles.texte}>Little limon your local mediteranean bistro</Text>
    </View>
    <View>
      <Pressable style={styles.button} onPress={()=>navigation.navigate('Menu')}>
        <Text>Subscribe</Text>
      </Pressable>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    verticalAlign: 'middle'
  }
})
export default WelcomeScreen;
