import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import Setting from '@src/assets/images/setting.svg';
import Support from '@src/assets/images/support.svg';
import User from '@src/assets/images/profile/user.svg';
import Wallet from '@src/assets/images/profile/wallet.svg';
import Block from '@src/assets/images/profile/block.svg';
import Verification from '@src/assets/images/profile/verification-2.svg';
import Payment from '@src/assets/images/profile/payment.svg';
import Security from '@src/assets/images/profile/security.svg';
import Ads from '@src/assets/images/profile/ads.svg';
import About from '@src/assets/images/profile/about.svg';

import { SW } from '@src/theme/dimensions';

const ProfileTwo = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <TouchableOpacity>
              <VectorIcon
                icon="Ionicons"
                name="arrow-back"
                size={20}
                color={appColors.white}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={{ marginEnd: SW(10) }}>
              <Support style={styles.clickImg} height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Setting style={styles.clickImg} height={24} width={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerBottom}>
          <View style={styles.headerBottomLeft}>
            <View style={styles.innerLeft}>
              <Text style={styles.circle}>BA</Text>
            </View>
            <View style={styles.innerRight}>
              <Text style={styles.name}>Barmanji</Text>
              <Text style={styles.id}>UID 172232705</Text>
            </View>
          </View>
          <View style={styles.headerBottomRight}>
            <Text style={styles.verified}>Verified</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.bodyInner}>
            <TouchableOpacity style={styles.detailRow}>
              <User width={25} height={25} />
              <Text style={styles.label}>My Profile</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailRow}>
              <Wallet width={25} height={25} />
              <Text style={styles.label}>My Balance</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailRow}>
              <Block width={30} height={25} />
              <Text style={styles.label}>Language</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailRow}>
              <Verification width={25} height={25} />
              <Text style={styles.label}>KYC Verification</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailRow}>
              <Payment width={25} height={25} />
              <Text style={styles.label}>Payment</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailRow}>
              <Security width={25} height={25} />
              <Text style={styles.label}>Security Center</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailRow}>
              <Ads width={25} height={25} />
              <Text style={styles.label}>My Ads</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailRow}>
              <About width={25} height={25} />
              <Text style={styles.label}>Abouts Us</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileTwo;
