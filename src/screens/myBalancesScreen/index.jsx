import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import EyeIcon from '@src/assets/images/eye.svg';
import { SW, SH, SF } from '@src/theme/dimensions';
import Try from '@src/assets/images/balance/try.svg';
import Usdt from '@src/assets/images/balance/usdt.svg';
import Btc from '@src/assets/images/balance/btc.svg';
import Eth from '@src/assets/images/balance/eth.svg';

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
      available: '0.00',
      frozen: '0.00',
      image: Try,
    },
    {
      id: '2',
      currency: 'USDT',
      available: '161.155410',
      frozen: '10000.000000',
      image: Usdt,
    },
    {
      id: '3',
      currency: 'BTC',
      available: '2.372933',
      frozen: '0.00000',
      image: Btc,
    },
    {
      id: '4',
      currency: 'ETH',
      available: '0.00',
      frozen: '0.00',
      image: Eth,
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
      <View style={styles.cardBg}>
        <Image
          source={require('@assets/images/balance/bg.png')}
          style={styles.menuIcon}
          resizeMode="cover"
        />
      </View>
    </View>
  );

  const renderBalanceItem = ({ item }) => (
    <View style={styles.balanceItemBox}>
      <View style={styles.balanceItem}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <item.image width={24} height={24} />
          <Text style={styles.currencyText}>{item.currency}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={styles.lightButton}>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lightButton}>
            <Text style={styles.buttonText}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.balanceDetails}>
        <View style={styles.balanceDetailsInner}>
          <Text style={styles.labelText}>Available</Text>
          <Text style={styles.valueText}>{item.available}</Text>
        </View>
        <View style={styles.balanceDetailsInner}>
          <Text style={styles.labelText}>Frozen</Text>
          <Text style={styles.valueText}>{item.frozen}</Text>
        </View>
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
        <View style={styles.bodyBottomInner}>
          <FlatList
            data={balanceData}
            renderItem={renderBalanceItem}
            keyExtractor={item => item.id}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: SH(20) }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyBalancesScreen;
