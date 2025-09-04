import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.boxBg,
  },

  body: {
    flex: 1,
    paddingVertical: SH(20),
    paddingHorizontal: SW(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsBold,
    marginTop: SW(20),
    marginBottom: SW(5),
    color: appColors.darkText,
  },
  subTitle: {
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsRegular,
    color: appColors.bodyText,
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
