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
    paddingHorizontal: SW(20),
    backgroundColor: appColors.boxBg,
  },
  bodyInner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '30.333%',
    height: SH(120),
    paddingHorizontal: SW(5),
    backgroundColor: appColors.white,
    borderRadius: SH(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SH(16),
    elevation: 8,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  iconCircle: {
    width: SW(50),
    height: SH(50),
    borderRadius: SH(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.secondary,
  },
  categoryIcon: {
    // tintColor: appColors.primary,
    width: SW(28),
    height: SH(28),
  },
  categoryText: {
    fontSize: SF(12),
    color: appColors.darkText,
    fontFamily: appFonts.PoppinsMedium,
    textAlign: 'center',
    marginTop: SH(10),
  },
});

export default styles;
