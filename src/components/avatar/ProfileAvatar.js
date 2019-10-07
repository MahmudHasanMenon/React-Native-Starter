import React from 'react';
import {PropTypes} from 'prop-types';
import {Avatar} from 'react-native-elements';
import colors from '../../styles/colors';

const ProfileAvatar = ({
  onPress,
  imgSrc,
  size,
  borderColor,
  showEditButton,
  customPadding,
}) => {
  const padding = customPadding || 0;

  return (
    <Avatar
      source={imgSrc}
      showEditButton={showEditButton}
      size={size}
      rounded
      overlayContainerStyle={{backgroundColor: colors.gray08}}
      containerStyle={{borderColor, borderWidth: 2, padding}}
      onPress={onPress}
    />
  );
};

ProfileAvatar.propTypes = {
  onPress: PropTypes.func,
  size: PropTypes.number.isRequired,
  borderColor: PropTypes.string.isRequired,
  showEditButton: PropTypes.bool.isRequired,
  customPadding: PropTypes.number,
};

ProfileAvatar.defaultProps = {
  onPress: null,
  customPadding: null,
};

export default ProfileAvatar;
