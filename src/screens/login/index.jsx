// src/screens/login/index.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';

// import { Octicons } from 'react-native-vector-icons';

const Login = () => {
  const [activeTab, setActiveTab] = useState('mobile'); // 'email' or 'mobile'
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Image
        source={require('@assets/images/login.png')} // Replace with your image path
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.body}>
        <View style={styles.heading}>
          <Text style={styles.title}>Login Account</Text>
          <Text style={styles.subtitle}>
            Hello, welcome back to our account
          </Text>
        </View>

        {/* <Octicons name="home" size={24} color="#6848FF" /> */}
        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'email' && styles.activeTab]}
            onPress={() => setActiveTab('email')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'email' && styles.activeTabText,
              ]}
            >
              Email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'mobile' && styles.activeTab]}
            onPress={() => setActiveTab('mobile')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'mobile' && styles.activeTabText,
              ]}
            >
              Mobile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        {activeTab === 'mobile' ? (
          <TextInput
            style={styles.input}
            placeholder="+44 |"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
        ) : (
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        )}

        {/* Password */}
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

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotWrap}>
          <Text style={styles.forgotText}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>

        {/* Register */}
        <View style={styles.footerBottom}>
          <Text style={styles.notMember}>Not a member? </Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
