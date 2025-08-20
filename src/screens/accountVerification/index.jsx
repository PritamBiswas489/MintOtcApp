// src/screens/login/index.jsx
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountVerification = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(null);

  // refs for each input
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // if value entered, move to next
      if (value !== '' && index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.heading}>
          <Text style={styles.title}>Account Verification</Text>
          <Text style={styles.subtitle}>
            Enter the code we just sent you on your
          </Text>
        </View>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={el => (inputs.current[index] = el)}
              value={digit}
              onChangeText={value => handleChange(index, value)}
              keyboardType="numeric"
              maxLength={1}
              style={[
                styles.codeInput,
                activeIndex === index && styles.activeInput,
              ]}
              textAlign="center"
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
            />
          ))}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInText}>Submit</Text>
          </TouchableOpacity>

          {/* Register */}
          <View style={styles.footerBottom}>
            <Text style={styles.notMember}>Didn’t receive the OTP? </Text>
            <TouchableOpacity>
              <Text style={styles.registerText}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountVerification;
