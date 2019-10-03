import React from 'react';
import {
  View, TouchableOpacity, UIManager, findNodeHandle
} from 'react-native';
import { PropTypes } from 'prop-types';

import Icon from 'react-native-vector-icons/Ionicons';

const ICON_SIZE = 24;

class PopupMenu extends React.Component {
  handleShowPopupError = () => {
    // show error here
  };

  handleMenuPress = () => {
    const { actions, onPress } = this.props;

    UIManager.showPopupMenu(
      // eslint-disable-next-line react/no-string-refs
      findNodeHandle(this.refs.menu),
      actions,
      this.handleShowPopupError,
      onPress,
    );
  };

  render() {
    const { children } = this.props;
    return (
      <View>
        { children}
        <TouchableOpacity
          onPress={this.handleMenuPress}
          style={{
            alignSelf: 'center', backgroundColor: 'transparent', paddingLeft: 15, paddingRight: 15
          }}
        >
          <Icon
            name="md-more"
            size={ICON_SIZE}
            color="white"
            // eslint-disable-next-line react/no-string-refs
            ref="menu"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

PopupMenu.propTypes = {
  actions: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};


export default PopupMenu;
