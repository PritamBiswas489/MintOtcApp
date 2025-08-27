import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import ChatIcon from '@src/assets/images/Chat.svg';
import DiamondIcon from '@src/assets/images/diamond.svg';
import FpsIcon from '@src/assets/images/fps.svg';
import Identification from '@src/assets/images/profile/Identification.svg';
import Advanced from '@src/assets/images/profile/advanced.svg';
import Verification from '@src/assets/images/profile/verification.svg';
import Email from '@src/assets/images/profile/email.svg';
import UserIcon from '@src/assets/images/user.svg';
import { SW } from '@src/theme/dimensions';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.headerWrap}>
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
            <Text style={styles.title}>Profile</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity>
              <UserIcon style={styles.clickImg} height={26} width={26} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topArea}>
          <View style={styles.buyButton}>
            <Text style={styles.buyText}>Barmanji</Text>
            <DiamondIcon
              width={16}
              height={16}
              style={{ marginHorizontal: SW(5) }}
            />
          </View>
          <Text style={styles.infoText}>Registered on 2021.8.28</Text>

          <View style={styles.grid}>
            <View style={styles.col}>
              <Text style={styles.value}>223</Text>
              <Text style={styles.colLabel}>Trades</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.value}>93%</Text>
              <Text style={styles.colLabel}>Trades rate</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.value}>4.61</Text>
              <Text style={styles.colLabel}>Avg resp. (min)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <Identification
              width={26}
              height={26}
              style={{ marginRight: SW(10) }}
            />
            <Text style={styles.label}>Identification</Text>
          </View>
          <View>
            <Text style={styles.verified}>Verified</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <Advanced width={26} height={26} style={{ marginRight: SW(10) }} />
            <Text style={styles.label}>Advanced Verification</Text>
          </View>
          <View>
            <Text style={styles.verified}>Verified</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <Verification
              width={26}
              height={26}
              style={{ marginRight: SW(10) }}
            />
            <Text style={styles.label}>Phone Verification</Text>
          </View>
          <View>
            <Text style={styles.verified}>Verified</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <Email width={26} height={26} style={{ marginRight: SW(10) }} />
            <Text style={styles.label}>Email Verification</Text>
          </View>
          <View>
            <Text style={styles.verify}>Verify</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
