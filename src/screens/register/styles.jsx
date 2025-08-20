import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    paddingTop: 0,
    //
  },

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
    top: 0,
  },

  title: {
    fontSize: 22,
    fontFamily: appFonts.PoppinsBold,
    marginTop: 10,
    color: '#0c223f',
  },
  subtitle: {
    fontFamily: appFonts.PoppinsMedium,
    fontSize: 14,
    color: '#777',
    marginBottom: 40,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 80,
  },
  headingLeft: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.DarkPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: appColors.grey,
  },
  headingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  input: {
    borderWidth: 1,
    borderColor: appColors.stroke,
    backgroundColor: appColors.white,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 22,
    fontSize: 14,
    color: appColors.darkText,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.stroke,
    backgroundColor: appColors.white,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 22,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 18,
    color: appColors.darkText,
  },

  forgotText: {
    fontSize: 13,
    color: appColors.darkText,
  },
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
    width: 26,
    height: 26,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: appColors.DarkPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: appColors.white,
  },
  checked: {
    backgroundColor: appColors.DarkPrimary,
  },
  label: {
    fontSize: 14,
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  bold: {
    // fontWeight: '600',
  },
});

export default styles;
