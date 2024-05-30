import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';

import batLogo from '../../../assets/images/logoBatman.png'

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Bat Pass Generator</Text>
      <Image style={styles.imageContainer} source={ batLogo } />
    </View>
  );
}
