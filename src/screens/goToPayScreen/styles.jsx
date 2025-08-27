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
    backgroundColor: appColors.boxBg,
  },
  bodyInner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  body: {
    padding: SW(25),
    backgroundColor: '#f5f5f5',
  },
  buyButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SH(20),
  },
  buyText: {
    color: appColors.darkText,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsBold,
  },
  goToPayText: {
    color: appColors.error,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsBold,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SH(20),
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#ddd',
  },
  infoText: {
    color: appColors.bodyText_2,
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsMedium,
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
