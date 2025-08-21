import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';

const TradeScreen = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('Buy');

  // State for active currency
  const [activeCurrency, setActiveCurrency] = useState('USDT');

  // Currency data for FlatList
  const currencyData = [
    { id: '1', name: 'USDT' },
    { id: '2', name: 'BTC' },
    { id: '3', name: 'ETH' },
    { id: '4', name: 'HT' },
    { id: '5', name: 'EOS' },
    { id: '6', name: 'XRP' },
  ];

  // Barmanji data for looped items
  const barmanjiData = [
    {
      id: '1',
      name: 'Barmanji',
      price: '78.07 INR',
      limits: '300,000.00 - 400,000.00 INR',
      volume: '7,000,000,000 USDT',
      icon: 'diamond', // Adjust to match your icon library
    },
    {
      id: '2',
      name: 'Barmanji',
      price: '78.07 INR',
      limits: '300,000.00 - 400,000.00 INR',
      volume: '7,000,000,000 USDT',
      icon: 'md-help-circle', // Question mark icon
    },
    {
      id: '3',
      name: 'Barmanji',
      price: '78.07 INR',
      limits: '300,000.00 - 400,000.00 INR',
      volume: '7,000,000,000 USDT',
      icon: 'star', // Star icon
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
          activeCurrency === item.name && styles.activeCurrencyText, // Use activeCurrency to match the selected currency
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderBarmanjiItem = ({ item }) => (
    <View style={styles.barmanjiCard}>
      <View style={styles.barmanjiHeader}>
        <Text style={styles.barmanjiName}>{item.name}</Text>
        <VectorIcon
          icon="Ionicons"
          name={item.icon}
          size={18}
          color="#FFD700" // Gold color for icons
        />
        <Text style={styles.tradeInfo}>Trade 0 | Trade rate 0%</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.priceText}>{item.price}</Text>
        <View style={styles.iconRow}>
          <VectorIcon
            icon="FontAwesome"
            name="line-chart"
            size={16}
            color="#32CD32"
          />
          <VectorIcon
            icon="FontAwesome"
            name="money"
            size={16}
            color="#1E90FF"
          />
        </View>
      </View>
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.limitsText}>{item.limits}</Text>
          <Text style={styles.volumeText}>{item.volume}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.topArea}>
        <View style={styles.heading}>
          <TouchableOpacity style={styles.image}>
            <Text style={styles.name}>DK</Text>
          </TouchableOpacity>
          <View style={styles.rightIcon}>
            <TouchableOpacity style={styles.notificationIcon}>
              <VectorIcon
                icon="Feather"
                size={24}
                name="bell"
                color={appColors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.notificationIcon, styles.compair]}>
              <Image
                source={require('@assets/images/compair.png')}
                style={styles.compairIcon}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabArea}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'Buy' && styles.activeTab,
              activeTab === 'Sell' && styles.inactiveTab,
            ]}
            onPress={() => setActiveTab('Buy')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Buy' && styles.activeTabText,
              ]}
            >
              Buy
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'Sell' && styles.activeTab,
              activeTab === 'Buy' && styles.inactiveTab,
            ]}
            onPress={() => setActiveTab('Sell')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Sell' && styles.activeTabText,
              ]}
            >
              Sell
            </Text>
          </TouchableOpacity>
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
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TradeScreen;
