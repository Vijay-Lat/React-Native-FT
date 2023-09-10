import { Text, TouchableOpacity } from 'react-native';

const RoundedButton = (props) => {
  const {buttonStyle,onPressHandler,buttonText} = props;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPressHandler}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
