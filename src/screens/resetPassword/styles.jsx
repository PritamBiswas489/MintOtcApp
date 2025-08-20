import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { StyleSheet } from 'react-native';
import { SW, SH, SF } from '@src/theme/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    paddingTop: 0,
    //
  },

  body: {
    flex: 1,
    paddingVertical: SW(30),
    paddingHorizontal: SW(20),
  },
  backgroundImage: {
    // flex: 1,
    // flexGrow: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },

  heading: {
    marginBottom: SH(70),
  },

  title: {
    fontSize: SF(20),
    fontFamily: appFonts.PoppinsSemiBold,
    color: '#0c223f',
  },
  subtitle: {
    fontFamily: appFonts.PoppinsMedium,
    fontSize: SF(12),
    color: appColors.darkSubText,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.textInput_2,
    borderRadius: SW(30),
    paddingHorizontal: SW(20),
    marginBottom: SH(16),
  },
  passwordInput: {
    flex: 1,
    fontSize: SF(13),
    paddingVertical: SH(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsRegular,
  },

  errorMsg: {
    fontSize: SF(11),
    color: appColors.error,
    marginTop: SH(-10),
    fontFamily: appFonts.PoppinsRegular,
  },
  signInBtn: {
    backgroundColor: appColors.DarkPrimary,
    borderRadius: 16,
    paddingVertical: SH(12),
    alignItems: 'center',
    marginBottom: SH(30),
  },
  signInText: {
    color: appColors.white,
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsMedium,
  },
  footer: {
    paddingHorizontal: SW(30),
    paddingVertical: SH(12),
  },
  footerBottom: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notMember: {
    color: appColors.DarkPrimary,
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsSemiBold,
  },
  registerText: {
    color: appColors.DarkPrimary,
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsSemiBold,
    textDecorationLine: 'underline',
    textDecorationColor: appColors.DarkPrimary,
    textDecorationStyle: 'solid',
  },

  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    width: SW(20),
    height: SW(20),
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: appColors.DarkPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SW(10),
    backgroundColor: appColors.white,
  },
  checked: {
    backgroundColor: appColors.DarkPrimary,
  },
  label: {
    fontSize: SF(12),
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  bold: {
    // fontWeight: '600',
  },
});

export default styles;
