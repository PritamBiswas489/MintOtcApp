import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.boxBg,
  },
  headerWrap: {
    backgroundColor: appColors.white,
    borderBottomLeftRadius: SW(30),
    borderBottomRightRadius: SW(30),
    elevation: 8,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
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
  col: {
    width: '31.5%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: '#F2F9FC',
    borderWidth: 2,
    paddingVertical: SW(10),
    paddingHorizontal: SW(3),
    borderRadius: SW(10),
  },
  topArea: {
    padding: SH(20),
  },
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buyText: {
    color: appColors.darkText,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsBold,
  },

  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SW(15),
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
    color: appColors.DarkPrimary,
    fontSize: SF(20),
    fontFamily: appFonts.PoppinsSemiBold,
  },
  val: {
    color: appColors.DarkPrimary,
    fontSize: SF(15),
    fontFamily: appFonts.PoppinsSemiBold,
  },

  colLabel: {
    color: appColors.darkText,
    fontSize: SF(11),
    fontFamily: appFonts.PoppinsRegular,
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
});

export default styles;
