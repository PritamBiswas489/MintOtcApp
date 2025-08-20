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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={require('@assets/images/login.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.body}>
          <View style={styles.heading}>
            <View style={styles.headingLeft}>
              <Text style={styles.title}>Sign up Account</Text>
              <Text style={styles.subtitle}>
                Hello, enter your informations below.
              </Text>
            </View>
            <View style={styles.headingRight}>
              <Text style={styles.subtitle}>Hello,</Text>
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="+44 |"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />

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

          <TouchableOpacity
            style={styles.checkBox}
            onPress={() => setChecked(!checked)}
            activeOpacity={0.7}
          >
            <View style={[styles.checkbox, checked && styles.checked]}>
              {checked && (
                <VectorIcon
                  icon="Ionicons"
                  name="checkmark"
                  size={16}
                  color={appColors.white}
                />
              )}
            </View>
            <Text style={styles.label}>
              I agree to the <Text style={styles.bold}>Terms of user</Text> and{' '}
              <Text style={styles.bold}>Privacy.</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInText}>Request Verification</Text>
          </TouchableOpacity>

          <View style={styles.footerBottom}>
            <Text style={styles.notMember}>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.registerText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;
