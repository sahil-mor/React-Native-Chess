import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF3E4D',alignContent : "center",justifyContent : "center",
    },
    killedRow : {
      flexDirection : 'column'
    },
    row : {
      width : "100%",flex : 1,flexDirection : "row"
    },
    entryOdd : {
      backgroundColor : "#F5C469",flex : 1,borderWidth : 1,borderColor : "black"
    },
    entryEven : {
      backgroundColor : "#99AAAB",flex : 1,borderWidth : 1,borderColor : "black"
    },
    icon : {
      marginTop : 15,marginLeft : 0
    },
    row1 : {
      flexDirection : "row"
    },
    message : {
      flex : 0.5,marginTop : 20,
    },
    messageText : {
      color : "white",fontSize : 25,marginLeft : "20%"
    },
    allRows : {
      flexDirection : "column",flex : 7.5
    },
    killedForWhite : {
      flex : 2,
    },
    killedForBlack : {
      flex : 2,
    },
    playAgain : {
      flex : 1,backgroundColor : "#2475B0"
    },
    button : {
      flex : 1,
    },
    btnText : {
      fontSize : 25,color : "white",marginTop : "2%",marginLeft : "30%"
    },
    timer1 : {
      flex : 1,marginTop : 5,marginLeft : "20%"
    }
  });
export  {styles}