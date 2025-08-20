import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#f00',
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
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: appFonts.PoppinsBold,
    color: '#0c223f',
  },
  subtitle: {
    fontFamily: appFonts.PoppinsMedium,
    fontSize: 14,
    color: '#777',
    marginBottom: 40,
  },

  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 40,
  },
  codeInput: {
    width: 52,
    height: 60,
    borderWidth: 1,
    borderColor: appColors.textInput_2,
    borderRadius: 8,
    fontSize: 18,
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
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 40,
  },
  signInText: {
    color: appColors.white,
    fontSize: 16,
    fontFamily: appFonts.PoppinsMedium,
  },
  footer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  footerBottom: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notMember: {
    color: appColors.DarkPrimary,
    fontSize: 16,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  registerText: {
    color: appColors.DarkPrimary,
    fontSize: 16,
    fontFamily: appFonts.PoppinsSemiBold,
    textDecorationLine: 'underline', // <--- this is required
    textDecorationColor: appColors.DarkPrimary,
    textDecorationStyle: 'solid',
  },
});

export default styles;
