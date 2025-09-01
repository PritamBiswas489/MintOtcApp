import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';

const FpsScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity>
          <VectorIcon
            icon="Ionicons"
            name="arrow-back"
            size={20}
            color={appColors.white}
          />
        </TouchableOpacity>
        <Text style={styles.title}>FPS</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyInner}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Barmanji Kano</Text>
        </View>
        <View style={styles.bodyInner}>
          <Text style={styles.label}>Account</Text>
          <Text style={styles.value}>+985-6287-5423</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FpsScreen;
