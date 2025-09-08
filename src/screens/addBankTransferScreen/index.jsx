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

const AddBankTransferScreen = () => {
  const [name, setName] = useState('Jane Cooper');
  const [bankName, setBankName] = useState('');
  const [branchInfo, setBranchInfo] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [confirmAccount, setConfirmAccount] = useState('');
  const [fundPassword, setFundPassword] = useState('');

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
          <Text style={styles.title}>Add Bank Transfer</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.detailRow}>
          <View style={styles.row}>
            <Text style={styles.titleLetter}>B</Text>
            <Text style={styles.label}>Barmanji</Text>
          </View>
          <TouchableOpacity style={styles.ubBotton}>
            <Text style={styles.ubText}>Unblock</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false} // hides vertical scrollbar
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Required"
              placeholderTextColor={appColors.bodyText}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Bank name</Text>
            <TextInput
              style={styles.input}
              value={bankName}
              onChangeText={setBankName}
              placeholder="Required"
              placeholderTextColor={appColors.bodyText}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Branch info</Text>
            <TextInput
              style={styles.input}
              value={branchInfo}
              onChangeText={setBranchInfo}
              placeholder="Option"
              placeholderTextColor={appColors.bodyText}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Bank account</Text>
            <TextInput
              style={styles.input}
              value={bankAccount}
              onChangeText={setBankAccount}
              placeholder="Required"
              placeholderTextColor={appColors.bodyText}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm account</Text>
            <TextInput
              style={styles.input}
              value={confirmAccount}
              onChangeText={setConfirmAccount}
              placeholder="Required"
              placeholderTextColor={appColors.bodyText}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Fund Password</Text>
            <TextInput
              style={styles.input}
              value={fundPassword}
              onChangeText={setFundPassword}
              placeholder="Required"
              placeholderTextColor={appColors.bodyText}
              secureTextEntry={true}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddBankTransferScreen;
