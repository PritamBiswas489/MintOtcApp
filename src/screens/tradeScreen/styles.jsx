import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  topArea: {
    paddingHorizontal: SH(12),
    paddingVertical: SH(18),
    backgroundColor: appColors.DarkBg,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SH(15),
  },
  image: {
    backgroundColor: appColors.primary,
    height: SW(40),
    width: SW(40),
    borderRadius: SW(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: appColors.DarkBg,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsBold,
  },
  rightIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    padding: SW(5),
  },
  compairIcon: {
    width: SW(18),
    height: SW(18),
  },
  compair: {
    marginLeft: SW(10),
  },
  body: {
    flex: 1,
    borderTopLeftRadius: SW(30),
    borderTopRightRadius: SW(30),
    position: 'relative',
  },
  bodyBg: {
    position: 'absolute',
    width: '100%',
    height: SH(100),
    top: 0,
    left: 0,
    backgroundColor: appColors.DarkBg,
  },
  // Tab styles
  tabArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SH(15),
    borderColor: appColors.stroke,
    borderWidth: SW(1),
    padding: SW(5),
    borderRadius: 30,
  },
  tab: {
    paddingVertical: SH(12),
    paddingHorizontal: SW(25),
    borderRadius: SW(20),
    width: '50%',
  },
  activeTab: {
    backgroundColor: appColors.primary,
  },
  inactiveTab: {},
  tabText: {
    color: appColors.white,
    fontSize: SF(16),
    fontFamily: appFonts.medium,
    textAlign: 'center',
  },

  activeTabText: {
    color: appColors.darkText,
  },
  // Currency FlatList styles
  flatListArea: {
    // marginBottom: SH(15),
  },
  currencyItem: {
    paddingHorizontal: SW(12),
    paddingVertical: SH(8),
    marginRight: SW(10),
  },
  activeCurrencyItem: {
    borderBottomWidth: 2,
    borderBottomColor: appColors.primary,
  },
  currencyText: {
    color: appColors.white,
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsMedium,
    opacity: 0.5,
  },

  activeCurrencyText: {
    opacity: 1,
  },
  // Barmanji card styles
  scrollContent: {
    paddingBottom: SH(20),
    paddingHorizontal: SW(15),
  },
  barmanjiCard: {
    backgroundColor: appColors.white,
    padding: SH(15),
    borderRadius: SW(10),
    marginBottom: SH(15),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  barmanjiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SH(10),
    borderBottomColor: appColors.cardBG,
    borderBottomWidth: 1,
    paddingBottom: SW(5),
  },
  barmanjiName: {
    fontSize: SF(16),
    color: appColors.black,
    fontFamily: appFonts.medium,
    marginRight: SW(5),
  },
  tradeInfo: {
    fontSize: SF(12),
    color: '#666666',
    fontFamily: appFonts.regular,
    marginLeft: SW(5),
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: SF(18),
    color: appColors.black,
    fontFamily: appFonts.PoppinsSemiBold,
    marginBottom: SH(5),
  },
  limitsText: {
    fontSize: SF(14),
    color: appColors.bodyText,
    fontFamily: appFonts.PoppinsRegular,
    marginBottom: SH(5),
  },
  volumeText: {
    fontSize: SF(14),
    color: appColors.bodyText,
    fontFamily: appFonts.PoppinsRegular,
    marginBottom: SH(10),
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SH(10),
  },
  buyButton: {
    backgroundColor: appColors.DarkBg,
    paddingVertical: SH(8),
    paddingHorizontal: SW(25),
    borderRadius: SW(5),
    alignItems: 'center',
  },
  buyButtonText: {
    color: appColors.white,
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsMedium,
  },
});

export default styles;
