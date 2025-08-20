// src/screens/login/index.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
// import Us from '@assets/images/us.svg';
// import Us from './assets/us.svg';

// import { Octicons } from 'react-native-vector-icons';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={{ flex: 1 }} edges={['left', 'right', 'bottom']}>
        <View style={styles.body}>
          <View style={styles.heading}>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>
              Don’t worry! it happens, Please enter the address associated with
              your account.
            </Text>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <VectorIcon
                icon="Ionicons"
                size={24}
                name={showPassword ? 'eye' : 'eye-off'}
                color={appColors.DarkPrimary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <VectorIcon
                icon="Ionicons"
                size={24}
                name={showPassword ? 'eye' : 'eye-off'}
                color={appColors.DarkPrimary}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.errorMsg}>
            Password and confirm Password didn't match.
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInText}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.footerBottom}>
            <Text style={styles.notMember}>Remember Password? </Text>
            <TouchableOpacity>
              <Text style={styles.registerText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ResetPassword;
