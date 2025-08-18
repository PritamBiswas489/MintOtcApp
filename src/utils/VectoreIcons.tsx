import React from 'react';
import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconL from 'react-native-vector-icons/MaterialIcons';
import IconT from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconJ from 'react-native-vector-icons/Entypo';
import IconG from 'react-native-vector-icons/Ionicons';
import IconP from 'react-native-vector-icons/Octicons';
import IconW from 'react-native-vector-icons/FontAwesome5';
import IconH from 'react-native-vector-icons/FontAwesome6';
import IconV from 'react-native-vector-icons/Fontisto';

interface VectorIconProps {
  icon: string;
  name: string;
  color?: string;
  size?: number;
  style?: object;
}

const VectorIcon: React.FC<VectorIconProps> = props => {
  const { icon = '', name, color, size, style } = props;

  switch (icon) {
    case 'Feather':
      return <IconF name={name} color={color} style={style} size={size} />;
    case 'AntDesign':
      return <IconA name={name} color={color} style={style} size={size} />;
    case 'Fontisto':
      return <IconV name={name} color={color} style={style} size={size} />;
    case 'MaterialCommunityIcons':
      return <IconM name={name} color={color} size={size} />;
    case 'FontAwesome':
      return <IconT name={name} color={color} style={style} size={size} />;
    case 'EvilIcons':
      return <IconE name={name} color={color} style={style} size={size} />;
    case 'Entypo':
      return <IconJ name={name} color={color} style={style} size={size} />;
    case 'Ionicons':
      return <IconG name={name} color={color} style={style} size={size} />;
    case 'Octicons':
      return <IconP name={name} color={color} style={style} size={size} />;
    case 'FontAwesome5':
      return <IconW name={name} color={color} style={style} size={size} />;
    case 'MaterialIcons':
      return <IconL name={name} color={color} style={style} size={size} />;
    case 'FontAwesome6':
      return <IconH name={name} color={color} style={style} size={size} />;
    default:
      return null;
  }
};

export default VectorIcon;
