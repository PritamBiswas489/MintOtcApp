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

const ForgotPassword = () => {
  const [activeTab, setActiveTab] = useState('mobile'); // 'email' or 'mobile'
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.body}>
        <View style={styles.heading}>
          <Text style={styles.title}>Forget Password</Text>
          <Text style={styles.subtitle}>
            Don’t worry! it happens, Please enter the address associated with
            your account.
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
            placeholder="+91 |"
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
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.signInText}>Submit</Text>
        </TouchableOpacity>

        {/* Register */}
        <View style={styles.footerBottom}>
          <Text style={styles.notMember}>Remember Password? </Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
