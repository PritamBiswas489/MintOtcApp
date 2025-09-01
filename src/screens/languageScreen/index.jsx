import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import ChatIcon from '@src/assets/images/Chat.svg';

const LanguageScreen = () => {
  const [selectedOption, setSelectedOption] = useState('Notification');

  const handleOptionSelect = option => {
    setSelectedOption(option === selectedOption ? null : option);
  };

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
          <Text style={styles.title}>Language</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <ChatIcon style={styles.clickImg} height={20} width={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.detailRow}
          onPress={() => handleOptionSelect('Japanese')}
        >
          <Text
            style={[
              styles.label,
              selectedOption === 'Japanese' && {
                color: appColors.secondary,
              },
            ]}
          >
            Japanese
          </Text>
          {selectedOption === 'Japanese' && (
            <VectorIcon
              icon="Feather"
              size={24}
              name="check"
              color={appColors.secondary}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.detailRow}
          onPress={() => handleOptionSelect('English')}
        >
          <Text
            style={[
              styles.label,
              selectedOption === 'English' && { color: appColors.secondary },
            ]}
          >
            English
          </Text>
          {selectedOption === 'English' && (
            <VectorIcon
              icon="Feather"
              size={24}
              name="check"
              color={appColors.secondary}
            />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;
