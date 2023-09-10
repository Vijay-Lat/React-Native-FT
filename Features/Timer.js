import { View, Text } from 'react-native';

const Timer = (props) => {
  const { timerValue } = props;

  return (
    <View>
      <Text>{timerValue}</Text>
    </View>
  );
};

export default Timer;
