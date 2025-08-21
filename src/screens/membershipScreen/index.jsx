import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';

const MembershipScreen = () => {
  // Sample data for FAQ items
  const faqData = [
    {
      question: 'What are the registration steps?',
      answer:
        'A) Enter your mobile number or email address.\nB) Enter the desired password in the appropriate boxes.\nC) If you have a referral code, enter it in the relevant box.\nD) Enter the validation code (OTP) sent to your SIM card or email in the relevant field.',
    },
    {
      question:
        'Why the website do not send the OTP code to my email or mobile number?',
      answer:
        'This could be due to an issue with your network, an incorrect email/mobile number, or a temporary server delay. Please try again or contact support.',
    },
    {
      question: 'How is the registration through the referral link?',
      answer:
        'Registration through a referral link follows the same steps, but you’ll need to use the unique referral link provided by the referrer.',
    },
    {
      question: 'What is the advantage of registering with a referral code?',
      answer:
        'Registering with a referral code may offer benefits like discounts, bonus points, or exclusive offers.',
    },
    {
      question: 'Which part do you pay the prize money to after registration?',
      answer:
        'Prize money is typically paid to your registered account or wallet after meeting the required conditions. Check the terms for details.',
    },
  ];

  // State to track the active accordion index (set first item as open by default)
  const [activeIndex, setActiveIndex] = useState(0);

  const renderFAQItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.faqItem}
      onPress={() => setActiveIndex(activeIndex === index ? null : index)}
    >
      <View style={styles.faqQuestionContainer}>
        <Image
          source={require('@assets/images/bullet.png')} // Replace with your image path
          style={styles.bullet}
          resizeMode="cover"
        />
        <Text style={styles.faqQuestion}>{item.question}</Text>
        <VectorIcon
          icon="Octicons"
          name={activeIndex === index ? 'triangle-up' : 'triangle-down'}
          size={20}
          color={appColors.SubText}
        />
      </View>
      {activeIndex === index && (
        <View style={styles.faqAnswerWrap}>
          <Text style={styles.faqAnswer}>{item.answer}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity>
          <VectorIcon
            icon="Ionicons"
            name="arrow-back"
            size={20}
            color={appColors.white}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Registration & Membership</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={faqData}
          renderItem={renderFAQItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default MembershipScreen;
