import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import ChatIcon from '@src/assets/images/Chat.svg';
import DiamondIcon from '@src/assets/images/diamond.svg';
import { SW } from '@src/theme/dimensions';

const SettingScreen = () => {
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
          <Text style={styles.title}>Setting</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <ChatIcon style={styles.clickImg} height={20} width={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyInner}>
          <TouchableOpacity style={styles.detailRow}>
            <Text style={styles.label}>Set ad posting/removal policy</Text>
            <VectorIcon
              icon="FontAwesome6"
              name="angle-right"
              size={16}
              color={appColors.bodyText_2}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailRow}>
            <Text style={styles.label}>Notification settings</Text>
            <VectorIcon
              icon="FontAwesome6"
              name="angle-right"
              size={16}
              color={appColors.bodyText_2}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailRow}>
            <Text style={styles.label}>Language</Text>
            <Text style={styles.val}>English</Text>
            <VectorIcon
              icon="FontAwesome6"
              name="angle-right"
              size={16}
              color={appColors.bodyText_2}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailRow}>
            <Text style={styles.label}>Country/Region</Text>
            <Text style={styles.val}>Hong Kong, China</Text>
            <VectorIcon
              icon="FontAwesome6"
              name="angle-right"
              size={16}
              color={appColors.bodyText_2}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logOut}>
          <Text style={styles.logOutText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
