import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import Check from '@src/assets/images/profile/check.svg';

import LinearGradient from 'react-native-linear-gradient';

const SecurityCenterScreen = () => {
  const [passCodeEnabled, SetpassCodeEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [gaEnabled, setGaEnabled] = useState(false);
  const [biomericsEnabled, setBiomericsEnabled] = useState(false);

  const toggleSwitch = setter => {
    return value => setter(value);
  };

  const CustomToggle = ({ value, onValueChange }) => {
    return (
      <TouchableOpacity
        onPress={() => onValueChange(!value)}
        style={[
          styles.toggleContainer,
          { backgroundColor: value ? appColors.DarkPrimary : '#D3D3D3' },
        ]}
      >
        <View
          style={[
            styles.toggleThumb,
            { transform: [{ translateX: value ? 16 : 0 }] },
          ]}
        />
      </TouchableOpacity>
    );
  };

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
          <Text style={styles.title}>Security Center</Text>
        </View>
      </View>

      <View style={styles.body}>
        {/* Security Level Section */}
        <View style={styles.securityLevelContainer}>
          <View style={styles.rowJustified}>
            <Text style={styles.securityLevelText}>Security Level</Text>
            <Text style={styles.securityLevelSubText}>
              At least 2 verification methods
            </Text>
          </View>
          <View style={styles.progressBar}>
            <LinearGradient
              colors={['#48FAFF', '#08A3B0']} // Gradient from light teal to dark teal
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progressFill}
            />
          </View>
          <View style={styles.levelLabels}>
            <Text style={styles.levelText}>Low</Text>
            <Text style={styles.levelText}>Medium</Text>
            <Text style={styles.levelText}>High</Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false} // hides vertical scrollbar
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.detailRow}>
            <Text style={styles.label}>Phone number</Text>
            <Text style={styles.val}>618****8745</Text>
            <Check width={20} height={20} />
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Email Verification</Text>
            <Text style={styles.val}>pin****ch.in</Text>
            <Check width={20} height={20} />
          </View>

          <TouchableOpacity style={styles.detailRow}>
            <Text style={styles.label}>Fund password</Text>
            <Text style={styles.val}>Reset</Text>
            <VectorIcon
              icon="FontAwesome6"
              name="angle-right"
              size={16}
              color={appColors.bodyText_2}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailRow}>
            <Text style={styles.label}>Login password</Text>
            <Text style={styles.val}>Reset</Text>
            <VectorIcon
              icon="FontAwesome6"
              name="angle-right"
              size={16}
              color={appColors.bodyText_2}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Passcode</Text>
            <CustomToggle
              value={passCodeEnabled}
              onValueChange={toggleSwitch(SetpassCodeEnabled)}
            />
          </View>
          <TouchableOpacity style={styles.detailRow}>
            <Text style={styles.label}>Update Passcode</Text>
            <Text style={styles.val}>Edit</Text>
            <VectorIcon
              icon="FontAwesome6"
              name="angle-right"
              size={16}
              color={appColors.bodyText_2}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <View style={styles.detailRow}>
            <Text style={styles.label}>SMS Authentication</Text>
            <CustomToggle
              value={smsEnabled}
              onValueChange={toggleSwitch(setSmsEnabled)}
            />
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Email Authentication</Text>
            <CustomToggle
              value={emailEnabled}
              onValueChange={toggleSwitch(setEmailEnabled)}
            />
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>GA Authentication</Text>
            <CustomToggle
              value={gaEnabled}
              onValueChange={toggleSwitch(setGaEnabled)}
            />
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Biomerics Verification</Text>
            <CustomToggle
              value={biomericsEnabled}
              onValueChange={toggleSwitch(setBiomericsEnabled)}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SecurityCenterScreen;
