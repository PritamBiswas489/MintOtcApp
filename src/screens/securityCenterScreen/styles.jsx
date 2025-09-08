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

  securityLevelContainer: {
    marginBottom: SH(20),
  },
  rowJustified: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  securityLevelText: {
    fontSize: SF(16),
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsSemiBold,
    marginBottom: SH(5),
  },
  securityLevelSubText: {
    fontSize: SF(12),
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsSemiBold,
    marginBottom: SH(10),
  },
  progressBar: {
    height: SH(8),
    // backgroundColor: '#E0E0E0',
    borderRadius: SW(4),
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '33%',
    borderRadius: SW(4),
    // backgroundColor: appColors.secondary,
  },
  levelLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SH(10),
  },
  levelText: {
    fontSize: SF(14),
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsSemiBold,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SH(8),
    paddingVertical: SW(12),
    paddingHorizontal: SW(15),
    backgroundColor: appColors.white,
    borderRadius: SW(8),

    elevation: 2,
    shadowColor: 'rgba(0,0,0,.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    color: appColors.DarkPrimary,
    fontFamily: appFonts.PoppinsSemiBold,
    fontSize: SF(16),
  },
  val: {
    color: appColors.SubText,
    fontSize: SF(15),
    fontFamily: appFonts.PoppinsMedium,
    marginLeft: 'auto',
    marginRight: SW(10),
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
