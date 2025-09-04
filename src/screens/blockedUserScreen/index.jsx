import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import ChatIcon from '@src/assets/images/Chat.svg';

const BlockedUserScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <VectorIcon
              icon="Ionicons"
              name="arrow-back"
              size={20}
              color={appColors.white}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Blocked User</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <Text style={styles.titleLetter}>B</Text>
            <Text style={styles.label}>Barmanji</Text>
          </View>
          <TouchableOpacity style={styles.ubBotton}>
            <Text style={styles.ubText}>Unblock</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <Text style={styles.titleLetter}>B</Text>
            <Text style={styles.label}>Barmanji</Text>
          </View>
          <TouchableOpacity style={styles.ubBotton}>
            <Text style={styles.ubText}>Unblock</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <Text style={styles.titleLetter}>B</Text>
            <Text style={styles.label}>Barmanji</Text>
          </View>
          <TouchableOpacity style={styles.ubBotton}>
            <Text style={styles.ubText}>Unblock</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BlockedUserScreen;
