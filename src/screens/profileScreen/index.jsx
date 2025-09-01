import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
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
  const [isOtcModalVisible, setIsOtcModalVisible] = useState(false);
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
        <View style={styles.trustUserRow}>
          <TouchableOpacity
            style={styles.trustUserButton}
            onPress={() => {
              setIsOtcModalVisible(true);
            }}
          >
            <Text style={styles.trustUserText}>Trust User</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isOtcModalVisible}
        onRequestClose={() => setIsOtcModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheetContainer}>
            {/* <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsOtcModalVisible(false)}
            >
              <VectorIcon
                name="x"
                icon="Feather"
                size={24}
                color={appColors.darkText}
              />
            </TouchableOpacity> */}
            {/* <View style={styles.bottomSheetContent}> */}
            <Text style={styles.transactionRulesTitle}>Notice</Text>
            <Text style={styles.transactionRule}>
              Are you sure you want to block trabsactions with this user?
            </Text>
            <View style={styles.rowCenter}>
              <TouchableOpacity style={[styles.submitButton, { width: '40%' }]}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.submitButton,
                  { backgroundColor: appColors.lightBg, width: '40%' },
                ]}
                onPress={() => setIsOtcModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            {/* </View> */}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ProfileScreen;
