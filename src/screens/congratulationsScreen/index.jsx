import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import { SW } from '@src/theme/dimensions';
import FromTo from '@src/assets/images/from-to.svg';

const CongratulationsScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.body}>
        <View style={styles.bodyInner}>
          <Image
            source={require('@assets/images/mob-to-mob.png')}
            style={styles.menuIcon}
            resizeMode="cover"
          />
          <Text style={styles.title}>Congratulations ! </Text>
          <Text style={styles.subTitle}>
            Your transaction is completed successfully.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.confirmBtn}>
        <Text style={styles.confirmBtnText}>Confirm </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CongratulationsScreen;
