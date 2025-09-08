import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';

const FundPasswordScreen = () => {
  const [newFund, setNewFund] = useState('Jane Cooper');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [sms, setSms] = useState('');
  const [ga, setGa] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <VectorIcon
              icon="Ionicons"
              name="arrow-back"
              size={20}
              color={appColors.white}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Fund Password</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Text style={styles.doneText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false} // hides vertical scrollbar
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>New fund password</Text>
            <View style={styles.inputwrap}>
              <TextInput
                style={styles.input}
                value={newFund}
                onChangeText={setNewFund}
                placeholder="Required"
                placeholderTextColor={appColors.bodyText}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm password</Text>
            <View style={styles.inputwrap}>
              <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Required"
                placeholderTextColor={appColors.bodyText}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email verification code</Text>
            <View style={styles.inputwrap}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Option"
                placeholderTextColor={appColors.bodyText}
              />
              <TouchableOpacity>
                <Text style={styles.sendText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>SMS verification code</Text>
            <View style={styles.inputwrap}>
              <TextInput
                style={styles.input}
                value={sms}
                onChangeText={setSms}
                placeholder="Required"
                placeholderTextColor={appColors.bodyText}
              />
              <TouchableOpacity>
                <Text style={styles.sendText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>GA verification code</Text>
            <View style={styles.inputwrap}>
              <TextInput
                style={styles.input}
                value={ga}
                onChangeText={setGa}
                placeholder="Required"
                placeholderTextColor={appColors.bodyText}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FundPasswordScreen;
