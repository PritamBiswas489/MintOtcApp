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

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  const banners = [
    {
      id: '1',
      text: 'TRADE WITH EASE',
      image: require('@assets/images/home/ban-1.png'),
    },
    {
      id: '2',
      text: 'BUY & SELL CRYPTO IN MINUTES',
      image: require('@assets/images/home/ban-2.png'),
    },
  ];

  const realTimeMarkets = [
    {
      id: '1',
      pair: 'BNB / BUSD',
      change: '+8.5%',
      price: '362.6',
      darkColor: appColors.darkText,
      color: appColors.green,
      image: require('@assets/images/home/chart-1.png'),
    },
    {
      id: '2',
      pair: 'LUNA / BUSD',
      change: '-4.4%',
      price: '362.6',
      color: '#FF0000',
      image: require('@assets/images/home/chart-2.png'),
    },

    {
      id: '3',
      pair: 'Puma / BUSD',
      change: '-4.4%',
      price: '362.6',
      color: '#b040f1',
      image: require('@assets/images/home/chart-3.png'),
    },
  ];

  const otcMarkets = [
    { id: '1', coin: 'USDT', buy: '7.87', sell: '7.80' },
    { id: '2', coin: 'BTC', buy: '346212.70', sell: '323098.21' },
    { id: '3', coin: 'OMG', buy: '7.87', sell: '7.80' },
    { id: '4', coin: 'MEME', buy: '12.70', sell: '98.21' },
    { id: '5', coin: 'Bam', buy: '21.70', sell: '38.21' },
  ];

  const renderBanner = ({ item }) => (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>{item.text}</Text>
      <Image
        source={item.image}
        style={styles.bannerImage}
        resizeMode="contain"
      />
    </View>
  );

  const renderRealTimeMarket = ({ item }) => (
    <View style={styles.marketItem}>
      <View style={styles.rowJustify}>
        <Text style={[styles.marketText, { color: item.darkColor }]}>
          {item.pair}
        </Text>
        <Text style={[styles.marketTextPersent, { color: item.color }]}>
          {item.change}
        </Text>
      </View>

      <Image source={item.image} style={styles.chatrImg} resizeMode="cover" />
      <View style={styles.rowJustify}>
        <Text style={styles.listPrice}>Last Price</Text>
        <Text style={styles.marketPrice}>{item.price}</Text>
      </View>
    </View>
  );

  // const renderOTCMarket = ({ item }) => (
  //   <View style={styles.otcItem}>
  //     <Text style={styles.otcCoin}>{item.coin}</Text>
  //     <Text style={styles.otcPrice}>{item.buy}</Text>
  //     <Text style={styles.otcPrice}>{item.sell}</Text>
  //   </View>
  // );

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.topArea}>
        <View style={styles.heading}>
          <TouchableOpacity style={styles.image}>
            <Text style={styles.name}>DK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <VectorIcon
              icon="Feather"
              size={24}
              name="bell"
              color={appColors.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bannerArea}>
          <FlatList
            data={banners}
            renderItem={renderBanner}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={e => {
              const slide = Math.round(
                e.nativeEvent.contentOffset.x / windowWidth,
              );
              setCurrentSlide(slide);
            }}
            style={styles.bannerContainer}
          />
          <View style={styles.pagination}>
            {banners.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, currentSlide === index && styles.activeDot]}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyTopInner}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Image
                source={require('@assets/images/home/balance.png')}
                style={styles.menuIcon}
                resizeMode="cover"
              />
              <Text style={styles.menuText}>My Balance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Image
                source={require('@assets/images/home/news.png')}
                style={styles.menuIcon}
                resizeMode="cover"
              />
              <Text style={styles.menuText}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Image
                source={require('@assets/images/home/faq.png')}
                style={styles.menuIcon}
                resizeMode="cover"
              />
              <Text style={styles.menuText}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Image
                source={require('@assets/images/home/support.png')}
                style={styles.menuIcon}
                resizeMode="cover"
              />
              <Text style={styles.menuText}>Support</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false} // hides vertical scrollbar
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.marketSection}>
            <Text style={styles.sectionTitle}>Real Time Markets</Text>
            <FlatList
              data={realTimeMarkets}
              renderItem={renderRealTimeMarket}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.marketList}
            />
          </View>

          <View style={styles.otcSection}>
            <Text style={styles.otcTitle}>OTC Markets</Text>
            <View style={styles.otcHeader}>
              <Text style={styles.headerText}>Coin</Text>
              <Text style={[styles.headerText, styles.alignCenter]}>
                Buy 1 (JPY)
              </Text>
              <Text style={[styles.headerText, styles.alignRight]}>
                Sell 1 (JPY)
              </Text>
            </View>

            {/* Data Rows */}
            {otcMarkets.map(item => (
              <View key={item.id} style={styles.otcItem}>
                <Text style={styles.otcCoin}>{item.coin}</Text>
                <Text
                  style={[
                    styles.otcPrice,
                    styles.alignCenter,
                    { color: 'green' },
                  ]}
                >
                  {item.buy}
                </Text>
                <Text
                  style={[
                    styles.sellPrice,
                    styles.alignRight,
                    { color: 'red' },
                  ]}
                >
                  {item.sell}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
