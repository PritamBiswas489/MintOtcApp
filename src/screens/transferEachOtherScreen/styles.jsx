import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.boxBg,
  },
  topArea: {
    paddingHorizontal: SW(20),
    paddingTop: SH(30),
    paddingBottom: SH(20),
    backgroundColor: appColors.DarkBg,
    borderBottomLeftRadius: SH(30),
    borderBottomRightRadius: SH(30),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SW(20),
  },
  headerLeft: {
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
  body: {
    flex: 1,
    paddingVertical: SH(20),
    paddingHorizontal: SW(20),
  },
  transferCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.white,
    borderRadius: SW(16),
    padding: SW(15),
    marginBottom: SH(20),
    borderColor: appColors.border_3,
    borderWidth: SW(1),
  },
  transferDetails: {
    marginLeft: SW(15),
    flex: 1,
  },
  transferDetailsTop: {
    paddingBottom: SW(8),
    marginBlock: SW(8),
    borderBottomColor: appColors.border_3,
    borderBottomWidth: SW(1),
  },
  fromText: {
    fontSize: SF(14),
    color: appColors.bodyText,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  fromValue: {
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
    // marginBottom: SH(10),
  },
  toText: {
    fontSize: SF(14),
    color: appColors.bodyText,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  toValue: {
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  freeText: {
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsSemiBold,
    color: appColors.DarkPrimary,
    marginBottom: SH(10),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.border,
    borderRadius: SW(30),
    paddingHorizontal: SW(20),
    marginBottom: SH(10),
    backgroundColor: appColors.white,
    paddingVertical: SH(8),
  },
  input: {
    flex: 1,
    fontSize: SF(14),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsRegular,
    paddingVertical: SH(8),
  },
  allText: {
    fontSize: SF(16),
    lineHeight: SW(14),
    color: appColors.secondary,
    fontFamily: appFonts.PoppinsSemiBold,
    borderLeftColor: appColors.secondary,
    borderLeftWidth: 1,
    paddingLeft: SW(10),
  },
  volumeText: {
    fontSize: SF(13),
    fontFamily: appFonts.PoppinsSemiBold,
    color: appColors.DarkPrimary,
    marginBottom: SH(20),
  },
  confirmBtn: {
    backgroundColor: appColors.DarkBg,
    borderRadius: SW(16),
    paddingVertical: SH(14),
    alignItems: 'center',
    marginHorizontal: SW(40),
    marginBottom: SH(15),
  },
  confirmBtnText: {
    fontSize: SF(16),
    color: appColors.white,
    fontFamily: appFonts.PoppinsSemiBold,
  },
});

export default styles;
