import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
} from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';

const FilterScreen = () => {
  const [country, setCountry] = useState('India');
  const [currency, setCurrency] = useState('Rupee');
  const [payment, setPayment] = useState('All');
  const [amount, setAmount] = useState('');
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [currencyModalVisible, setCurrencyModalVisible] = useState(false);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSheet, setActiveSheet] = useState('');

  const countries = [
    'India',
    'Hong Kong, China',
    'Thailand',
    'Ukraine',
    'Pakistan',
    'Singapore',
    'Belarus',
  ];
  const currencies = ['Rupee', 'Dollar', 'Euro', 'Yen', 'Pound'];
  const payments = ['All', 'Credit Card', 'Debit Card', 'UPI', 'Cash'];

  const filteredOptions = options =>
    options.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  const renderDropdownItem = ({ item }) => {
    const isSelected =
      (activeSheet === 'country' && country === item) ||
      (activeSheet === 'currency' && currency === item) ||
      (activeSheet === 'payment' && payment === item);
    return (
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          if (activeSheet === 'country') setCountry(item);
          if (activeSheet === 'currency') setCurrency(item);
          if (activeSheet === 'payment') setPayment(item);
          setSearchQuery('');
          if (activeSheet === 'country') setCountryModalVisible(false);
          if (activeSheet === 'currency') setCurrencyModalVisible(false);
          if (activeSheet === 'payment') setPaymentModalVisible(false);
        }}
      >
        <Text style={styles.dropdownItemText}>{item}</Text>
        {isSelected && (
          <View style={styles.checkmark}>
            <VectorIcon
              name="check"
              icon="Feather"
              size={20}
              color={appColors.secondary}
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };
  {
    /*  */
  }
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.image}>
            <Text style={styles.name}>DK</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Filter</Text>
        </View>
        <Text style={styles.subTitle}>Reset</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyInner}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Country/Region</Text>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => {
                setActiveSheet('country');
                setCountryModalVisible(true);
              }}
            >
              <Text style={styles.dropdownText}>{country}</Text>
              <VectorIcon
                name="chevron-right"
                icon="Feather"
                size={18}
                color={appColors.darkText}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Currency</Text>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => {
                setActiveSheet('currency');
                setCurrencyModalVisible(true);
              }}
            >
              <Text style={styles.dropdownText}>{currency}</Text>
              <VectorIcon
                name="chevron-right"
                icon="Feather"
                size={18}
                color={appColors.darkText}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Payment</Text>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => {
                setActiveSheet('payment');
                setPaymentModalVisible(true);
              }}
            >
              <Text style={styles.dropdownText}>{payment}</Text>
              <VectorIcon
                name="chevron-right"
                icon="Feather"
                size={18}
                color={appColors.darkText}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Amount (INR)</Text>
            <TextInput
              style={styles.input}
              value={amount}
              onChangeText={setAmount}
              placeholder="Your desired amount"
              placeholderTextColor={appColors.gray}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>

      {/* Country Modal */}
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
              <Text style={styles.modalTitle}>Select Country/Region</Text>
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
            <View style={styles.searchWrap}>
              <VectorIcon
                name="search"
                icon="Feather"
                size={22}
                color={appColors.darkText}
                style={styles.srcIcon}
              />
              <TextInput
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search"
                placeholderTextColor={appColors.gray}
              />
              <TouchableOpacity style={styles.searchCancel}>
                <Text style={styles.searchCancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={filteredOptions(countries)}
              renderItem={renderDropdownItem}
              keyExtractor={item => item}
              style={styles.modalList}
            />
          </View>
        </View>
      </Modal>

      {/* Currency Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={currencyModalVisible}
        onRequestClose={() => {
          setCurrencyModalVisible(false);
          setSearchQuery('');
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Currency</Text>
              <TouchableOpacity
                onPress={() => {
                  setCurrencyModalVisible(false);
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
            <View style={styles.searchWrap}>
              <VectorIcon
                name="search"
                icon="Feather"
                size={22}
                color={appColors.darkText}
                style={styles.srcIcon}
              />
              <TextInput
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search"
                placeholderTextColor={appColors.gray}
              />
              <TouchableOpacity style={styles.searchCancel}>
                <Text style={styles.searchCancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={filteredOptions(currencies)}
              renderItem={renderDropdownItem}
              keyExtractor={item => item}
              style={styles.modalList}
            />
          </View>
        </View>
      </Modal>

      {/* Payment Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={paymentModalVisible}
        onRequestClose={() => {
          setPaymentModalVisible(false);
          setSearchQuery('');
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Payment</Text>
              <TouchableOpacity
                onPress={() => {
                  setPaymentModalVisible(false);
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
            <View style={styles.searchWrap}>
              <VectorIcon
                name="search"
                icon="Feather"
                size={22}
                color={appColors.darkText}
                style={styles.srcIcon}
              />
              <TextInput
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search"
                placeholderTextColor={appColors.gray}
              />
              <TouchableOpacity style={styles.searchCancel}>
                <Text style={styles.searchCancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={filteredOptions(payments)}
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

export default FilterScreen;
