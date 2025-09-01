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
    paddingHorizontal: SW(20),
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
});
