import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingVertical: SH(30),
    paddingHorizontal: SW(20),
  },
  backgroundImage: {
    // flex: 1,
    // flexGrow: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    //
  },
  heading: {
    marginBottom: SH(80),
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

  phNumber: {
    fontFamily: appFonts.PoppinsBold,
    fontSize: SF(12),
    color: appColors.darkText_2,
    marginLeft: SW(5),
  },

  titleNumber: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 40,
  },
  codeInput: {
    width: SW(46),
    height: SW(52),
    borderWidth: 1,
    borderColor: appColors.textInput_2,
    borderRadius: 8,
    fontSize: SF(18),
    fontFamily: appFonts.PoppinsRegular,
    backgroundColor: appColors.textInput_2,
  },
  activeInput: {
    borderColor: appColors.primary,
    backgroundColor: appColors.white,
    borderWidth: 1.5,
  },
  // resendText: {
  //   color: '#1E90FF',
  //   fontSize: 16,
  //   marginTop: 24,
  // },

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
});

export default styles;
