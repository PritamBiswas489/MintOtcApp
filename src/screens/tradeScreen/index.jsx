import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';

import Upi from '@src/assets/images/upi.svg';
import Imps from '@src/assets/images/imps.svg';
import Click from '@src/assets/images/clik.svg';

// ✅ import your custom svg icons
import DiamondIcon from '@src/assets/images/diamond.svg';
import CrownIcon from '@src/assets/images/crown.svg';

const TradeScreen = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('Buy');

  // State for active currency
  const [activeCurrency, setActiveCurrency] = useState('USDT');

  // State for bottom sheet visibility and input values
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [exchangeAmount, setExchangeAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');

  // State for the new OTC Security Reminder modal
  const [isOtcModalVisible, setIsOtcModalVisible] = useState(false);

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
      icon: 'diamond',
    },
    {
      id: '2',
      name: 'Barmanji',
      price: '78.07 INR',
      limits: '300,000.00 - 400,000.00 INR',
      volume: '7,000,000,000 USDT',
      icon: 'crown',
    },
    {
      id: '3',
      name: 'Barmanji',
      price: '78.07 INR',
      limits: '300,000.00 - 400,000.00 INR',
      volume: '7,000,000,000 USDT',
    },
    {
      id: '4',
      name: 'Barmanji',
      price: '78.07 INR',
      limits: '300,000.00 - 400,000.00 INR',
      volume: '7,000,000,000 USDT',
    },
  ];

  // ✅ map icons to SVG components
  const iconMap = {
    diamond: DiamondIcon,
    crown: CrownIcon,
  };

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
    const IconComponent = iconMap[item.icon];

    return (
      <View style={styles.barmanjiCard}>
        <View style={styles.barmanjiHeader}>
          <View style={styles.row}>
            <Text style={styles.barmanjiName}>{item.name}</Text>
            {IconComponent && <IconComponent width={18} height={18} />}
          </View>
          <Text style={styles.tradeInfo}>Trade 0 | Trade rate 0%</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.priceText}>{item.price}</Text>
          <View style={styles.iconRow}>
            <Upi style={styles.iconImg} height={20} width={20} />
            <Imps style={styles.iconImg} height={20} width={20} />
          </View>
        </View>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.limitsText}>{item.limits}</Text>
            <Text style={styles.volumeText}>{item.volume}</Text>
          </View>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => setIsBottomSheetVisible(true)}
          >
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.topArea}>
        <View style={styles.header}>
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

      {/* Bottom Sheet Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetVisible}
        onRequestClose={() => setIsBottomSheetVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheetContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsBottomSheetVisible(false)}
            >
              <VectorIcon
                name="x"
                icon="Feather"
                size={24}
                color={appColors.darkText}
              />
            </TouchableOpacity>
            <View style={styles.bottomSheetContent}>
              <View style={styles.currencyHeader}>
                <View>
                  <Image
                    source={require('@src/assets/images/bitcoin.png')}
                    style={styles.currencyIcon}
                    resizeMode="contain"
                  />
                </View>

                <View>
                  <Text style={styles.currencyTitle}>
                    Buy USDT{' '}
                    <Text style={styles.currencyTitleColor}>7.87 HKD</Text>
                  </Text>
                  <Text style={styles.limitsText}>
                    Limits 500.00 - 4,100.00 JPY
                  </Text>
                  <View style={styles.paymentOptions}>
                    <Upi style={styles.paymentIcon} height={20} width={20} />
                    <Text style={styles.paymentText}>FPS</Text>
                    <Upi style={styles.paymentIcon} height={20} width={20} />
                    <Text style={styles.paymentText}>UPI</Text>
                    <Imps style={styles.paymentIcon} height={20} width={20} />
                    <Text style={styles.paymentText}>IMPS</Text>
                  </View>
                </View>
              </View>
              <View style={styles.amountReceive}>
                <View style={styles.clickCircelArea}>
                  <View style={styles.clickCircelLine}></View>
                  <View style={styles.clickCircel}>
                    <Click style={styles.clickImg} height={14} width={14} />
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Amount to be exchange</Text>
                  <View style={styles.inputField}>
                    <TextInput
                      style={styles.input}
                      value={exchangeAmount}
                      onChangeText={setExchangeAmount}
                      placeholder="Maximum 410.00"
                      placeholderTextColor={appColors.bodyText}
                      keyboardType="numeric"
                    />
                    <View style={styles.jpayAll}>
                      <Text style={styles.inputCurrency}>JPY</Text>
                      <TouchableOpacity>
                        <Text style={styles.inputAll}> All</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Amount you receive</Text>
                  <View style={styles.inputField}>
                    <TextInput
                      style={styles.input}
                      value={receiveAmount}
                      onChangeText={setReceiveAmount}
                      placeholder="Maximum 520.96"
                      placeholderTextColor={appColors.bodyText}
                      keyboardType="numeric"
                    />
                    <Text style={styles.inputusdt}>USDT</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sheetBottom}>
                <Text style={styles.transactionRule}>
                  You have to pay to the seller within 15 mins
                </Text>
                <Text style={styles.transactionRulesTitle}>
                  Transaction rules with
                </Text>
                <Text style={styles.transactionRule}>
                  You have to pay to the seller within 15 mins
                </Text>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() => {
                    setIsBottomSheetVisible(false);
                    setIsOtcModalVisible(true);
                  }}
                >
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* PrimoPay OTC Security Reminder Modal */}
      <Modal
        animationType="slide"
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
            <View style={styles.bottomSheetContent}>
              <View style={styles.sheetBottom}>
                <Text style={styles.transactionRulesTitle}>
                  PrimoPay OTC Security Reminder
                </Text>
                <Text style={styles.transactionRule}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <View style={styles.rowCenter}>
                  <TouchableOpacity
                    style={[styles.submitButton, { width: '40%' }]}
                    onPress={() => setIsOtcModalVisible(false)}
                  >
                    <Text style={styles.submitButtonText}>Submit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.submitButton,
                      { backgroundColor: appColors.lightGray, width: '40%' },
                    ]}
                    onPress={() => setIsOtcModalVisible(false)}
                  >
                    <Text style={styles.buyButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TradeScreen;
