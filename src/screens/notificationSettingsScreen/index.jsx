import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import ChatIcon from '@src/assets/images/Chat.svg';

const NotificationSettingsScreen = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(true);

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
          <Text style={styles.title}>Notification settings</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <ChatIcon style={styles.clickImg} height={20} width={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Notification</Text>
          <CustomToggle
            value={notificationEnabled}
            onValueChange={toggleSwitch(setNotificationEnabled)}
          />
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>SMS</Text>
          <CustomToggle
            value={smsEnabled}
            onValueChange={toggleSwitch(setSmsEnabled)}
          />
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Email</Text>
          <CustomToggle
            value={emailEnabled}
            onValueChange={toggleSwitch(setEmailEnabled)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationSettingsScreen;
