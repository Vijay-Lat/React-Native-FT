import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Vibration,
} from 'react-native';
import { useState,useRef } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Features from './Features/Features';
import Focus from './Features/Focus';
import Constants from 'expo-constants';
import RoundedButton from './Features/RoundedButton';
import Timer from "./Features/Timer"

export default function App() {
  const [addedTask, setAddedTask] = useState('');
  const [focusTask, setFocusTask] = useState('');
  const[timerValue,setTimerValue]=useState(0);
  const ref = useRef();
  const startTimerHandler = () => {
    setAddedTask(focusTask);
    countDown(60);
  };
  const stopTimerHandler = () => {
    setAddedTask('');
    setFocusTask('');
    setTimerValue(0);
    countDown(-1);
    clearTimeout(ref.current)
  };
  const countDown = (val)=>{
    console.log(val,"cal")
    if(val===-1){
      Vibration.vibrate(10 * 1000);
      return;
    }
     if(val===0){
       stopTimerHandler();
       return;
     }
    ref.current = setTimeout(()=>{
     setTimerValue(val); 
     return countDown(val-1);
    },1000)
  }
  console.log(timerValue,"time")
  return (
    <View style={styles.container}>
      {!addedTask ? (
        <Focus setFocusTask={setFocusTask} focusTask={focusTask} />
      ) : (
        <Timer timerValue={timerValue}/>
      )}
      <RoundedButton
        buttonStyle={styles.buttonContainer}
        onPressHandler={!addedTask ? startTimerHandler : stopTimerHandler}
        buttonText={addedTask ? 'Stop' : 'Start'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop:40,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
