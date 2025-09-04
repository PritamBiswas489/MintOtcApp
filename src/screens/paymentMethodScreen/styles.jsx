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
  title: {
    fontSize: SF(18),
    color: appColors.white,
    marginLeft: SW(10),
  },
  body: {
    flex: 1,
    paddingVertical: SH(20),
    // paddingHorizontal: SW(20),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SH(8),
    paddingVertical: SW(20),
    paddingHorizontal: SW(20),
    backgroundColor: appColors.white,
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  label: {
    color: appColors.bodyText,
    fontFamily: appFonts.PoppinsRegular,
    fontSize: SF(13),
    marginBottom: SH(8),
  },
  subLabel: {
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsSemiBold,
    fontSize: SF(16),
  },

  toggleContainer: {
    width: SW(40),
    height: SH(24),
    borderRadius: SW(12),
    justifyContent: 'center',
    paddingHorizontal: SW(2),
  },
  toggleThumb: {
    width: SW(20),
    height: SH(20),
    backgroundColor: '#FFFFFF',
    borderRadius: SW(10),
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
    paddingVertical: SW(20),
    maxHeight: SH(400),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SH(10),
    paddingHorizontal: SW(20),
  },
  modalTitle: {
    fontSize: SF(18),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
  },

  modalList: {
    maxHeight: SH(300),
  },
  dropdownItem: {
    paddingVertical: SH(10),
    paddingHorizontal: SW(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownItemText: {
    fontSize: SF(16),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsSemiBold,
  },
  checkmark: {
    width: SW(16),
    height: SH(16),
    borderRadius: SH(8),
  },
});
