import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import Add from '@src/assets/images/add.svg';
import Upi from '@src/assets/images/upi.svg';
import Imps from '@src/assets/images/imps.svg';
import { SW } from '@src/theme/dimensions';

const MyAdsScreen = () => {
  const [activeCurrency, setActiveCurrency] = useState('USDT');
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const currencyData = [
    { id: '1', name: 'All' },
    { id: '2', name: 'USDT' },
    { id: '3', name: 'BTC' },
    { id: '4', name: 'ETH' },
    { id: '5', name: 'HT' },
    { id: '6', name: 'EOS' },
    { id: '7', name: 'BCH' },
  ];

  const barmanjiData = [
    {
      id: '1',
      name: 'Sell USDT',
      price: '78.07 INR',
      limits: 'Limits 300,000.00 - 400,000.00 INR',
      volume: 'Amount 0.000000 USDT',
      date: '2021-11-20 10:08:28',
    },
    {
      id: '2',
      name: '8.02 JPY',
      price: '78.07 INR',
      limits: 'Limits 300,000.00 - 400,000.00 INR',
      volume: 'Amount 0.000000 USDT',
      date: '2021-11-20 10:08:28',
    },
  ];

  const renderCurrencyItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.currencyItem,
        activeCurrency === item.name && styles.activeCurrencyItem,
      ]}
      onPress={() => setActiveCurrency(item.name)}
    >
      <Text
        style={[
          styles.currencyText,
          activeCurrency === item.name && styles.activeCurrencyText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderBarmanjiItem = ({ item }) => {
    const toggleDropdown = id => {
      setDropdownVisible(dropdownVisible === id ? null : id);
    };

    const handleEdit = () => {
      // Handle Edit Ad logic here
      setDropdownVisible(null);
    };

    const handleDelete = () => {
      // Handle Delete Ad logic here
      setDropdownVisible(null);
    };

    return (
      <View style={styles.barmanjiCard}>
        <View style={styles.barmanjiHeader}>
          <Text style={styles.barmanjiName}>{item.name}</Text>
          <TouchableOpacity onPress={() => toggleDropdown(item.id)}>
            <VectorIcon
              icon="Entypo"
              size={16}
              name="dots-three-horizontal"
              color={appColors.darkText}
            />
          </TouchableOpacity>
        </View>
        {dropdownVisible === item.id && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem} onPress={handleEdit}>
              <Text style={styles.dropdownText}>Edit Ad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={handleDelete}
            >
              <Text style={styles.dropdownText}>Delete Ad</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.rowBetween}>
          <Text style={styles.priceText}>{item.price}</Text>
          <View style={styles.iconRow}>
            <Upi style={styles.iconImg} height={20} width={20} />
            <Imps style={styles.iconImg} height={20} width={20} />
          </View>
        </View>
        <Text style={styles.limitsText}>{item.limits}</Text>
        <View style={styles.rowBetween}>
          <Text style={styles.volumeText}>{item.volume}</Text>
          <Text style={styles.volumeText}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.topArea}>
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
            <Text style={styles.title}>My Ads</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity>
              <Add style={styles.clickImg} height={20} width={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.flatListArea}>
          <FlatList
            data={currencyData}
            renderItem={renderCurrencyItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyBg}></View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <FlatList
            data={barmanjiData}
            renderItem={renderBarmanjiItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            style={{ marginHorizontal: SW(20) }}
          />
        </ScrollView>
      </View>

      <View
        style={[styles.overlay, { display: dropdownVisible ? 'flex' : 'none' }]}
      ></View>
    </SafeAreaView>
  );
};

export default MyAdsScreen;
