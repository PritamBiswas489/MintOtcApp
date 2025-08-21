import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';

const FaqScreen = () => {
  const categories = [
    {
      icon: require('@src/assets/images/faq/general.png'),
      title: 'General Questions',
    },
    { icon: require('@src/assets/images/faq/market.png'), title: 'P2P Market' },
    {
      icon: require('@src/assets/images/faq/registration.png'),
      title: 'Registration & Membership',
    },
    { icon: require('@src/assets/images/faq/security.png'), title: 'Security' },
    {
      icon: require('@src/assets/images/faq/transactions.png'),
      title: 'Transactions',
    },
    { icon: require('@src/assets/images/faq/wallets.png'), title: 'Wallets' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity>
          <VectorIcon
            icon="Ionicons"
            name="arrow-back"
            size={20}
            color={appColors.white}
          />
        </TouchableOpacity>
        <Text style={styles.title}>FAQ</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyInner}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <View style={styles.iconCircle}>
                <Image
                  source={category.icon}
                  style={styles.categoryIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.categoryText}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FaqScreen;
