import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  header: {
    paddingHorizontal: SW(20),
    paddingTop: SH(30),
    paddingBottom: SH(30),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.DarkBg,
    borderBottomLeftRadius: SH(30),
    borderBottomRightRadius: SH(30),
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
    backgroundColor: appColors.boxBg,
  },

  bodyInner: {
    paddingVertical: SH(20),
    paddingHorizontal: SW(25),
    backgroundColor: appColors.white,
    marginBottom: SH(10),
  },
  label: {
    fontFamily: appFonts.PoppinsMedium,
    color: appColors.bodyText,
    fontSize: SF(14),
    marginBottom: SH(5),
  },
  value: {
    fontFamily: appFonts.PoppinsSemiBold,
    color: appColors.darkText,
    fontSize: SF(16),
  },
});

export default styles;
