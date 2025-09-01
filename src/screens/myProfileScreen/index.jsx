import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import EditIcon from '@src/assets/images/edit-square.svg';
import { SW } from '@src/theme/dimensions';
import Check from '@src/assets/images/profile/check.svg';

const MyProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <VectorIcon
              icon="Ionicons"
              name="arrow-back"
              size={SW(20)}
              color={appColors.white}
            />
          </TouchableOpacity>
          <Text style={styles.title}>My Profile</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <EditIcon style={styles.clickImg} height={26} width={26} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileInitials}>BA</Text>
        </View>
        <Text style={styles.label}>Nick Name</Text>
        <View style={styles.verifiedRow}>
          <Text style={styles.value}>Barmanji</Text>
        </View>
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.verifiedRow}>
          <Text style={styles.value}>Wade Warren</Text>
        </View>

        <Text style={styles.label}>Identity</Text>
        <View style={styles.verifiedRow}>
          <View style={styles.inputField}>
            <Text style={styles.value}>Verification Pending</Text>
          </View>
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.verifiedRow}>
          <View style={styles.inputField}>
            <Text style={styles.value}>+91 81540 60000</Text>
          </View>
          <Check width={30} height={30} />
        </View>
        <Text style={styles.label}>Email</Text>
        <View style={styles.verifiedRow}>
          <View style={styles.inputField}>
            <Text style={styles.value}>pintu.s@test.in</Text>
          </View>
          <Check width={30} height={30} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyProfileScreen;
