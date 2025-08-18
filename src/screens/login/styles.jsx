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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.white,
    borderRadius: 30,
    padding: 6,
    marginBottom: 20,
    elevation: 6,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 30,
  },
  tabText: {
    fontSize: 14,
    color: appColors.bodyText,
    fontFamily: appFonts.PoppinsMedium,
  },
  activeTab: {
    backgroundColor: appColors.DarkPrimary,
  },
  activeTabText: {
    color: appColors.white,
  },
  input: {
    borderWidth: 1,
    borderColor: appColors.stroke,
    backgroundColor: appColors.white,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 15,
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
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 18,
    color: appColors.darkText,
  },
  forgotWrap: {
    alignSelf: 'flex-end',
    marginBottom: 30,
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
    textDecorationLine: 'underline', // <--- this is required
    textDecorationColor: appColors.DarkPrimary,
    textDecorationStyle: 'solid',
  },
});

export default styles;
