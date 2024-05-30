import React from 'react';
import {View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './HomeStyles'
import { BatLogo } from '../../components/BatLogo/BatLogo';


const Home = () => {
    return(
        <View style={styles.container}>
            <BatLogo />
            <StatusBar style='auto' />
        </View>
    )
}

export default Home;
