import { StyleSheet } from 'react-native';
import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { SF, SH, SW } from '@src/theme/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.boxBg,
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
  doneText: {
    color: appColors.primary,
    fontFamily: appFonts.PoppinsSemiBold,
    fontSize: SF(16),
  },
  title: {
    fontSize: SF(18),
    color: appColors.white,
    marginLeft: SW(10),
  },
  body: {
    flex: 1,
    paddingTop: SH(10),
    paddingBottom: SH(20),
    paddingHorizontal: SW(20),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SH(8),
    paddingVertical: SW(12),
    borderRadius: SW(8),
    borderBottomColor: appColors.border_2,
    borderBottomWidth: 1,
  },
  label: {
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsSemiBold,
    fontSize: SF(16),
  },
  titleLetter: {
    fontSize: SF(16),
    color: appColors.white,
    fontFamily: appFonts.PoppinsSemiBold,
    marginRight: SW(10),
    width: SW(30),
    height: SW(30),
    backgroundColor: appColors.DarkPrimary,
    borderRadius: SW(10),
    textAlign: 'center',
    lineHeight: SW(30),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ubBotton: {
    backgroundColor: appColors.secondary,
    paddingVertical: SW(8),
    paddingHorizontal: SW(20),
  },
  ubText: {
    color: appColors.white,
    fontFamily: appFonts.PoppinsMedium,
    fontSize: SF(14),
  },
  inputContainer: {
    marginBottom: SH(15),
  },
  inputLabel: {
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsSemiBold,
    fontSize: SF(16),
    marginBottom: SH(5),
  },
  input: {
    backgroundColor: appColors.white,
    borderRadius: SW(12),
    paddingHorizontal: SW(15),
    paddingVertical: SH(14),
    fontSize: SF(14),
    fontFamily: appFonts.PoppinsRegular,
    color: appColors.DarkPrimary,
    borderColor: appColors.textInput_2,
    borderWidth: 1,
  },
});
