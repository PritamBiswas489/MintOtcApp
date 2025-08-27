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
  image: {
    backgroundColor: appColors.primary,
    height: SW(40),
    width: SW(40),
    borderRadius: SW(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: appColors.DarkBg,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsBold,
  },
  title: {
    fontSize: SF(17),
    color: appColors.white,
    fontFamily: appFonts.PoppinsSemiBold,
    marginLeft: SW(10),
  },
  subTitle: {
    fontSize: SF(16),
    color: appColors.white,
    fontFamily: appFonts.PoppinsRegular,
  },
  body: {
    flex: 1,
    paddingVertical: SH(30),
    paddingHorizontal: SW(20),
    backgroundColor: appColors.boxBg,
  },
  bodyInner: {
    flex: 1,
    // justifyContent: 'space-between',
  },
  inputContainer: {
    marginBottom: SH(20),
  },
  label: {
    fontSize: SF(13),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
    marginBottom: SH(5),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SW(12),
    paddingHorizontal: SW(15),
    backgroundColor: appColors.white,
    borderRadius: SH(16),
    borderWidth: 1,
    borderColor: appColors.border_2,
  },
  dropdownText: {
    fontSize: SF(14),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  input: {
    paddingVertical: SW(12),
    paddingHorizontal: SW(15),
    backgroundColor: appColors.white,
    borderRadius: SH(16),
    borderWidth: 1,
    borderColor: appColors.border_2,
    fontSize: SF(14),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsRegular,
  },

  doneButton: {
    backgroundColor: appColors.DarkBg,
    paddingVertical: SH(15),
    borderRadius: SH(20),
    alignItems: 'center',
    marginBottom: SH(10),
    marginHorizontal: SW(20),
  },
  doneButtonText: {
    color: appColors.white,
    fontSize: SF(16),
    fontFamily: appFonts.PoppinsSemiBold,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: appColors.white,
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
    padding: SW(20),
    maxHeight: SH(400),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SH(10),
  },
  modalTitle: {
    fontSize: SF(18),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  cancelText: {
    fontSize: SF(16),
    color: appColors.primary,
    fontFamily: appFonts.PoppinsRegular,
  },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SH(10),
    paddingHorizontal: SW(15),
    backgroundColor: appColors.textInput_2,
    borderRadius: SH(30),
  },
  srcIcon: {
    marginRight: SW(10),
  },

  searchCancel: {
    marginLeft: SW(10),
  },
  searchCancelText: {
    fontFamily: appFonts.PoppinsMedium,
    fontSize: SF(13),
    color: appColors.secondary,
  },
  searchInput: {
    flex: 1, // ✅ take remaining space
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsRegular,
    paddingVertical: SW(12),
  },

  modalList: {
    maxHeight: SH(300),
  },
  dropdownItem: {
    paddingVertical: SH(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownItemText: {
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsRegular,
  },
  checkmark: {
    width: SW(16),
    height: SH(16),
    borderRadius: SH(8),
  },
});

export default styles;
