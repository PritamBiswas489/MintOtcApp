import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.boxBg,
    paddingBottom: SH(10),
  },
  header: {
    paddingHorizontal: SW(20),
    paddingTop: SH(30),
    paddingBottom: SH(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: appColors.DarkBg,
    borderBottomLeftRadius: SH(30),
    borderBottomRightRadius: SH(30),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: SF(14),
    color: appColors.white,
    fontFamily: appFonts.PoppinsSemiBold,
    marginRight: SW(15),
    opacity: 0.5,
  },
  title: {
    fontSize: SF(18),
    color: appColors.white,
    fontFamily: appFonts.PoppinsSemiBold,
    marginLeft: SW(10),
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SH(20),
  },
  timerSegment: {
    // backgroundColor: '#00C4CC',
    borderRadius: SW(8),
    // paddingVertical: SH(10),
    // paddingHorizontal: SW(15),
    marginHorizontal: SW(5),
    position: 'relative',
    width: SW(80),
  },
  topBg: {
    height: '48%',
    width: SW(80),
    borderRadius: 10,
    backgroundColor: appColors.secondary,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  btmBg: {
    height: '48%',
    width: SW(80),
    borderRadius: 10,
    backgroundColor: appColors.secondary,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  timerDigit: {
    fontSize: SF(50),
    color: appColors.white,
    fontFamily: appFonts.PoppinsMedium,
    textAlign: 'center',
    lineHeight: SW(60),
  },
  timerColon: {
    fontSize: SF(30),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsBold,
    marginHorizontal: SW(5),
  },
  body: {
    flex: 1,
    paddingVertical: SH(20),
    paddingHorizontal: SW(20),
    backgroundColor: appColors.boxBg,
  },
  bodyInner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  buyButton: {
    marginBottom: SH(20),
  },
  titleText: {
    color: appColors.darkText,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsBold,
    textAlign: 'center',
  },

  infoText: {
    color: appColors.bodyText_2,
    fontSize: SF(12),
    fontFamily: appFonts.PoppinsMedium,
    textAlign: 'center',
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SH(8),
    paddingVertical: SW(12),
    paddingHorizontal: SW(15),
    backgroundColor: appColors.white,
    borderRadius: SW(8),
  },
  label: {
    color: appColors.SubText,
    fontSize: SF(15),
    fontFamily: appFonts.PoppinsMedium,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    color: appColors.darkText,
    fontSize: SF(15),
    fontFamily: appFonts.PoppinsSemiBold,
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  submitButton: {
    backgroundColor: appColors.bodyText_2,
    paddingVertical: SW(12),
    borderRadius: SW(12),
    alignItems: 'center',
    marginTop: SW(12),
    width: '70%',
  },
  submitText: {
    color: '#fff',
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsSemiBold,
  },
});

export default styles;
