import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.boxBg,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SW(20),
    paddingTop: SH(30),
    paddingBottom: SH(30),
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
    paddingHorizontal: SW(20),
    // backgroundColor: appColors.boxBg,
  },
  bodyInner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  infoText: {
    color: appColors.error,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsSemiBold,
  },
  rowJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SW(5),
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SH(8),
    paddingVertical: SW(12),
    paddingHorizontal: SW(15),
    backgroundColor: appColors.white,
    borderRadius: SW(8),
  },
  label: {
    color: appColors.DarkPrimary,
    fontSize: SF(15),
    fontFamily: appFonts.PoppinsSemiBold,
    paddingHorizontal: SW(10),
  },
  download: {
    color: appColors.bodyText,
    fontSize: SF(13),
    fontFamily: appFonts.PoppinsMedium,
    marginLeft: 'auto',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  val: {
    color: appColors.SubText,
    fontSize: SF(15),
    fontFamily: appFonts.PoppinsMedium,
    marginLeft: 'auto',
    marginRight: SW(10),
  },
  arrowIcon: {
    marginLeft: 'auto',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cancelButton: {
    backgroundColor: appColors.white,
    paddingVertical: SW(12),
    borderRadius: SW(12),
    alignItems: 'center',
    marginTop: SW(12),
    width: '46%',
  },
  cancelText: {
    color: appColors.darkText,
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsSemiBold,
  },
  submitButton: {
    backgroundColor: appColors.DarkPrimary,
    paddingVertical: SW(12),
    borderRadius: SW(12),
    alignItems: 'center',
    marginTop: SW(12),
    width: '46%',
  },
  submitText: {
    color: '#fff',
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsSemiBold,
  },
  bodyInner: {
    marginBottom: SH(100),
  },
  logOut: {
    marginHorizontal: SW(50),
    backgroundColor: appColors.DarkPrimary,
    padding: SW(12),
    borderRadius: SW(16),
  },
  logOutText: {
    color: appColors.white,
    textAlign: 'center',
    fontFamily: appFonts.PoppinsSemiBold,
    fontSize: SF(13),
  },
});

export default styles;
