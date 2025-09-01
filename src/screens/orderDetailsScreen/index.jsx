import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import ChatIcon from '@src/assets/images/Chat.svg';
import DiamondIcon from '@src/assets/images/diamond.svg';
import { SW } from '@src/theme/dimensions';

const OrderDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.headerWrap}>
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
            <Text style={styles.title}>Order Details</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity>
              <ChatIcon style={styles.clickImg} height={20} width={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topArea}>
          <View style={styles.rowJustify}>
            <View style={styles.buyButton}>
              <Text style={styles.buyText}>Barmanji</Text>
              <DiamondIcon
                width={16}
                height={16}
                style={{ marginHorizontal: SW(5) }}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.infoText}>Sell USDT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.grid}>
            <View style={styles.col}>
              <Text style={styles.value}>223</Text>
              <Text style={styles.colLabel}>Trades</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.value}>93%</Text>
              <Text style={styles.colLabel}>Trades rate</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.value}>4.61</Text>
              <Text style={styles.colLabel}>Avg resp. (min)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.val}>2021-12-03</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Types</Text>
          <Text style={styles.val}>Limit</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Price</Text>
          <Text style={styles.val}>66,000.00</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.val}>0.0200000</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Executed</Text>
          <Text style={styles.val}>0.00000</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Unexecuted</Text>
          <Text style={styles.val}>65,249.53</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;
