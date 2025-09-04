import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import { SW } from '@src/theme/dimensions';
import FromTo from '@src/assets/images/from-to.svg';

const TransferEachOtherScreen = () => {
  const [activeCurrency, setActiveCurrency] = useState('USDT');
  const [amount, setAmount] = useState('');

  const currencyData = [
    { id: '1', name: 'TRY' },
    { id: '2', name: 'USDT' },
    { id: '3', name: 'BTC' },
    { id: '4', name: 'ETH' },
    { id: '5', name: 'HT' },
    { id: '6', name: 'EOS' },
    { id: '7', name: 'BCH' },
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

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.topArea}>
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
            <Text style={styles.title}>Transfer each other</Text>
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
        {/* From - To Card */}
        <View style={styles.transferCard}>
          <FromTo width={40} height={40} />
          <View style={styles.transferDetails}>
            <View style={styles.transferDetailsTop}>
              <Text style={styles.fromText}>from OTC</Text>
              <Text style={styles.fromValue}>161.155401 USDT</Text>
            </View>
            <View style={styles.transferDetailsBottom}>
              <Text style={styles.toText}>to PrimoPay</Text>
              <Text style={styles.toValue}>146804.457749 USDT</Text>
            </View>
          </View>
        </View>

        <Text style={styles.freeText}>Free for transfering</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Please enter amount"
            placeholderTextColor={appColors.gray}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
          <TouchableOpacity onPress={() => setAmount('161.155401')}>
            <Text style={styles.allText}>All</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.volumeText}>Total Volume: 161.155401 USDT</Text>
      </View>
      <TouchableOpacity style={styles.confirmBtn}>
        <Text style={styles.confirmBtnText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TransferEachOtherScreen;
