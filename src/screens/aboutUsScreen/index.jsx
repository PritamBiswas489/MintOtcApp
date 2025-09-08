import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import VectorIcon from '@src/utils/VectoreIcons';
import appColors from '@src/theme/appColors';
import Gk from '@src/assets/images/about/general-questions.svg';
import Policy from '@src/assets/images/about/policy.svg';
import Vison from '@src/assets/images/about/vison.svg';
import Pp from '@src/assets/images/about/pp.svg';

import { SW } from '@src/theme/dimensions';

const AboutUsScreen = () => {
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.bodyInner}>
            <TouchableOpacity style={styles.detailRow}>
              <Gk width={25} height={25} />
              <Text style={styles.label}>FAQ</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailRow}>
              <Pp width={25} height={25} />
              <Text style={styles.label}>PrimoPay</Text>
              <Text style={styles.download}>Download</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailRow}>
              <Policy width={30} height={25} />
              <Text style={styles.label}>Privacy Policy</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailRow}>
              <Vison width={25} height={25} />
              <Text style={styles.label}>Version</Text>
              <Text style={styles.download}>Download</Text>
              <VectorIcon
                icon="FontAwesome6"
                name="angle-right"
                size={16}
                color={appColors.bodyText_2}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AboutUsScreen;
