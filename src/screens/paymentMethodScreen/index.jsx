import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Modal,
  FlatList,
} from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import Add from '@src/assets/images/add.svg';
import FpsIcon from '@src/assets/images/fps.svg';
import Wallet from '@src/assets/images/wallet.svg';
import CheckIcon from '@src/assets/images/check.svg'; // Assuming a check icon SVG
import { SW } from '@src/theme/dimensions';

// Sample data for the payment type dropdown
const paymentTypes = [
  "Caisse d'Epargne",
  'Banco Familiar',
  'Lloyds Bank',
  'Iterfisa Banco',
  'ING',
  'Banco Atlas',
  'UniCredit',
];

const PaymentMethodScreen = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(false); // Default toggle off
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedPaymentType, setSelectedPaymentType] =
    useState('Banco Familiar');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSwitch = setter => {
    return value => {
      setter(value);
      if (value) setCountryModalVisible(true); // Show modal when toggle is on
    };
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

  const filteredOptions = options => {
    return options.filter(option =>
      option.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  const renderDropdownItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.dropdownItem,
        selectedPaymentType === item && { backgroundColor: appColors.lightBg }, // Light background when selected
      ]}
      onPress={() => {
        setSelectedPaymentType(item);
        setCountryModalVisible(false);
        setSearchQuery('');
      }}
    >
      <Text
        style={[
          styles.dropdownItemText,
          selectedPaymentType === item && { color: appColors.secondary }, // Primary color when active
        ]}
      >
        {item}
      </Text>
      {selectedPaymentType === item && (
        <CheckIcon width={16} height={16} color={appColors.DarkPrimary} /> // Check icon when selected
      )}
    </TouchableOpacity>
  );

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
          <Text style={styles.title}>Payment Method </Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Add style={styles.clickImg} height={20} width={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <View>
              <FpsIcon width={26} height={26} style={{ marginRight: SW(10) }} />
            </View>
            <View>
              <Text style={styles.label}>Notification</Text>
              <Text style={styles.subLabel}>+852-6187-...</Text>
            </View>
          </View>
          <CustomToggle
            value={notificationEnabled}
            onValueChange={toggleSwitch(setNotificationEnabled)}
          />
        </View>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <View>
              <Wallet width={26} height={26} style={{ marginRight: SW(10) }} />
            </View>
            <View>
              <Text style={styles.label}>Mox Bank Limited</Text>
              <Text style={styles.subLabel}>8745 1254 9865 3265</Text>
            </View>
          </View>
          <CustomToggle
            value={smsEnabled}
            onValueChange={toggleSwitch(setSmsEnabled)}
          />
        </View>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <View>
              <Wallet width={26} height={26} style={{ marginRight: SW(10) }} />
            </View>
            <View>
              <Text style={styles.label}>HSBC (Hong Kong)</Text>
              <Text style={styles.subLabel}>{selectedPaymentType}</Text>
            </View>
          </View>
          <CustomToggle
            value={emailEnabled}
            onValueChange={toggleSwitch(setEmailEnabled)}
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={countryModalVisible}
        onRequestClose={() => {
          setCountryModalVisible(false);
          setSearchQuery('');
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select type of payment</Text>
              <TouchableOpacity
                onPress={() => {
                  setCountryModalVisible(false);
                  setSearchQuery('');
                }}
              >
                <Text style={styles.cancelText}>
                  <VectorIcon
                    name="close-a"
                    icon="Fontisto"
                    size={16}
                    color={appColors.darkText}
                  />
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={filteredOptions(paymentTypes)}
              renderItem={renderDropdownItem}
              keyExtractor={item => item}
              style={styles.modalList}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;
