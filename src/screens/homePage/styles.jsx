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
    paddingHorizontal: SH(12),
    paddingVertical: SH(18),
    backgroundColor: '#0D0D1A',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SH(15),
  },
  image: {
    backgroundColor: '#00D4FF',
    height: SW(32),
    width: SW(32),
    borderRadius: SW(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: appColors.DarkPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationIcon: {
    padding: 5,
  },
  bellIcon: {
    width: SW(22),
    height: SW(22),
    // tintColor: '#FFFFFF',
  },
  body: {
    flex: 1,
    paddingTop: SH(30),
    borderTopLeftRadius: SW(30),
    borderTopRightRadius: SW(30),
    backgroundColor: appColors.lightBg,
  },
  bodyTopInner: {
    paddingHorizontal: SW(15),
  },

  bannerContainer: {
    // height: 100,
    marginBottom: 10,
  },
  banner: {
    width: Dimensions.get('window').width - SW(24),
    backgroundColor: '#00D4FF',
    // padding: 20,
    paddingHorizontal: SW(15),
    paddingVertical: SH(10),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerText: {
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsBold,
    fontSize: SF(23),
    maxWidth: '50%',
    width: '100%',
  },
  bannerImage: {
    width: SW(160),
    height: SW(125),
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: SW(10),
    height: SW(5),
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 4,
    backgroundColor: appColors.primary,
    opacity: 0.4,
  },
  activeDot: {
    opacity: 1,
    width: SW(16),
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
    fontSize: SF(13),
    fontFamily: appFonts.PoppinsSemiBold,
    textAlign: 'center',
    marginTop: SH(5),
  },
  marketSection: {
    marginBottom: SH(18),
    paddingLeft: SW(15),
  },
  sectionTitle: {
    color: appColors.DarkPrimary,
    fontSize: SF(18),
    fontFamily: appFonts.PoppinsSemiBold,
  },
  otcTitle: {
    color: appColors.DarkPrimary,
    fontSize: SF(18),
    fontFamily: appFonts.PoppinsSemiBold,
    marginBottom: SH(6),
  },
  marketItem: {
    backgroundColor: appColors.white,
    padding: SW(10),
    borderRadius: 8,
    marginRight: SW(8),
    elevation: 6,
    marginTop: SH(12),
    marginBottom: SH(12),
    width: SW(160),
  },
  rowJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  marketText: {
    fontSize: SF(10),
    fontFamily: appFonts.PoppinsSemiBold,
  },
  marketTextPersent: {
    fontSize: SF(11),
    fontFamily: appFonts.PoppinsSemiBold,
  },
  listPrice: {
    fontSize: SF(11),
    color: appColors.bodyText,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  marketPrice: {
    fontSize: SF(11),
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  chatrImg: {
    width: '100%',
    height: SH(89),
  },
  marketList: {
    // height: 60, // Fixed height for horizontal scroll
  },
  otcSection: {
    backgroundColor: appColors.white,
    padding: SW(15),
    borderTopLeftRadius: SW(30),
    borderTopRightRadius: SW(30),
  },

  otcHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerText: {
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsSemiBold,
    color: appColors.SubText,
    flex: 1,
  },
  alignRight: {
    textAlign: 'right',
  },
  alignCenter: {
    textAlign: 'center',
  },
  otcItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  otcCoin: {
    color: appColors.darkText,
    fontSize: SF(13),
    fontFamily: appFonts.PoppinsSemiBold,
    width: '33.3333%',
  },

  otcPrice: {
    fontSize: SF(13),
    fontFamily: appFonts.PoppinsSemiBold,
    width: '33.3333%',
    textAlign: 'center',
  },
  sellPrice: {
    width: '33.3333%',
    fontSize: SF(13),
    fontFamily: appFonts.PoppinsSemiBold,
  },
});

export default styles;
