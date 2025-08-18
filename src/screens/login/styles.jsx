import appColors from '@src/theme/appColors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: appColors.white,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#0c223f',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f4f6f8',
    borderRadius: 30,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 30,
  },
  tabText: {
    fontSize: 14,
    color: '#555',
  },
  activeTab: {
    backgroundColor: '#072f49',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 14,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 12,
    color: '#333',
  },
  forgotWrap: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotText: {
    fontSize: 13,
    color: '#000',
  },
  signInBtn: {
    backgroundColor: '#072f49',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  footerBottom: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#007bff',
    fontWeight: '600',
  },
});

export default styles;
