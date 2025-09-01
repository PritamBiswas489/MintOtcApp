import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import ChatIcon from '@src/assets/images/Chat.svg';
import DiamondIcon from '@src/assets/images/diamond.svg';
import FpsIcon from '@src/assets/images/fps.svg';
import FileIcon from '@src/assets/images/file-copy.svg';
import { SW, SH } from '@src/theme/dimensions';

const WaitFoPaymentScreen = () => {
  const [time, setTime] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
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
          <Text style={styles.title}>Wait Fo Payment</Text>
        </View>
        <TouchableOpacity>
          <ChatIcon style={styles.clickImg} height={20} width={20} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false} // hides vertical scrollbar
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.body}>
          <View style={styles.timerContainer}>
            <View style={styles.timerSegment}>
              <View style={styles.topBg}></View>
              <View style={styles.btmBg}></View>
              <Text style={styles.timerDigit}>
                {formatTime(time).split(':')[0]}
              </Text>
            </View>
            <Text style={styles.timerColon}>:</Text>
            <View style={styles.timerSegment}>
              <View style={styles.topBg}></View>
              <View style={styles.btmBg}></View>
              <Text style={styles.timerDigit}>
                {formatTime(time).split(':')[1]}
              </Text>
            </View>
          </View>
          <View style={styles.buyButton}>
            <Text style={styles.titleText}>
              The counterparty is transferring
            </Text>
            <Text style={styles.infoText}>
              The advertiser has paid 2000 USDT security deposit.
            </Text>
          </View>

          <TouchableOpacity style={styles.detailRow}>
            <Text style={styles.label}>Seller</Text>
            <View style={styles.row}>
              <Text style={styles.value}>Barma nji</Text>
              <DiamondIcon
                width={16}
                height={16}
                style={{ marginHorizontal: SW(5) }}
              />
              <VectorIcon
                icon="FontAwesome6"
                size={16}
                name="angle-right"
                color={appColors.darkText}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Total</Text>
            <Text style={styles.value}>
              HK$500.00 <FileIcon width={16} height={16} />
            </Text>
          </View>
          <TouchableOpacity style={styles.detailRow}>
            <Text style={styles.label}>Patent</Text>
            <View style={styles.row}>
              <FpsIcon width={22} height={22} style={{ marginRight: SW(10) }} />
              <VectorIcon
                icon="FontAwesome6"
                size={16}
                name="angle-right"
                color={appColors.darkText}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Price</Text>
            <Text style={styles.value}>7.87 HKD / USDT</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Amount</Text>
            <Text style={styles.value}>63.532401 USDT</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Reference ID</Text>
            <Text style={styles.value}>
              967438 <FileIcon width={16} height={16} />
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Order</Text>
            <Text style={styles.value}>
              #956552010120347848 <FileIcon width={16} height={16} />
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Confirm to release</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WaitFoPaymentScreen;
