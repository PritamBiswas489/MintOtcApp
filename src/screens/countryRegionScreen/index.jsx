import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import ChatIcon from '@src/assets/images/Chat.svg';
import { ScrollView } from 'react-native-gesture-handler';

const CountryRegionScreen = () => {
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
          <Text style={styles.title}>Country/Region</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <ChatIcon style={styles.clickImg} height={20} width={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.srcRow}>
          <VectorIcon
            icon="Feather"
            size={24}
            name="search"
            color={appColors.secondary}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
          <TouchableOpacity>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
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
              Thailand
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
            onPress={() => handleOptionSelect('Ukraine')}
          >
            <Text
              style={[
                styles.label,
                selectedOption === 'Ukraine' && { color: appColors.secondary },
              ]}
            >
              Ukraine
            </Text>
            {selectedOption === 'Ukraine' && (
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
            onPress={() => handleOptionSelect('Japan')}
          >
            <Text
              style={[
                styles.label,
                selectedOption === 'Japan' && { color: appColors.secondary },
              ]}
            >
              Japan
            </Text>
            {selectedOption === 'Japan' && (
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
            onPress={() => handleOptionSelect('Belarus')}
          >
            <Text
              style={[
                styles.label,
                selectedOption === 'Belarus' && { color: appColors.secondary },
              ]}
            >
              Belarus
            </Text>
            {selectedOption === 'Belarus' && (
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
            onPress={() => handleOptionSelect('HongKong')}
          >
            <Text
              style={[
                styles.label,
                selectedOption === 'HongKong' && { color: appColors.secondary },
              ]}
            >
              Hong Kong, China
            </Text>
            {selectedOption === 'HongKong' && (
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
            onPress={() => handleOptionSelect('Colombia')}
          >
            <Text
              style={[
                styles.label,
                selectedOption === 'Colombia' && { color: appColors.secondary },
              ]}
            >
              Colombia
            </Text>
            {selectedOption === 'Colombia' && (
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
            onPress={() => handleOptionSelect('Venezuela')}
          >
            <Text
              style={[
                styles.label,
                selectedOption === 'Venezuela' && {
                  color: appColors.secondary,
                },
              ]}
            >
              Venezuela
            </Text>
            {selectedOption === 'Venezuela' && (
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
            onPress={() => handleOptionSelect('Vietnam')}
          >
            <Text
              style={[
                styles.label,
                selectedOption === 'Vietnam' && { color: appColors.secondary },
              ]}
            >
              Vietnam
            </Text>
            {selectedOption === 'Vietnam' && (
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
            onPress={() => handleOptionSelect('Malaysia')}
          >
            <Text
              style={[
                styles.label,
                selectedOption === 'Malaysia' && { color: appColors.secondary },
              ]}
            >
              Malaysia
            </Text>
            {selectedOption === 'Malaysia' && (
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
            onPress={() => handleOptionSelect('Taiwan')}
          >
            <Text
              style={[
                styles.label,
                selectedOption === 'Taiwan' && { color: appColors.secondary },
              ]}
            >
              Taiwan, China
            </Text>
            {selectedOption === 'Taiwan' && (
              <VectorIcon
                icon="Feather"
                size={24}
                name="check"
                color={appColors.secondary}
              />
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CountryRegionScreen;
