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
  },
  profileCircle: {
    width: SW(100),
    height: SW(100),
    borderRadius: SW(100),
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: SH(10),
  },
  profileInitials: {
    fontSize: SF(30),
    color: appColors.black,
    fontFamily: appFonts.PoppinsBold,
  },
  label: {
    fontSize: SF(13),
    color: appColors.bodyText_2,
    fontFamily: appFonts.PoppinsMedium,
    marginTop: SH(10),
  },
  verifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SH(5),
    backgroundColor: appColors.white,
    borderRadius: SW(10),
    paddingVertical: SW(12),
    paddingHorizontal: SW(15),
    borderWidth: 1,
    borderColor: appColors.textInput_2,
  },
  inputField: {},
  value: {
    fontSize: SF(14),
    color: appColors.DarkBg,
    fontFamily: appFonts.PoppinsRegular,
  },
  verificationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SH(5),
  },
  verifyButton: {
    backgroundColor: appColors.lightBlue,
    paddingLeft: SW(15),
    paddingVertical: SH(5),
    borderRadius: SW(10),
  },
  verifyText: {
    fontSize: SF(14),
    color: appColors.secondary,
    fontFamily: appFonts.PoppinsSemiBold,
  },
});

export default styles;
