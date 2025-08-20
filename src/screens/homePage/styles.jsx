import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D1A',
  },
  topArea: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#0D0D1A',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    backgroundColor: '#00D4FF',
    height: 32,
    width: 32,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationIcon: {
    padding: 5,
  },
  bellIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  body: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopLeftRadius: SW(30),
    borderTopRightRadius: SW(30),
    backgroundColor: appColors.lightBg,
  },
  bannerContainer: {
    height: 100,
    marginBottom: 10,
  },
  banner: {
    width: Dimensions.get('window').width - 30,
    backgroundColor: '#00D4FF',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flexGrow: 1,
  },
  bannerImage: {
    width: SW(150),
    height: SW(150),
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 12,
    height: 12,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuIcon: {
    width: SW(54),
    height: SW(54),
    // tintColor: '#FFFFFF',
  },
  menuText: {
    color: appColors.darkText,
    fontSize: SF(12),
    fontFamily: appFonts.PoppinsMedium,
    textAlign: 'center',
    marginTop: SH(5),
  },
  marketSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  marketItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A1A2E',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  marketText: {
    fontSize: 14,
  },
  marketPrice: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  marketList: {
    height: 60, // Fixed height for horizontal scroll
  },
  otcSection: {
    backgroundColor: '#1A1A2E',
    padding: 10,
    borderRadius: 5,
  },
  otcItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  otcCoin: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  otcPrice: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  otcList: {},
});

export default styles;
