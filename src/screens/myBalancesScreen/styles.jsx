import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.boxBg,
  },
  headerWrap: {
    backgroundColor: appColors.white,
    borderBottomLeftRadius: SW(30),
    borderBottomRightRadius: SW(30),
    elevation: 8,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  header: {
    paddingHorizontal: SW(20),
    paddingTop: SH(30),
    paddingBottom: SH(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: appColors.DarkBg,
    borderBottomLeftRadius: SH(30),
    borderBottomRightRadius: SH(30),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: SF(14),
    color: appColors.white,
    fontFamily: appFonts.PoppinsSemiBold,
    marginRight: SW(15),
    opacity: 0.5,
  },
  title: {
    fontSize: SF(18),
    color: appColors.white,
    fontFamily: appFonts.PoppinsSemiBold,
    marginLeft: SW(10),
  },
  body: {
    flex: 1,
    paddingVertical: SH(20),
    // paddingHorizontal: SW(20),
  },
  primoPayCard: {
    backgroundColor: appColors.secondary,
    padding: SW(15),
    borderRadius: SW(10),
    width: SW(280),
    marginRight: SW(10),
    position: 'relative',
  },
  cardBg: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    opacity: 0.5,
  },

  balanceItemBox: {
    backgroundColor: appColors.white,
    marginBottom: SW(10),
    paddingVertical: SW(15),
  },
  bodyTopInner: {
    paddingLeft: SW(20),
    paddingBottom: SW(15),
  },
  bodyBottomInner: {
    flex: 1,
  },

  balanceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: SH(15),
    paddingHorizontal: SW(20),
    // backgroundColor: appColors.DarkBg,
  },
  balanceDetails: {
    paddingHorizontal: SW(20),
    marginTop: SW(15),
    // paddingVertical: SH(10),
    // backgroundColor: appColors.DarkBg,
  },
  balanceDetailsInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  currencyText: {
    fontFamily: appFonts.PoppinsBold,
    fontSize: SW(16),
    marginLeft: SW(10),
  },
  valueText: {
    color: appColors.white,
    fontSize: SW(16),
  },
  boxTitle: {
    fontSize: SF(22),
    fontFamily: appFonts.PoppinsBold,
    color: appColors.white,
    marginBottom: SH(10),
  },
  midTitle: {
    color: appColors.darkTheme,
    fontFamily: appFonts.PoppinsRegular,
    lineHeight: SF(16),
    // marginBottom: SH(10),
  },
  valueText: {
    color: appColors.darkTheme,
    fontSize: SF(20),
    fontFamily: appFonts.PoppinsSemiBold,
  },
  valueTextBottom: {
    color: appColors.darkTheme,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsSemiBold,
    // marginTop: SW(5),
  },

  labelText: {
    color: appColors.bodyText,
    fontFamily: appFonts.PoppinsMedium,
  },
  lightButton: {
    backgroundColor: appColors.lightBg,
    paddingHorizontal: SW(15),
    paddingVertical: SW(5),
    marginLeft: SW(10),
    borderRadius: SW(8),
  },
  buttonText: {
    color: appColors.DarkBg,
    fontFamily: appFonts.PoppinsSemiBold,
    fontSize: SF(14),
  },
  indicator: {
    width: SW(10),
    height: SW(10),
    borderRadius: SW(5),
    marginRight: SW(5),
  },
});

export default styles;
