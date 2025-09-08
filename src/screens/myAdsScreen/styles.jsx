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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SH(15),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: SF(18),
    color: appColors.white,
    marginLeft: SW(10),
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
  scrollContent: {
    flex: 1,
  },
  flatListArea: {},
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  barmanjiName: {
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
    marginRight: SW(5),
  },
  titleLetter: {
    fontSize: SF(16),
    color: appColors.white,
    fontFamily: appFonts.PoppinsSemiBold,
    marginRight: SW(10),
    width: SW(30),
    height: SW(30),
    backgroundColor: appColors.DarkPrimary,
    borderRadius: SW(10),
    textAlign: 'center',
    lineHeight: SW(30),
  },
  tradeInfo: {
    fontSize: SF(12),
    color: '#666666',
    fontFamily: appFonts.PoppinsRegular,
    marginLeft: SW(5),
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: SF(18),
    color: appColors.darkText,
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
  iconImg: {
    marginLeft: SW(8),
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
  dropdown: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: appColors.sheetBg,
    borderRadius: SW(5),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 10,
  },
  dropdownItem: {
    paddingHorizontal: SW(20),
    paddingVertical: SW(10),
    borderBottomWidth: 1,
    borderBottomColor: appColors.stroke,
  },
  dropdownText: {
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.6)',
    zIndex: -1,
  },
});

export default styles;
