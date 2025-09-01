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
    paddingBottom: SW(10),
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
    alignItems: 'flex-start',
  },
  priceText: {
    fontSize: SF(18),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  limitsText: {
    fontSize: SF(14),
    color: appColors.bodyText,
    fontFamily: appFonts.PoppinsRegular,
    marginBottom: SH(3),
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
    color: appColors.bodyText_2,
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsMedium,
  },
  // Bottom Sheet Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheetContainer: {
    backgroundColor: appColors.white,
    borderTopLeftRadius: SW(20),
    borderTopRightRadius: SW(20),
    paddingVertical: SW(20),
    maxHeight: SH(600),
  },
  closeButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: SW(15),
    right: SW(15),
  },
  bottomSheetContent: {
    // paddingTop: SH(10),
  },
  currencyHeader: {
    flexDirection: 'row',
    marginBottom: SH(10),
    paddingHorizontal: SW(20),
  },
  currencyIcon: {
    width: SW(24),
    height: SW(24),
    marginRight: SW(10),
  },
  currencyTitle: {
    fontSize: SF(18),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  currencyTitleColor: {
    fontSize: SF(18),
    color: appColors.secondary,
    fontFamily: appFonts.PoppinsSemiBold,
  },

  paymentOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SH(15),
  },
  paymentIcon: {
    marginRight: SW(5),
  },
  paymentText: {
    fontSize: SF(14),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
    marginRight: SW(14),
  },
  amountReceive: {
    backgroundColor: appColors.lightBg,
    paddingRight: SW(20),
    paddingLeft: SW(60),
    paddingTop: SH(10),
    position: 'relative',
  },
  clickCircelArea: {
    position: 'absolute',
    left: SW(20),
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickCircel: {
    // position: 'absolute',
    // top: '50%',
    width: SW(30),
    height: SW(30),
    backgroundColor: appColors.DarkPrimary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SW(30),
    borderWidth: 3,
    borderColor: appColors.lightBg,
  },
  clickCircelLine: {
    backgroundColor: appColors.lightGray,
    height: '70%',
    width: 1,
    position: 'absolute',
  },
  inputContainer: {
    marginBottom: SH(15),
  },
  inputLabel: {
    fontSize: SF(14),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsMedium,
    marginBottom: SH(5),
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SW(10),
    backgroundColor: appColors.white,
    borderRadius: SW(8),
  },
  input: {
    flex: 1,
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsRegular,
    padding: 0,
  },
  jpayAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputCurrency: {
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsMedium,
    paddingRight: SW(10),
    lineHeight: SW(16),
    borderRightColor: appColors.darkSubText,
    borderRightWidth: 1,
  },
  inputAll: {
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsMedium,
    color: appColors.secondary,

    paddingLeft: SW(5),
    lineHeight: SW(16),
  },
  inputusdt: {
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsMedium,
  },

  sheetBottom: {
    padding: SW(20),
  },
  transactionRule: {
    fontSize: SF(12),
    color: appColors.bodyText,
    fontFamily: appFonts.PoppinsRegular,
    marginBottom: SH(5),
  },
  transactionRulesTitle: {
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
    marginBottom: SH(5),
  },
  submitButton: {
    backgroundColor: appColors.DarkBg,
    paddingVertical: SH(15),
    borderRadius: SW(10),
    alignItems: 'center',
    marginTop: SH(20),
  },
  submitButtonText: {
    color: appColors.white,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsSemiBold,
  },
});

export default styles;
