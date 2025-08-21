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
    fontFamily: appFonts.medium,
    marginLeft: SW(10),
  },
  body: {
    flex: 1,
    paddingVertical: SH(20),
    // paddingHorizontal: SW(20),
    backgroundColor: appColors.boxBg,
  },
  // New styles for FAQ items
  faqItem: {
    marginBottom: SH(10),
    backgroundColor: appColors.white,
    padding: SH(15),
    elevation: 8,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  faqQuestionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'top',
    paddingLeft: SW(25),
  },
  bullet: {
    position: 'absolute',
    left: 0,
    top: SW(3),
    width: SW(16),
    height: SW(16),
  },
  faqQuestion: {
    fontSize: SF(16),
    color: appColors.black,
    fontFamily: appFonts.PoppinsSemiBold,
    flex: 1,
    paddingRight: SW(8),
  },
  faqAnswerWrap: {
    paddingHorizontal: SW(25),
  },
  faqAnswer: {
    fontSize: SF(14),
    color: appColors.grey,
    fontFamily: appFonts.PoppinsRegular,
    marginTop: SH(10),
    lineHeight: SH(20),
  },
});

export default styles;
