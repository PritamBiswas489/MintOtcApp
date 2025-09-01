import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import Check from '@src/assets/images/profile/check.svg';
import { SW } from '@src/theme/dimensions';

const EditMyProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleUpload = () => {
    // Logic for image upload can be added here
    console.log('Image upload triggered');
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <VectorIcon
              icon="Ionicons"
              name="arrow-back"
              size={SW(20)}
              color={appColors.white}
            />
          </TouchableOpacity>
          <Text style={styles.title}>My Profile</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileInitials}>BA</Text>
          <TouchableOpacity onPress={handleUpload} style={styles.uploadButton}>
            <VectorIcon
              icon="Feather"
              name="camera"
              size={SW(20)}
              color={appColors.white}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Nick Name</Text>
        <View style={styles.verifiedRow}>
          <Text style={styles.value}>Barmanji</Text>
        </View>
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.verifiedRow}>
          <Text style={styles.value}>Wade Warren</Text>
        </View>
        <Text style={styles.label}>Identity</Text>
        <View style={styles.verifiedRow}>
          <View style={styles.inputField}>
            <Text style={styles.value}>Verification Pending</Text>
          </View>
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.verifiedRow}>
          <View style={styles.inputField}>
            <Text style={styles.value}>+91 81540 60000</Text>
          </View>
          <Check width={30} height={30} />
        </View>
        <Text style={styles.label}>Email</Text>
        <View style={styles.verifiedRow}>
          <View style={styles.inputField}>
            <Text style={styles.value}>pintu.s@test.in</Text>
          </View>
          <TouchableOpacity>
            <Check width={30} height={30} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Email Verification</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <VectorIcon
                icon="Ionicons"
                name="close"
                size={SW(20)}
                color={appColors.black}
              />
            </TouchableOpacity>
            <Image
              source={require('@assets/images/profile/mail.png')}
              style={styles.emailImage}
              resizeMode="cover"
            />
            <Text style={styles.modalText}>Verify its you.</Text>
            <Text style={styles.modalSubText}>
              we sent verification code on abc@gmail.com. Please check your
              inbox or spam folder and enter the code below.
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>6-digits code</Text>
              <View style={styles.verifiedRow}>
                <Text style={styles.value}>Enter 6-digits Code</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.verifyCodeButton}>
              <Text style={styles.verifyText}>Verify Code</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Try again pressed')}>
              <Text style={styles.tryAgainText}>
                Didn't receive an email? Try again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default EditMyProfileScreen;
