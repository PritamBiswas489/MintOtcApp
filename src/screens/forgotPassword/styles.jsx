import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { StyleSheet } from 'react-native';
import { SW, SH, SF } from '@src/theme/dimensions';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingVertical: SW(30),
    paddingHorizontal: SW(20),
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: appColors.white,
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.white,
    borderRadius: 30,
    padding: 6,
    marginBottom: SH(40),
    elevation: 6,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SH(10),
    borderRadius: SW(30),
  },
  tabText: {
    fontSize: SF(14),
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
    backgroundColor: appColors.textInput_2,
    borderRadius: SW(30),
    paddingHorizontal: SW(20),
    paddingVertical: SH(16),
    marginBottom: SW(25),
    fontSize: SF(13),
    fontFamily: appFonts.PoppinsRegular,
    color: appColors.darkText,
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
});

export default styles;
