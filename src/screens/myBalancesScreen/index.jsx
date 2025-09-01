import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import EyeIcon from '@src/assets/images/eye.svg';
import { SW, SH, SF } from '@src/theme/dimensions';
import Check from '@src/assets/images/profile/check.svg';

const MyBalancesScreen = () => {
  const primoPayDataList = [
    {
      id: '1',
      items: [
        { id: '1-1', title: 'OTC Account', value: '' },
        { id: '1-2', title: 'Estimated Value', value: '2.774438 BTC' },
        { id: '1-3', title: '', value: '≈932,135.97 JPY' },
      ],
    },
    {
      id: '2',
      items: [
        { id: '2-1', title: 'OTC Account', value: '' },
        { id: '2-2', title: 'Estimated Value', value: '1.500000 BTC' },
        { id: '2-3', title: '', value: '≈500,000.00 JPY' },
      ],
    },
    {
      id: '3',
      items: [
        { id: '3-1', title: 'OTC Account', value: '' },
        { id: '3-2', title: 'Estimated Value', value: '0.800000 BTC' },
        { id: '3-3', title: '', value: '≈300,000.00 JPY' },
      ],
    },
  ];

  const balanceData = [
    {
      id: '1',
      currency: 'TRY',
      color: '#FF6B6B',
      available: '0.00',
      frozen: '0.00',
    },
    {
      id: '2',
      currency: 'USDT',
      color: '#4CAF50',
      available: '161.155410',
      frozen: '10000.000000',
    },
    {
      id: '3',
      currency: 'BTC',
      color: '#F2A900',
      available: '2.372933',
      frozen: '0.00000',
    },
    {
      id: '4',
      currency: 'ETH',
      color: '#6A1B9A',
      available: '0.00',
      frozen: '0.00',
    },
  ];

  const renderPrimoPayItem = ({ item }) => (
    <View style={{ marginBottom: SH(10) }}>
      {item.title === 'OTC Account' && (
        <Text style={styles.boxTitle}>PrimoPay</Text>
      )}
      {item.title && <Text style={styles.midTitle}>{item.title}</Text>}
      {item.value && item.title === 'Estimated Value' && (
        <Text style={styles.valueText}>{item.value}</Text>
      )}
      {item.value && item.title !== 'Estimated Value' && (
        <Text style={styles.valueTextBottom}>{item.value}</Text>
      )}
    </View>
  );

  const renderPrimoPayBox = ({ item }) => (
    <View style={styles.primoPayCard}>
      <FlatList
        data={item.items}
        renderItem={renderPrimoPayItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </View>
  );

  const renderBalanceItem = ({ item }) => (
    <View style={styles.balanceItemBox}>
      <View style={styles.balanceItem}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.indicator, { backgroundColor: item.color }]} />
          <Text style={styles.currencyText}>{item.currency}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.balanceDetails}>
        <Text style={styles.labelText}>Available</Text>
        <Text style={styles.valueText}>{item.available}</Text>
        <Text style={styles.labelText}>Frozen</Text>
        <Text style={styles.valueText}>{item.frozen}</Text>
      </View>
    </View>
  );

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
          <Text style={styles.title}>My Balances</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <EyeIcon style={styles.clickImg} height={26} width={26} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyTopInner}>
          <FlatList
            data={primoPayDataList}
            renderItem={renderPrimoPayBox}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0 }}
            contentContainerStyle={{
              paddingVertical: SH(10),
              paddingRight: SW(20),
            }}
          />
        </View>
        <FlatList
          data={balanceData}
          renderItem={renderBalanceItem}
          keyExtractor={item => item.id}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: SH(20) }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyBalancesScreen;
