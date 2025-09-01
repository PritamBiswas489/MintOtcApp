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
    // marginBottom: SW(15),
    width: SW(280),
    marginRight: SW(10),
  },

  balanceItemBox: {
    backgroundColor: appColors.white,
    marginBottom: SW(10),
  },
  bodyTopInner: {
    paddingLeft: SW(20),
    paddingBottom: SW(15),
  },

  balanceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SH(10),
    paddingHorizontal: SW(20),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    // backgroundColor: appColors.DarkBg,
  },
  balanceDetails: {
    paddingHorizontal: SW(20),
    paddingVertical: SH(5),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    // backgroundColor: appColors.DarkBg,
  },
  currencyText: {
    color: appColors.white,
    fontSize: SW(16),
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
  },
  valueText: {
    color: appColors.darkTheme,
    fontSize: SF(20),
    fontFamily: appFonts.PoppinsSemiBold,
    marginTop: SW(5),
  },
  valueTextBottom: {
    color: appColors.darkTheme,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsSemiBold,
    // marginTop: SW(5),
  },

  labelText: {
    color: appColors.lightGray,
  },
  buttonText: {
    color: appColors.lightGray,
    padding: SW(5),
  },
  indicator: {
    width: SW(10),
    height: SW(10),
    borderRadius: SW(5),
    marginRight: SW(5),
  },
});

export default styles;
