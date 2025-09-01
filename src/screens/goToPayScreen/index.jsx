import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import ChatIcon from '@src/assets/images/Chat.svg';
import DiamondIcon from '@src/assets/images/diamond.svg';
import FpsIcon from '@src/assets/images/fps.svg';
import FileIcon from '@src/assets/images/file-copy.svg';
import ShildIcon from '@src/assets/images/shild.svg';
import { SW } from '@src/theme/dimensions';

const GoToPayScreen = () => {
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
          <Text style={styles.title}>Go To Pay</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.timeText}>14m 59s</Text>
          <TouchableOpacity>
            <ChatIcon style={styles.clickImg} height={20} width={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Buy USDT</Text>
          <Text style={styles.goToPayText}>Go to pay</Text>
        </TouchableOpacity>
        <View style={styles.infoBox}>
          <ShildIcon white={20} height={20} style={{ marginRight: SW(5) }} />
          <Text style={styles.infoText}>
            The advertiser has paid 2000 USDT security deposit.
          </Text>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <FpsIcon width={26} height={26} style={{ marginRight: SW(5) }} />
            <Text style={styles.label}>FPS</Text>
          </View>

          <VectorIcon
            icon="Ionicons"
            name="checkmark-circle"
            size={24}
            color={appColors.green}
          />
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GoToPayScreen;
