import {View,Text,StyleSheet} from "react-native";
import {TextInput} from "react-native-paper"
import {useState} from "react";

export default  function  Focus(props){
  const {focusTask,setFocusTask} = props;
  const [focusItem ,setFocusItem] = useState("");
  return (<View style={style.textBox}>
  <TextInput
  onChangeText={(e)=>setFocusTask(e)}
  label={"what would you like to focus ?"}
  value={focusTask}
  
  />
  <Text style={{position:"relative",top:"100px",color:"white"}}>{focusItem}</Text>
  </View>)
}

const style =  StyleSheet.create({
  textBox:{
    flex:0.5,
    padding:25,
    justifyContent:"top",
  }
})