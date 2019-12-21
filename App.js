import React from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Audio} from 'expo-av'
const soundObject = new Audio.Sound();
import {styles} from './src/styles'
const initialPositionsWhite = [
  { whose : "rookW1" ,position : 1},{ whose : "rookW2" ,position : 8},{ whose : "bishopW1" ,position : 3},{ whose : 'bishopW2', position : 6 },
  { whose : "knightW1" ,position : 2},{ whose : "knightW2" ,position : 7},{ whose : "queenW" ,position : 4},{ whose : "kingW" ,position : 5},
  { whose :  "pawnW1" ,position : 9},{ whose : "pawnW2" ,position : 10},{ whose : "pawnW3" ,position : 11},{ whose : "pawnW4" ,position : 12},
  { whose : "pawnW5" ,position : 13},{ whose : "pawnW6" ,position : 14},{ whose : "pawnW7" ,position : 15},{ whose : "pawnW8" ,position : 16},
]
const initialPositionsBlack =  [
  { whose : "rookB1" ,position : 57},{ whose : "rookB2" ,position : 64},{ whose : "bishopB1" ,position : 59},{ whose : "bishopB2" ,position : 62},
  { whose : "knightB1" ,position : 58},{ whose : "knightB2" ,position : 63},{ whose : "queenB" ,position : 60},{ whose : "kingB" ,position : 61},
  { whose :  "pawnB1" ,position : 49},{ whose : "pawnB2" ,position : 50},{ whose : "pawnB3" ,position : 51},{ whose : "pawnB4" ,position : 52},
  { whose : "pawnB5" ,position : 53},{ whose : "pawnB6" ,position : 54},{ whose : "pawnB7" ,position : 55},{ whose : "pawnB8" ,position : 56},
 ]
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      availablePosition : [],currentPostions : [],
      whoseTurnToMove : "white",isMatchEnded : false,message : "White's Turn First"
    }
  }
  componentWillMount(){
    this.initialSettings(true)
  }
  initialSettings = (who) => {
    if(who || this.state.isMatchEnded){
      this.setInitialPosition()
      this.setState({ isMatchEnded : false });this.setState({ whoseTurnToMove : "white" })
      allOccupiedPositions = initialPositionsWhite.concat(initialPositionsBlack)
      this.setState({ currentPostions : allOccupiedPositions })
    }else{
      this.setState({ message : "Match In Progress" })
    }
  }
  setInitialPosition = () => {
    this.setState({  rookW1 : 1 }) ; this.setState({rookW2 : 8 }) ; this.setState({ bishopW1 : 3 }); this.setState({ bishopW2 : 6 })  ; this.setState({ knightW1 : 2 }) ; this.setState({ knightW2 : 7 }) ; this.setState({ kingW : 5 }) ; this.setState({ queenW : 4 }) ;
    this.setState({  pawnW1 : 9 }) ; this.setState({ pawnW2 : 10 }) ;this.setState({ pawnW3 : 11 }) ;this.setState({ pawnW4 : 12 }) ;this.setState({ pawnW5 : 13 }) ;this.setState({ pawnW6 : 14 });this.setState({ pawnW7 : 15 });this.setState({ pawnW8 : 16});
    this.setState({ rookB1 : 57 });this.setState({ rookB2 : 64 });this.setState({ bishopB1 : 59 });this.setState({ bishopB2 : 62 });this.setState({ knightB1 : 58 });this.setState({ knightB2 : 63 });this.setState({ kingB : 61 });this.setState({ queenB : 60 });
    this.setState({ pawnB1 : 49});this.setState({pawnB2 : 50 });this.setState({pawnB3 : 51 });this.setState({pawnB4 : 52 });this.setState({pawnB5 : 53 });this.setState({pawnB6 : 54 });this.setState({pawnB7 : 55 });this.setState({pawnB8 : 56 });
    this.setState({currentPostionsWhite : initialPositionsWhite})
    this.setState({ currentPostionsBlack : initialPositionsBlack })
  }
  killWhite = whichOne => {
    switch(whichOne){
        case 'rookW1' : 
          this.setState({ rookW1 : 'killed' })
        break;
        case 'rookW2' : 
            this.setState({ rookW2 : 'killed' })
        break;
        case 'bishopW1' : 
            this.setState({ bishopW1 : 'killed' })
        break;
        case 'bishopW2' : 
            this.setState({ bishopW2  : 'killed' })
        break;
        case 'knightW1' : 
          this.setState({ knightW1  : 'killed' })
        break;
        case 'knightW2' : 
            this.setState({ knightW2  : 'killed' })
        break;
        case 'kingW' : 
          this.setState({ message : "Black Wins!!!" }); this.playKhatam() ; this.setState({ kingW : 'killed' })
          break;
          case 'queenW' : 
              this.setState({ queenW : 'killed' })
          break;
          case 'pawnW1' : 
              this.setState({ pawnW1  : 'killed' })
          break;
          case 'pawnW2' : 
              this.setState({ pawnW2 : 'killed' })
          break;
          case 'pawnW3' : 
                this.setState({ pawnW3 : 'killed' })
            break;
            case 'pawnW4' : 
                this.setState({ pawnW4 : 'killed' })
          break;
          case 'pawnW5' : 
              this.setState({ pawnW5 : 'killed' })
          break;
          case 'pawnW6' : 
              this.setState({ pawnW6 : 'killed' })
          break;
          case 'pawnW7' : 
                this.setState({ pawnW7 : 'killed' })
            break;
            case 'pawnW8' : 
                this.setState({ pawnW8 : 'killed' })
          break;
      }
  }
  killBlack = whichOne => {
    switch(whichOne){
      case 'rookB1' : 
        this.setState({ rookB1 : 'killed' })
      break;
      case 'rookB2' : 
          this.setState({ rookB2 : 'killed' })
      break;
      case 'bishopB1' : 
          this.setState({ bishopB1 : 'killed' })
      break;
      case 'bishopB2' : 
          this.setState({ bishopB2  : 'killed' })
      break;
      case 'knightB1' : 
        this.setState({ knightB1  : 'killed' })
      break;
      case 'knightB2' : 
          this.setState({ knightB2  : 'killed' })
      break;
      case 'kingB' : 
        this.setState({ message : "White Wins!!!" }); this.playKhatam() ; this.setState({ kingB : 'killed' })
      break;
      case 'queenB' : 
          this.setState({ queenB : 'killed' })
      break;
      case 'pawnB1' : 
          this.setState({ pawnB1  : 'killed' })
      break;
      case 'pawnB2' : 
          this.setState({ pawnB2 : 'killed' })
      break;
      case 'pawnB3' : 
            this.setState({ pawnB3 : 'killed' })
        break;
        case 'pawnB4' : 
            this.setState({ pawnB4 : 'killed' })
      break;
      case 'pawnB5' : 
          this.setState({ pawnB5 : 'killed' })
      break;
      case 'pawnB6' : 
          this.setState({ pawnB6 : 'killed' })
      break;
      case 'pawnB7' : 
            this.setState({ pawnB7 : 'killed' })
        break;
      case 'pawnB8' : 
          this.setState({ pawnB8 : 'killed' })
      break;
    }
  }
  setNewPosition = (ofWhom,whichOne,newPosition) => {
      if(ofWhom == 'black'){
        this.setPositionOfBlack(whichOne,newPosition)
      }else{
        this.setPositionOfWhite(whichOne,newPosition)
      }
  }
  setPositionOfWhite = (whichOne,position) => {
    switch(whichOne){
      case 'rookW1' : 
        this.setState({ rookW1 : position })
      break;
      case 'rookW2' : 
          this.setState({ rookW2 : position })
      break;
      case 'bishopW1' : 
          this.setState({ bishopW1 : position })
      break;
      case 'bishopW2' : 
          this.setState({ bishopW2  : position })
      break;
      case 'knightW1' : 
        this.setState({ knightW1  : position })
      break;
      case 'knightW2' : 
          this.setState({ knightW2  : position })
      break;
      case 'kingW' : 
        this.setState({ kingW : position })
      break;
      case 'queenW' : 
          this.setState({ queenW : position })
      break;
      case 'pawnW1' : 
          this.setState({ pawnW1  : position })
      break;
      case 'pawnW2' : 
          this.setState({ pawnW2 : position })
      break;
      case 'pawnW3' : 
            this.setState({ pawnW3 : position })
        break;
        case 'pawnW4' : 
            this.setState({ pawnW4 : position })
      break;
      case 'pawnW5' : 
          this.setState({ pawnW5 : position })
      break;
      case 'pawnW6' : 
          this.setState({ pawnW6 : position })
      break;
      case 'pawnW7' : 
            this.setState({ pawnW7 : position })
        break;
        case 'pawnW8' : 
            this.setState({ pawnW8 : position })
    break;
    }
  }
  setPositionOfBlack = (whichOne,position) => {
    switch(whichOne){
      case 'rookB1' : 
        this.setState({ rookB1 : position })
      break;
      case 'rookB2' : 
          this.setState({ rookB2 : position })
      break;
      case 'bishopB1' : 
          this.setState({ bishopB1 : position })
      break;
      case 'bishopB2' : 
          this.setState({ bishopB2  : position })
      break;
      case 'knightB1' : 
        this.setState({ knightB1  : position })
      break;
      case 'knightB2' : 
          this.setState({ knightB2  : position })
      break;
      case 'kingB' : 
        this.setState({ kingB : position })
      break;
      case 'queenB' : 
          this.setState({ queenB : position })
      break;
      case 'pawnB1' : 
          this.setState({ pawnB1  : position })
      break;
      case 'pawnB2' : 
          this.setState({ pawnB2 : position })
      break;
      case 'pawnB3' : 
            this.setState({ pawnB3 : position })
        break;
      case 'pawnB4' : 
          this.setState({ pawnB4 : position })
      break;
      case 'pawnB5' : 
          this.setState({ pawnB5 : position })
      break;
      case 'pawnB6' : 
          this.setState({ pawnB6 : position })
      break;
      case 'pawnB7' : 
            this.setState({ pawnB7 : position })
        break;
        case 'pawnB8' : 
            this.setState({ pawnB8 : position })
    break;
    }
  }
  moveElement = (atWhichPosition) => {
    whiteOccupiedPositions = this.state.currentPostionsWhite
    blackOccupiedPositions = this.state.currentPostionsBlack
    availablePosition = this.state.availablePosition;
    if(availablePosition.includes(atWhichPosition)){
      whichOneToMove = availablePosition[availablePosition.length - 1]
      whoseElementToMove = availablePosition[availablePosition.length - 2]
      if(whoseElementToMove == this.state.whoseTurnToMove){
        movedElement = {
          whose : whichOneToMove , position : atWhichPosition
        }
        if(whoseElementToMove == 'white'){
          blackAtGivenPosition = blackOccupiedPositions.filter(function(obj){ return obj.position == atWhichPosition })
          if(blackAtGivenPosition.length > 0){
            indexOfElementToBeKilled = blackOccupiedPositions.indexOf(blackAtGivenPosition[0])
            killedElement = {
              whose : blackAtGivenPosition[0].whose, position : 'killed'
            }
            blackOccupiedPositions[indexOfElementToBeKilled] = killedElement
            this.killBlack(killedElement.whose)
            this.setNewPosition(whoseElementToMove,whichOneToMove,atWhichPosition)
            this.setState({ availablePosition : [] })
            if(killedElement.whose == 'kingB'){  this.setState({ isMatchEnded : true }) }
          }else{
            this.setNewPosition(whoseElementToMove,whichOneToMove,atWhichPosition)
            this.setState({ availablePosition : [] })          
          }
          elementToBeMoved = whiteOccupiedPositions.filter(function(obj){ return obj.whose == whichOneToMove })[0]
          indexOfElementToBeMoved = whiteOccupiedPositions.indexOf(elementToBeMoved)
          whiteOccupiedPositions[indexOfElementToBeMoved] = movedElement
          this.setState({ currentPostionsWhite : whiteOccupiedPositions })
          this.setState({ currentPostionsBlack : blackOccupiedPositions })
          this.setState({ whoseTurnToMove : "black" })
        }else{
          whiteAtGivenPosition = whiteOccupiedPositions.filter(function(obj){ return obj.position == atWhichPosition })
          if(whiteAtGivenPosition.length > 0){
            indexOfElementToBeKilled = whiteOccupiedPositions.indexOf(whiteAtGivenPosition[0])
            killedElement = {
              whose : whiteAtGivenPosition[0].whose, position : 'killed'
            }
            whiteOccupiedPositions[indexOfElementToBeKilled] = killedElement
            this.killWhite(killedElement.whose)
            this.setNewPosition(whoseElementToMove,whichOneToMove,atWhichPosition)
            this.setState({ availablePosition : [] })
            if(killedElement.whose == 'kingW'){ this.setState({ isMatchEnded : true }) }
          }else{
            this.setNewPosition(whoseElementToMove,whichOneToMove,atWhichPosition)
            this.setState({ availablePosition : [] })
          }
          elementToBeMoved = blackOccupiedPositions.filter(function(obj){ return obj.whose == whichOneToMove })[0]
          indexOfElementToBeMoved = blackOccupiedPositions.indexOf(elementToBeMoved)
          blackOccupiedPositions[indexOfElementToBeMoved] = movedElement
          this.setState({ currentPostionsWhite : whiteOccupiedPositions })
          this.setState({ currentPostionsBlack : blackOccupiedPositions })
          this.setState({ whoseTurnToMove : "white" })
        }
      }else{
        this.setState({ message : "Not your turn to move"})
      }
    }else{
      console.log("cannot move here")
    }
  }
  movePawns = (ofWhom,whichPawn,currentPostion) => {
    if(!this.state.isMatchEnded){
      this.setState({ message : "" })
      if(this.state.whoseTurnToMove == ofWhom){
        switch(ofWhom){
          case 'white':
              this.seeAheadForPawns('white',whichPawn,currentPostion)
            break;
            case 'black' : 
                this.seeAheadForPawns('black',whichPawn,currentPostion)    
            break;
        }
      }
    }else{
        this.setState({ message : "Match has been ended" })
    }
  }
  seeAheadForPawns = (forWhom,whichPawn,currentPostion) => {
    blackOccupiedPositions = this.state.currentPostionsBlack
    whiteOccupiedPositions = this.state.currentPostionsWhite
    probableAvailablePositions = [];
    currentPostion = Number(currentPostion)
    sureAvailablePositions = []
    mayBe1 = 0;mayBe2 = 0
    if(forWhom == "white"){
      mayBe1 = currentPostion + 9 ; mayBe2 = currentPostion + 7
      probableAvailablePositions.push(currentPostion+8)
      if(blackOccupiedPositions.filter(function(anObj){return anObj.position == mayBe1 }).length > 0){
        if(currentPostion % 8 != 0){
          sureAvailablePositions.push(mayBe1)
        }
      }
      if(blackOccupiedPositions.filter(function(anObj){return anObj.position == mayBe2 }).length > 0){
        if(currentPostion % 8 != 1){
          sureAvailablePositions.push(mayBe2)
        }
      }
      if(currentPostion >= 9 && currentPostion <= 16){
        if(blackOccupiedPositions.filter(function(anObj){ return anObj.position == currentPostion+16  }).length == 0 ){
          sureAvailablePositions.push(currentPostion+16)
        }
      }
      sureAvailablePositions = sureAvailablePositions.concat(this.seeIfAnyPresent('white',probableAvailablePositions))
      if(sureAvailablePositions.includes(this.state.kingB)){ this.playAlert() }
    }else if(forWhom == "black"){
      mayBe1 = currentPostion - 9 ; mayBe2 = currentPostion - 7
      probableAvailablePositions.push(currentPostion-8)
      if(whiteOccupiedPositions.filter(function(anObj){return anObj.position == mayBe1 }).length > 0){
        if(currentPostion % 8 != 1){
          sureAvailablePositions.push(mayBe1)
        }
      }
      if(whiteOccupiedPositions.filter(function(anObj){return anObj.position == mayBe2 }).length > 0){
        if(currentPostion % 8 != 0){
          sureAvailablePositions.push(mayBe2)
        }
      }
      if(currentPostion >= 49 && currentPostion <= 56){
        if(whiteOccupiedPositions.filter(function(anObj){ return anObj.position == currentPostion-16  }).length == 0 ){
          sureAvailablePositions.push(currentPostion-16)
        }
      }
      sureAvailablePositions = sureAvailablePositions.concat(this.seeIfAnyPresent('black',probableAvailablePositions))
      if(sureAvailablePositions.includes(this.state.kingW)){
        this.playAlert()
      }
    }
    console.log(sureAvailablePositions)
    sureAvailablePositions.push(forWhom)
    sureAvailablePositions.push(whichPawn)
    this.setState({ availablePosition : sureAvailablePositions })
  }
  seeIfAnyPresent = (forWhom,probablePositions) => {
    currentOccupiedPositions = []
    surePositions = []
    var i = 0 ;
    if(forWhom == 'black'){
      currentOccupiedPositions = this.state.currentPostionsWhite
    }else{
      currentOccupiedPositions = this.state.currentPostionsBlack
    }
    while(i<probablePositions.length){
      if(!currentOccupiedPositions.filter(function(anObj){return anObj.position == probablePositions[i] }).length){
        surePositions.push(probablePositions[i])
        }
      i++;
    }
    return surePositions
  }
  seeBiggerElements = (ofWhom,forWhichElement,whichOne,currentPosition) => {
    if(!this.state.isMatchEnded){
      this.setState({ message : "" })
      multipleForUp = null;multipleForDown = null;multipleForRight = null; multipleForLeft = null
      probablePositionsLeft = [];probablePositionsRight = [],probablePositionsTop = [];probablePositionsDown = []
      x = currentPosition % 8
      y = Math.floor( currentPosition / 8 ) 
      switch(forWhichElement){
        case 'rook':
          multipleForUp = 8;multipleForDown = 8;multipleForRight = 1 ; multipleForLeft = 1 
          if(x != 0){
            for(var i = 1 ; i <= 8-x ; i++){
              probablePositionsRight.push(currentPosition + i)
            }
            for(var i = 1 ; i <= x-1 ; i++){
              probablePositionsLeft.push(currentPosition-i)
            }
            for(var i = 1 ; i <= (7-y) ; i++){
              probablePositionsDown.push(currentPosition + multipleForDown*i)
            }
          }else{
            probablePositionsDown = []
            for(var i = 1 ; i <= 7 ; i++){
              probablePositionsLeft.push(currentPosition - i)
            }
            for(var i = 1 ; i <= 8 - y ; i++){
              probablePositionsDown.push(currentPosition + 8*i)
            }
          }
          for(var i = 1 ; i <= y ; i++){
            probablePositionsTop.push(currentPosition - multipleForUp*i)
          }
          break;
        case 'bishop':
          multipleForUp = 7;multipleForDown = 9; multipleForRight = 7; multipleForLeft = 9 
          if(x != 0 && currentPosition < 56){
            count = null
            count = 8 - x
            if( x >= (y + 1) ){
              count = 8 - x
            }else{
              count =count - ( y + 1 - x)
            }
            for(var i = 1; i <= count ; i++){
              probablePositionsDown.push(currentPosition + multipleForDown * i)
            }
          }
          if( x != 1 && currentPosition > 9 ){
            count = null
            if( x == 0 ){
              count = y - 1
            }else{
              if( x-2 >= y ){
                count = y
              }else{
                count = x - 1
              }
            }
            for(var i = 1 ; i <= count ; i++){
              probablePositionsLeft.push(currentPosition - multipleForLeft * i)
            }
          } 
          if( x != 0 && currentPosition > 8 ){
            count = null
            if( x == 1 ){
              count = y
            }else{
              if(y >= 8-x){
                count = 8 - x
              }else{
                count = y
              }
            }
            for(var i = 1 ; i <= count ; i++){
              probablePositionsTop.push(currentPosition - multipleForUp * i)
            }
          }  
          if( x != 1 && currentPosition < 57){
            count = null
            if(x == 0){
              count = 8 - y
            }else{
              if(y > 8-x){
                count = 7 - y
              }else{
                count = x - 1
              }
            }
            for(var i = 1 ; i <= count ; i++){
              probablePositionsRight.push(currentPosition + multipleForRight * i)
            }
          }    
          break;
      } 
      surePositions = this.givingSurePositions(ofWhom,probablePositionsLeft,probablePositionsRight,probablePositionsTop,probablePositionsDown)
      surePositions.push(ofWhom); surePositions.push(whichOne)
      this.setState({ availablePosition : surePositions })
      return surePositions
    }else{
      this.setState({ message : "Match has been ended" })
    }
  }
  runLoops = (forWhom,probablePositions) => {
    currentPositionOfWhite = this.state.currentPostionsWhite
    currentPositionOfBlack = this.state.currentPostionsBlack
    surePositions = []
    breakedAt = null
    if(forWhom == 'white'){
      for(var i = 0 ; i < probablePositions.length ; i++){
        obtained = currentPositionOfWhite.filter(function(obj){ 
          return obj.position == probablePositions[i]
        })
        if(obtained.length > 0){
            breakedAt = i
            break;
        }
        obt = currentPositionOfBlack.filter(function(obj){
          return obj.position == probablePositions[i]
        })
        if(obt.length > 0){
          if(obt[0].whose == 'kingB'){
            this.playAlert(); 
          }
          breakedAt = i+1
          break;
        }
        breakedAt = i+1
      }
    }else{
      for(var i = 0 ; i < probablePositions.length ; i++){
      if(currentPositionOfBlack.filter(function(obj){ 
        return obj.position == probablePositions[i]
        }).length > 0){
          breakedAt = i
          break;
      }
      obt = currentPositionOfWhite.filter(function(obj){
        return obj.position == probablePositions[i]
      })
      if(obt.length > 0){
        if(obt[0].whose == 'kingW'){
          this.playAlert(); 
        }
        breakedAt = i+1
        break;
      }
      breakedAt = i+1
    }
  }
  for(var i = 0 ; i < breakedAt ; i++){
    surePositions.push(probablePositions[i])
  }
    return surePositions
  }
  givingSurePositions = (forWhom,probablePositionsLeft,probablePositionsRight,probablePositionsTop,probablePositionsDown) => {
    surePositions = []
    surePositionsLeft = this.runLoops(forWhom,probablePositionsLeft)
    surePositionsRight = this.runLoops(forWhom,probablePositionsRight)
    surePositionsTop = this.runLoops(forWhom,probablePositionsTop)
    surePositionsDown = this.runLoops(forWhom,probablePositionsDown)
    surePositions = surePositionsLeft.concat(surePositionsRight)
    surePositions = surePositions.concat(surePositionsTop)
    surePositions = surePositions.concat(surePositionsDown)
    return surePositions
  }
  validatePositionForKnightOrKing = (ofWhom,atPosition) => {
    currentPositionOfWhite = this.state.currentPostionsWhite ; currentPositionOfBlack = this.state.currentPostionsBlack;
    if(ofWhom == 'white'){
      if( currentPositionOfWhite.filter(function(obj){
        return obj.position == atPosition
      }).length > 0 ){
        return false
      }
    }else{
      if( currentPositionOfBlack.filter(function(obj){
        return obj.position == atPosition
      }).length > 0 ){
        return false
      }
    }
    return true
  }
  seeKnight = (ofWhom,whichOne,currentPosition) => {
    if(!this.state.isMatchEnded){
      this.setState({ message : "" })
      surePositions = []
      y = Math.floor(currentPosition / 8); x = currentPosition % 8
      if(y > 1 && x != 0 && this.validatePositionForKnightOrKing(ofWhom,(currentPosition-15))){ surePositions.push(currentPosition-15) }
      if(y < 6 && x != 0 && this.validatePositionForKnightOrKing(ofWhom,(currentPosition+17))){ surePositions.push(currentPosition+17) }
      if(y > 0 && (x < 7 && x != 0) && this.validatePositionForKnightOrKing(ofWhom,(currentPosition-6))){ surePositions.push(currentPosition-6) }
      if(y < 7 && (x < 7 && x != 0) && this.validatePositionForKnightOrKing(ofWhom,(currentPosition+10))){ surePositions.push(currentPosition+10) }
      if(currentPosition > 16 && (x > 1 || x == 0) && this.validatePositionForKnightOrKing(ofWhom,(currentPosition-17))){ surePositions.push(currentPosition-17) }
      if(currentPosition < 49 && (x > 1 || x == 0) && this.validatePositionForKnightOrKing(ofWhom,(currentPosition+15))){ surePositions.push(currentPosition+15) }
      if(currentPosition > 8 && (x > 2 || x == 0) && this.validatePositionForKnightOrKing(ofWhom,(currentPosition-10))){ surePositions.push(currentPosition-10) }
      if(currentPosition < 57 && (x > 2 || x == 0) && this.validatePositionForKnightOrKing(ofWhom,(currentPosition+6))){ surePositions.push(currentPosition+6) }
      surePositions.push(ofWhom); surePositions.push(whichOne)
      this.setState({ availablePosition : surePositions })
    }else{
      this.setState({ message : "Match has been ended" })
    }
  }
  seeQueen = (ofWhom,whichOne,currentPosition) => {
    if(!this.state.isMatchEnded){
      surePositions = this.seeBiggerElements(ofWhom,'rook',whichOne,currentPosition)
      surePositions = surePositions.concat(this.seeBiggerElements(ofWhom,'bishop',whichOne,currentPosition))
      this.setState({ availablePosition : surePositions })     
    }else{
      this.setState({ message : "Match Has Been Ended" })
    }
  }
  seeKing = (ofWhom,whichOne,currentPosition) => {
    if(!this.state.isMatchEnded){
      this.setState({ message : "" })
      surePositions = []
      x = currentPosition % 8
      if(currentPosition > 8 && x!= 0 && this.validatePositionForKnightOrKing(ofWhom,currentPosition-7)){ surePositions.push(currentPosition-7) }
      if(currentPosition < 57 && x != 0 && this.validatePositionForKnightOrKing(ofWhom,currentPosition+9)){ surePositions.push(currentPosition+9) }
      if(x != 0 && this.validatePositionForKnightOrKing(ofWhom,currentPosition+1)){ surePositions.push(currentPosition+1) }
      if(currentPosition > 8 && this.validatePositionForKnightOrKing(ofWhom,currentPosition-8)){ surePositions.push(currentPosition-8)  }
      if(currentPosition < 57 && this.validatePositionForKnightOrKing(ofWhom,currentPosition+8)){ surePositions.push(currentPosition+8) }
      if(x != 1 && this.validatePositionForKnightOrKing(ofWhom,currentPosition-1)){ surePositions.push(currentPosition-1)  }
      if(currentPosition > 8 && x != 1 && this.validatePositionForKnightOrKing(ofWhom,currentPosition-9)){ surePositions.push(currentPosition-9) }
      if(currentPosition < 57 && x != 1 && this.validatePositionForKnightOrKing(ofWhom,currentPosition+7)){ surePositions.push(currentPosition+7) }
      surePositions.push(ofWhom); surePositions.push(whichOne)
      this.setState({ availablePosition : surePositions })
    }else{
      this.setState({ message : "Match has been ended" })
    }
  } 
  returnIcons = (ofWhom,who,atPosition) => {
    switch(ofWhom){
        case 'white' : 
        switch(who){
            case 'rookW1' : 
                if(this.state.rookW1 == atPosition){
                return   <MaterialCommunityIcons name="chess-rook" onPress={()=>{this.seeBiggerElements('white','rook','rookW1',atPosition)}} style={styles.icon} color="white" size={35} />
                }
            break;
            case 'rookW2' : 
                if(this.state.rookW2 == atPosition){
                return   <MaterialCommunityIcons name="chess-rook" onPress={()=>{this.seeBiggerElements('white','rook','rookW2',atPosition)}} style={styles.icon} color="white" size={35} />
                }
            break;
            case 'bishopW1' : 
                if(this.state.bishopW1 == atPosition){
                return   <MaterialCommunityIcons name="chess-bishop" onPress={()=>{this.seeBiggerElements('white','bishop','bishopW1',atPosition)}} style={styles.icon} color="white" size={35} />
                }
            break;
            case 'bishopW2' : 
                if(this.state.bishopW2 == atPosition){
                return   <MaterialCommunityIcons name="chess-bishop" onPress={()=>{this.seeBiggerElements('white','bishop','bishopW2',atPosition)}} style={styles.icon} color="white" size={35} />
                }
            break;
            case 'knightW1' : 
            if(this.state.knightW1 == atPosition){
                return   <MaterialCommunityIcons name="chess-knight" onPress={()=>{this.seeKnight('white','knightW1',atPosition)}} style={styles.icon} color="white" size={35} />
            }
            break;
            case 'knightW2' : 
                if(this.state.knightW2 == atPosition){
                return   <MaterialCommunityIcons name="chess-knight" onPress={()=>{this.seeKnight('white','knightW2',atPosition)}} style={styles.icon} color="white" size={35} />
                }
            break;
            case 'kingW' : 
            if(this.state.kingW == atPosition){
                return   <MaterialCommunityIcons name="chess-king" onPress={()=>{this.seeKing('white','kingW',atPosition)}} style={styles.icon} color="white" size={35} />
            }
            break;
            case 'queenW' : 
            if(this.state.queenW == atPosition){
                return <MaterialCommunityIcons name="chess-queen" onPress={()=>{this.seeQueen('white','queenW',atPosition)}} style={styles.icon} color="white" size={35} />
            }
            break;
            case 'pawnW1' : 
            if(this.state.pawnW1 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('white','pawnW1',atPosition)}} name="chess-pawn" style={styles.icon} color="white" size={35} />
            }
            break;
            case 'pawnW2' : 
            if(this.state.pawnW2 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('white','pawnW2',atPosition)}} name="chess-pawn" style={styles.icon} color="white" size={35} />
            }
            break;
            case 'pawnW3' : 
                if(this.state.pawnW3 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('white','pawnW3',atPosition)}} name="chess-pawn" style={styles.icon} color="white" size={35} />
                }
            break;
            case 'pawnW4' : 
                if(this.state.pawnW4 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('white','pawnW4',atPosition)}} name="chess-pawn" style={styles.icon} color="white" size={35} />
                }
            break;
            case 'pawnW5' : 
            if(this.state.pawnW5 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('white','pawnW5',atPosition)}} name="chess-pawn" style={styles.icon} color="white" size={35} />
            }
            break;
            case 'pawnW6' : 
            if(this.state.pawnW6 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('white','pawnW6',atPosition)}} name="chess-pawn" style={styles.icon} color="white" size={35} />
            }
            break;
            case 'pawnW7' : 
                if(this.state.pawnW7 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('white','pawnW7',atPosition)}} name="chess-pawn" style={styles.icon} color="white" size={35} />
                }
            break;
            case 'pawnW8' : 
                if(this.state.pawnW8 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('white','pawnW8',atPosition)}} name="chess-pawn" style={styles.icon} color="white" size={35} />
                }
            break;
            }
            break;
            case 'black' : 
            switch(who){
            case 'rookB1' : 
                if(this.state.rookB1 == atPosition){
                return   <MaterialCommunityIcons name="chess-rook" onPress={()=>{this.seeBiggerElements('black','rook','rookB1',atPosition)}} style={styles.icon} color="black" size={35} />
                }
            break;
            case 'rookB2' : 
                if(this.state.rookB2 == atPosition){
                return   <MaterialCommunityIcons name="chess-rook" onPress={()=>{this.seeBiggerElements('black','rook','rookB2',atPosition)}} style={styles.icon} color="black" size={35} />
                }
            break;
            case 'bishopB1' : 
                if(this.state.bishopB1 == atPosition){
                return   <MaterialCommunityIcons name="chess-bishop" onPress={()=>{this.seeBiggerElements('black','bishop','bishopB1',atPosition)}} style={styles.icon} color="black" size={35} />
                }
            break;
            case 'bishopB2' : 
                if(this.state.bishopB2 == atPosition){
                return   <MaterialCommunityIcons name="chess-bishop" onPress={()=>{this.seeBiggerElements('black','bishop','bishopB2',atPosition)}} style={styles.icon} color="black" size={35} />
                }
            break;
            case 'knightB1' : 
            if(this.state.knightB1 == atPosition){
                return   <MaterialCommunityIcons name="chess-knight" onPress={()=>{this.seeKnight('black','knightB1',atPosition)}} style={styles.icon} color="black" size={35} />
            }
            break;
            case 'knightB2' : 
                if(this.state.knightB2 == atPosition){
                return   <MaterialCommunityIcons name="chess-knight" onPress={()=>{this.seeKnight('black','knightB2',atPosition)}} style={styles.icon} color="black" size={35} />
                }
            break;
            case 'kingB' : 
            if(this.state.kingB == atPosition){
                return   <MaterialCommunityIcons name="chess-king" onPress={()=>{this.seeKing('black','kingB',atPosition)}} style={styles.icon} color="black" size={35} />
            }
            break;
            case 'queenB' : 
                if(this.state.queenB == atPosition){
                return   <MaterialCommunityIcons name="chess-queen" onPress={()=>{this.seeQueen('black','queenB',atPosition)}} style={styles.icon} color="black" size={35} />
                }
            break;
            case 'pawnB1' : 
            if(this.state.pawnB1 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('black','pawnB1',atPosition)}} name="chess-pawn" style={styles.icon} color="black" size={35} />
            }
            break;
            case 'pawnB2' : 
                if(this.state.pawnB2 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('black','pawnB2',atPosition)}} name="chess-pawn" style={styles.icon} color="black" size={35} />
                }
            break;
            case 'pawnB3' : 
                if(this.state.pawnB3 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('black','pawnB3',atPosition)}} name="chess-pawn" style={styles.icon} color="black" size={35} />
                }
            break;
            case 'pawnB4' : 
                if(this.state.pawnB4 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('black','pawnB4',atPosition)}} name="chess-pawn" style={styles.icon} color="black" size={35} />
                }
            break;
            case 'pawnB5' : 
                if(this.state.pawnB5 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('black','pawnB5',atPosition)}} name="chess-pawn" style={styles.icon} color="black" size={35} />
                }
            break;
            case 'pawnB6' : 
                if(this.state.pawnB6 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('black','pawnB6',atPosition)}} name="chess-pawn" style={styles.icon} color="black" size={35} />
                }
            break;
            case 'pawnB7' : 
                if(this.state.pawnB7 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('black','pawnB7',atPosition)}} name="chess-pawn" style={styles.icon} color="black" size={35} />
                }
            break;
            case 'pawnB8' : 
                if(this.state.pawnB8 == atPosition){
                return <MaterialCommunityIcons onPress={()=>{this.movePawns('black','pawnB8',atPosition)}} name="chess-pawn" style={styles.icon} color="black" size={35} />
                }
            break;
            }
            break;
    }
  }
  returnWhole = (forWhichRow) => {
    availablePosition = this.state.availablePosition
    return(
        <View style={styles.row}>
        <TouchableOpacity style={{flex : 1}} onPress={()=>{this.moveElement(forWhichRow * 8 + 1)}}>
            <View style={[ forWhichRow % 2 == 0 ? styles.entryOdd : styles.entryEven, availablePosition.includes(forWhichRow * 8 + 1) ? { backgroundColor : "red" } : {} ]}>
                {this.returnIcons('white','rookW1',forWhichRow*8 + 1)}{this.returnIcons('white','rookW2',forWhichRow*8 + 1)}{this.returnIcons('white','bishopW1',forWhichRow*8 + 1)}{this.returnIcons('white','bishopW2',forWhichRow*8 + 1)}
                {this.returnIcons('white','knightW1',forWhichRow*8 + 1)}{this.returnIcons('white','knightW2',forWhichRow*8 + 1)}{this.returnIcons('white','kingW',forWhichRow*8 + 1)}{this.returnIcons('white','queenW',forWhichRow*8 + 1)}
                {this.returnIcons('black','rookB1',forWhichRow*8 + 1)}{this.returnIcons('black','rookB2',forWhichRow*8 + 1)}{this.returnIcons('black','bishopB1',forWhichRow*8 + 1)}{this.returnIcons('black','bishopB2',forWhichRow*8 + 1)}
                {this.returnIcons('black','knightB1',forWhichRow*8 + 1)}{this.returnIcons('black','knightB2',forWhichRow*8 + 1)}{this.returnIcons('black','kingB',forWhichRow*8 + 1)}{this.returnIcons('black','queenB',forWhichRow*8 + 1)}
                {this.returnIcons('black','pawnB1',forWhichRow*8 + 1)}{this.returnIcons('black','pawnB2',forWhichRow*8 + 1)}{this.returnIcons('black','pawnB3',forWhichRow*8 + 1)}{this.returnIcons('black','pawnB4',forWhichRow*8 + 1)}
                {this.returnIcons('black','pawnB5',forWhichRow*8 + 1)}{this.returnIcons('black','pawnB6',forWhichRow*8 + 1)}{this.returnIcons('black','pawnB7',forWhichRow*8 + 1)}{this.returnIcons('black','pawnB8',forWhichRow*8 + 1)}
                {this.returnIcons('white','pawnW1',forWhichRow*8 + 1)}{this.returnIcons('white','pawnW2',forWhichRow*8 + 1)}{this.returnIcons('white','pawnW3',forWhichRow*8 + 1)}{this.returnIcons('white','pawnW4',forWhichRow*8 + 1)}
                {this.returnIcons('white','pawnW5',forWhichRow*8 + 1)}{this.returnIcons('white','pawnW6',forWhichRow*8 + 1)}{this.returnIcons('white','pawnW7',forWhichRow*8 + 1)}{this.returnIcons('white','pawnW8',forWhichRow*8 + 1)}  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{flex : 1}} onPress={()=>{this.moveElement(forWhichRow * 8 + 2)}}>
            <View style={[forWhichRow % 2 != 0 ? styles.entryOdd : styles.entryEven, availablePosition.includes(forWhichRow * 8 + 2) ? { backgroundColor : "red" } : {} ]}>
                {this.returnIcons('white','rookW1',forWhichRow*8 + 2)}{this.returnIcons('white','rookW2',forWhichRow*8 + 2)}{this.returnIcons('white','bishopW1',forWhichRow*8 + 2)}{this.returnIcons('white','bishopW2',forWhichRow*8 + 2)}
                {this.returnIcons('white','knightW1',forWhichRow*8 + 2)}{this.returnIcons('white','knightW2',forWhichRow*8 + 2)}{this.returnIcons('white','kingW',forWhichRow*8 + 2)}{this.returnIcons('white','queenW',forWhichRow*8 + 2)}
                {this.returnIcons('black','rookB1',forWhichRow*8 + 2)}{this.returnIcons('black','rookB2',forWhichRow*8 + 2)}{this.returnIcons('black','bishopB1',forWhichRow*8 + 2)}{this.returnIcons('black','bishopB2',forWhichRow*8 + 2)}
                {this.returnIcons('black','knightB1',forWhichRow*8 + 2)}{this.returnIcons('black','knightB2',forWhichRow*8 + 2)}{this.returnIcons('black','kingB',forWhichRow*8 + 2)}{this.returnIcons('black','queenB',forWhichRow*8 + 2)}
                {this.returnIcons('black','pawnB1',forWhichRow*8 + 2)}{this.returnIcons('black','pawnB2',forWhichRow*8 + 2)}{this.returnIcons('black','pawnB3',forWhichRow*8 + 2)}{this.returnIcons('black','pawnB4',forWhichRow*8 + 2)}
                {this.returnIcons('black','pawnB5',forWhichRow*8 + 2)}{this.returnIcons('black','pawnB6',forWhichRow*8 + 2)}{this.returnIcons('black','pawnB7',forWhichRow*8 + 2)}{this.returnIcons('black','pawnB8',forWhichRow*8 + 2)}
                {this.returnIcons('white','pawnW1',forWhichRow*8 + 2)}{this.returnIcons('white','pawnW2',forWhichRow*8 + 2)}{this.returnIcons('white','pawnW3',forWhichRow*8 + 2)}{this.returnIcons('white','pawnW4',forWhichRow*8 + 2)}
                {this.returnIcons('white','pawnW5',forWhichRow*8 + 2)}{this.returnIcons('white','pawnW6',forWhichRow*8 + 2)}{this.returnIcons('white','pawnW7',forWhichRow*8 + 2)}{this.returnIcons('white','pawnW8',forWhichRow*8 + 2)}
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{flex : 1}} onPress={()=>{this.moveElement(forWhichRow * 8 + 3)}}>
            <View style={[forWhichRow % 2 == 0 ? styles.entryOdd : styles.entryEven, availablePosition.includes(forWhichRow * 8 + 3) ? { backgroundColor : "red" } : {} ]}>
                {this.returnIcons('white','rookW1',forWhichRow*8 + 3)}{this.returnIcons('white','rookW2',forWhichRow*8 + 3)}{this.returnIcons('white','bishopW1',forWhichRow*8 + 3)}{this.returnIcons('white','bishopW2',forWhichRow*8 + 3)}
                {this.returnIcons('white','knightW1',forWhichRow*8 + 3)}{this.returnIcons('white','knightW2',forWhichRow*8 + 3)}{this.returnIcons('white','kingW',forWhichRow*8 + 3)}{this.returnIcons('white','queenW',forWhichRow*8 + 3)}
                {this.returnIcons('black','rookB1',forWhichRow*8 + 3)}{this.returnIcons('black','rookB2',forWhichRow*8 + 3)}{this.returnIcons('black','bishopB1',forWhichRow*8 + 3)}{this.returnIcons('black','bishopB2',forWhichRow*8 + 3)}
                {this.returnIcons('black','knightB1',forWhichRow*8 + 3)}{this.returnIcons('black','knightB2',forWhichRow*8 + 3)}{this.returnIcons('black','kingB',forWhichRow*8 + 3)}{this.returnIcons('black','queenB',forWhichRow*8 + 3)}
                {this.returnIcons('black','pawnB1',forWhichRow*8 + 3)}{this.returnIcons('black','pawnB2',forWhichRow*8 + 3)}{this.returnIcons('black','pawnB3',forWhichRow*8 + 3)}{this.returnIcons('black','pawnB4',forWhichRow*8 + 3)}
                {this.returnIcons('black','pawnB5',forWhichRow*8 + 3)}{this.returnIcons('black','pawnB6',forWhichRow*8 + 3)}{this.returnIcons('black','pawnB7',forWhichRow*8 + 3)}{this.returnIcons('black','pawnB8',forWhichRow*8 + 3)}
                {this.returnIcons('white','pawnW1',forWhichRow*8 + 3)}{this.returnIcons('white','pawnW2',forWhichRow*8 + 3)}{this.returnIcons('white','pawnW3',forWhichRow*8 + 3)}{this.returnIcons('white','pawnW4',forWhichRow*8 + 3)}
                {this.returnIcons('white','pawnW5',forWhichRow*8 + 3)}{this.returnIcons('white','pawnW6',forWhichRow*8 + 3)}{this.returnIcons('white','pawnW7',forWhichRow*8 + 3)}{this.returnIcons('white','pawnW8',forWhichRow*8 + 3)}  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{flex : 1}} onPress={()=>{this.moveElement(forWhichRow * 8 + 4)}}>
            <View style={[forWhichRow % 2 != 0 ? styles.entryOdd : styles.entryEven, availablePosition.includes(forWhichRow * 8 + 4) ? { backgroundColor : "red" } : {} ]}>
                {this.returnIcons('white','rookW1',forWhichRow*8 + 4)}{this.returnIcons('white','rookW2',forWhichRow*8 + 4)}{this.returnIcons('white','bishopW1',forWhichRow*8 + 4)}{this.returnIcons('white','bishopW2',forWhichRow*8 + 4)}
                {this.returnIcons('white','knightW1',forWhichRow*8 + 4)}{this.returnIcons('white','knightW2',forWhichRow*8 + 4)}{this.returnIcons('white','kingW',forWhichRow*8 + 4)}{this.returnIcons('white','queenW',forWhichRow*8 + 4)}
                {this.returnIcons('black','rookB1',forWhichRow*8 + 4)}{this.returnIcons('black','rookB2',forWhichRow*8 + 4)}{this.returnIcons('black','bishopB1',forWhichRow*8 + 4)}{this.returnIcons('black','bishopB2',forWhichRow*8 + 4)}
                {this.returnIcons('black','knightB1',forWhichRow*8 + 4)}{this.returnIcons('black','knightB2',forWhichRow*8 + 4)}{this.returnIcons('black','kingB',forWhichRow*8 + 4)}{this.returnIcons('black','queenB',forWhichRow*8 + 4)}
                {this.returnIcons('black','pawnB1',forWhichRow*8 + 4)}{this.returnIcons('black','pawnB2',forWhichRow*8 + 4)}{this.returnIcons('black','pawnB3',forWhichRow*8 + 4)}{this.returnIcons('black','pawnB4',forWhichRow*8 + 4)}
                {this.returnIcons('black','pawnB5',forWhichRow*8 + 4)}{this.returnIcons('black','pawnB6',forWhichRow*8 + 4)}{this.returnIcons('black','pawnB7',forWhichRow*8 + 4)}{this.returnIcons('black','pawnB8',forWhichRow*8 + 4)}
                {this.returnIcons('white','pawnW1',forWhichRow*8 + 4)}{this.returnIcons('white','pawnW2',forWhichRow*8 + 4)}{this.returnIcons('white','pawnW3',forWhichRow*8 + 4)}{this.returnIcons('white','pawnW4',forWhichRow*8 + 4)}
                {this.returnIcons('white','pawnW5',forWhichRow*8 + 4)}{this.returnIcons('white','pawnW6',forWhichRow*8 + 4)}{this.returnIcons('white','pawnW7',forWhichRow*8 + 4)}{this.returnIcons('white','pawnW8',forWhichRow*8 + 4)}
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{flex : 1}} onPress={()=>{this.moveElement(forWhichRow * 8 + 5)}}>
            <View style={[forWhichRow % 2 == 0 ? styles.entryOdd : styles.entryEven, availablePosition.includes(forWhichRow * 8 + 5) ? { backgroundColor : "red" } : {} ]}>
                {this.returnIcons('white','rookW1',forWhichRow*8 + 5)}{this.returnIcons('white','rookW2',forWhichRow*8 + 5)}{this.returnIcons('white','bishopW1',forWhichRow*8 + 5)}{this.returnIcons('white','bishopW2',forWhichRow*8 + 5)}
                {this.returnIcons('white','knightW1',forWhichRow*8 + 5)}{this.returnIcons('white','knightW2',forWhichRow*8 + 5)}{this.returnIcons('white','kingW',forWhichRow*8 + 5)}{this.returnIcons('white','queenW',forWhichRow*8 + 5)}
                {this.returnIcons('black','rookB1',forWhichRow*8 + 5)}{this.returnIcons('black','rookB2',forWhichRow*8 + 5)}{this.returnIcons('black','bishopB1',forWhichRow*8 + 5)}{this.returnIcons('black','bishopB1',forWhichRow*8 + 5)}
                {this.returnIcons('black','knightB1',forWhichRow*8 + 5)}{this.returnIcons('black','knightB2',forWhichRow*8 + 5)}{this.returnIcons('black','kingB',forWhichRow*8 + 5)}{this.returnIcons('black','queenB',forWhichRow*8 + 5)}
                {this.returnIcons('black','pawnB1',forWhichRow*8 + 5)}{this.returnIcons('black','pawnB2',forWhichRow*8 + 5)}{this.returnIcons('black','pawnB3',forWhichRow*8 + 5)}{this.returnIcons('black','pawnB4',forWhichRow*8 + 5)}
                {this.returnIcons('black','pawnB5',forWhichRow*8 + 5)}{this.returnIcons('black','pawnB6',forWhichRow*8 + 5)}{this.returnIcons('black','pawnB7',forWhichRow*8 + 5)}{this.returnIcons('black','pawnB8',forWhichRow*8 + 5)}
                {this.returnIcons('white','pawnW1',forWhichRow*8 + 5)}{this.returnIcons('white','pawnW2',forWhichRow*8 + 5)}{this.returnIcons('white','pawnW3',forWhichRow*8 + 5)}{this.returnIcons('white','pawnW4',forWhichRow*8 + 5)}
                {this.returnIcons('white','pawnW5',forWhichRow*8 + 5)}{this.returnIcons('white','pawnW6',forWhichRow*8 + 5)}{this.returnIcons('white','pawnW7',forWhichRow*8 + 5)}{this.returnIcons('white','pawnW8',forWhichRow*8 + 5)}  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{flex : 1}} onPress={()=>{this.moveElement(forWhichRow * 8 + 6)}}>
            <View style={[forWhichRow % 2 != 0 ? styles.entryOdd : styles.entryEven, availablePosition.includes(forWhichRow * 8 + 6) ? { backgroundColor : "red" } : {} ]}>
                {this.returnIcons('white','rookW1',forWhichRow*8 + 6)}{this.returnIcons('white','rookW2',forWhichRow*8 + 6)}{this.returnIcons('white','bishopW1',forWhichRow*8 + 6)}{this.returnIcons('white','bishopW2',forWhichRow*8 + 6)}
                {this.returnIcons('white','knightW1',forWhichRow*8 + 6)}{this.returnIcons('white','knightW2',forWhichRow*8 + 6)}{this.returnIcons('white','kingW',forWhichRow*8 + 6)}{this.returnIcons('white','queenW',forWhichRow*8 + 6)}
                {this.returnIcons('black','rookB1',forWhichRow*8 + 6)}{this.returnIcons('black','rookB2',forWhichRow*8 + 6)}{this.returnIcons('black','bishopB1',forWhichRow*8 + 6)}{this.returnIcons('black','bishopB2',forWhichRow*8 + 6)}
                {this.returnIcons('black','knightB1',forWhichRow*8 + 6)}{this.returnIcons('black','knightB2',forWhichRow*8 + 6)}{this.returnIcons('black','kingB',forWhichRow*8 + 6)}{this.returnIcons('black','queenB',forWhichRow*8 + 6)}
                {this.returnIcons('black','pawnB1',forWhichRow*8 + 6)}{this.returnIcons('black','pawnB2',forWhichRow*8 + 6)}{this.returnIcons('black','pawnB3',forWhichRow*8 + 6)}{this.returnIcons('black','pawnB4',forWhichRow*8 + 6)}
                {this.returnIcons('black','pawnB5',forWhichRow*8 + 6)}{this.returnIcons('black','pawnB6',forWhichRow*8 + 6)}{this.returnIcons('black','pawnB7',forWhichRow*8 + 6)}{this.returnIcons('black','pawnB8',forWhichRow*8 + 6)}
                {this.returnIcons('white','pawnW1',forWhichRow*8 + 6)}{this.returnIcons('white','pawnW2',forWhichRow*8 + 6)}{this.returnIcons('white','pawnW3',forWhichRow*8 + 6)}{this.returnIcons('white','pawnW4',forWhichRow*8 + 6)}
                {this.returnIcons('white','pawnW5',forWhichRow*8 + 6)}{this.returnIcons('white','pawnW6',forWhichRow*8 + 6)}{this.returnIcons('white','pawnW7',forWhichRow*8 + 6)}{this.returnIcons('white','pawnW8',forWhichRow*8 + 6)}
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{flex : 1}} onPress={()=>{this.moveElement(forWhichRow * 8 + 7)}}>
            <View style={[forWhichRow % 2 == 0 ? styles.entryOdd : styles.entryEven, availablePosition.includes(forWhichRow * 8 + 7) ? { backgroundColor : "red" } : {} ]}>
                {this.returnIcons('white','rookW1',forWhichRow*8 + 7)}{this.returnIcons('white','rookW2',forWhichRow*8 + 7)}{this.returnIcons('white','bishopW1',forWhichRow*8 + 7)}{this.returnIcons('white','bishopW2',forWhichRow*8 + 7)}
                {this.returnIcons('white','knightW1',forWhichRow*8 + 7)}{this.returnIcons('white','knightW2',forWhichRow*8 + 7)}{this.returnIcons('white','kingW',forWhichRow*8 + 7)}{this.returnIcons('white','queenW',forWhichRow*8 + 7)}
                {this.returnIcons('black','rookB1',forWhichRow*8 + 7)}{this.returnIcons('black','rookB2',forWhichRow*8 + 7)}{this.returnIcons('black','bishopB1',forWhichRow*8 + 7)}{this.returnIcons('black','bishopB2',forWhichRow*8 + 7)}
                {this.returnIcons('black','knightB1',forWhichRow*8 + 7)}{this.returnIcons('black','knightB2',forWhichRow*8 + 7)}{this.returnIcons('black','kingB',forWhichRow*8 + 7)}{this.returnIcons('black','queenB',forWhichRow*8 + 7)}
                {this.returnIcons('black','pawnB1',forWhichRow*8 + 7)}{this.returnIcons('black','pawnB2',forWhichRow*8 + 7)}{this.returnIcons('black','pawnB3',forWhichRow*8 + 7)}{this.returnIcons('black','pawnB4',forWhichRow*8 + 7)}
                {this.returnIcons('black','pawnB5',forWhichRow*8 + 7)}{this.returnIcons('black','pawnB6',forWhichRow*8 + 7)}{this.returnIcons('black','pawnB7',forWhichRow*8 + 7)}{this.returnIcons('black','pawnB8',forWhichRow*8 + 7)}
                {this.returnIcons('white','pawnW1',forWhichRow*8 + 7)}{this.returnIcons('white','pawnW2',forWhichRow*8 + 7)}{this.returnIcons('white','pawnW3',forWhichRow*8 + 7)}{this.returnIcons('white','pawnW4',forWhichRow*8 + 7)}
                {this.returnIcons('white','pawnW5',forWhichRow*8 + 7)}{this.returnIcons('white','pawnW6',forWhichRow*8 + 7)}{this.returnIcons('white','pawnW7',forWhichRow*8 + 7)}{this.returnIcons('white','pawnW8',forWhichRow*8 + 7)}  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{flex : 1}} onPress={()=>{this.moveElement(forWhichRow * 8 + 8)}}>
            <View style={[forWhichRow % 2 != 0 ? styles.entryOdd : styles.entryEven, availablePosition.includes(forWhichRow * 8 + 8) ? { backgroundColor : "red" } : {} ]}>
                {this.returnIcons('white','rookW1',forWhichRow*8 + 8)}{this.returnIcons('white','rookW2',forWhichRow*8 + 8)}{this.returnIcons('white','bishopW1',forWhichRow*8 + 8)}{this.returnIcons('white','bishopW2',forWhichRow*8 + 8)}
                {this.returnIcons('white','knightW1',forWhichRow*8 + 8)}{this.returnIcons('white','knightW2',forWhichRow*8 + 8)}{this.returnIcons('white','kingW',forWhichRow*8 + 8)}{this.returnIcons('white','queenW',forWhichRow*8 + 8)}
                {this.returnIcons('black','rookB1',forWhichRow*8 + 8)}{this.returnIcons('black','rookB2',forWhichRow*8 + 8)}{this.returnIcons('black','bishopB1',forWhichRow*8 + 8)}{this.returnIcons('black','bishopB2',forWhichRow*8 + 8)}
                {this.returnIcons('black','knightB1',forWhichRow*8 + 8)}{this.returnIcons('black','knightB2',forWhichRow*8 + 8)}{this.returnIcons('black','kingB',forWhichRow*8 + 8)}{this.returnIcons('black','queenB',forWhichRow*8 + 8)}
                {this.returnIcons('black','pawnB1',forWhichRow*8 + 8)}{this.returnIcons('black','pawnB2',forWhichRow*8 + 8)}{this.returnIcons('black','pawnB3',forWhichRow*8 + 8)}{this.returnIcons('black','pawnB4',forWhichRow*8 + 8)}
                {this.returnIcons('black','pawnB5',forWhichRow*8 + 8)}{this.returnIcons('black','pawnB6',forWhichRow*8 + 8)}{this.returnIcons('black','pawnB7',forWhichRow*8 + 8)}{this.returnIcons('black','pawnB8',forWhichRow*8 + 8)}
                {this.returnIcons('white','pawnW1',forWhichRow*8 + 8)}{this.returnIcons('white','pawnW2',forWhichRow*8 + 8)}{this.returnIcons('white','pawnW3',forWhichRow*8 + 8)}{this.returnIcons('white','pawnW4',forWhichRow*8 + 8)}
                {this.returnIcons('white','pawnW5',forWhichRow*8 + 8)}{this.returnIcons('white','pawnW6',forWhichRow*8 + 8)}{this.returnIcons('white','pawnW7',forWhichRow*8 + 8)}{this.returnIcons('white','pawnW8',forWhichRow*8 + 8)}
            </View>           
        </TouchableOpacity>
        </View>
        )   
  }
  killedSpace = (ofWhom) => {
    if(ofWhom == 'white'){
      return(
        <View style={styles.killedRow}>
          <View style={styles.row1}>
              <View style={{flex : 1}}>
              {this.returnIcons('white','pawnW1','killed')}
              </View>
              <View style={{flex : 1}}>
              {this.returnIcons('white','pawnW2','killed')}
              </View>
              <View style={{flex : 1}}>
              {this.returnIcons('white','pawnW3','killed')}
              </View>
              <View style={{flex : 1}}>
              {this.returnIcons('white','pawnW4','killed')}
              </View>
              <View style={{flex : 1}}>
              {this.returnIcons('white','pawnW5','killed')}
              </View>
              <View style={{flex : 1}}>
              {this.returnIcons('white','pawnW6','killed')}
              </View>
              <View style={{flex : 1}}>
              {this.returnIcons('white','pawnW7','killed')}
              </View>
              <View style={{flex : 1}}>
              {this.returnIcons('white','pawnW8','killed')}    
              </View>
          </View>
          <View style={styles.row1}>
            <View style={{flex : 1}}>
            {this.returnIcons('white','rookW1','killed')}
            </View>
            <View style={{flex : 1}}>
            {this.returnIcons('white','knightW1','killed')}
            </View>
            <View style={{flex : 1}}>
            {this.returnIcons('white','bishopW1','killed')}
            </View>
            <View style={{flex : 1}}>
            {this.returnIcons('white','kingW','killed')}
            </View>
            <View style={{flex : 1}}>
            {this.returnIcons('white','queenW','killed')}
            </View>
            <View style={{flex : 1}}>
            {this.returnIcons('white','bishopW2','killed')}
            </View>
            <View style={{flex : 1}}>
            {this.returnIcons('white','knightW2','killed')}
            </View>
            <View style={{flex : 1}}>
            {this.returnIcons('white','rookW2','killed')}
            </View>
          </View>
        </View>
      )
    }else{
      return(
        <View style={styles.killedRow}>
          <View style={styles.row1}>
            <View style={{flex : 1}}>
              {this.returnIcons('black','rookB1','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','knightB1','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','bishopB1','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','kingB','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','queenB','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','bishopB2','killed')}
            </View>
            <View style={{flex : 1}}>              
              {this.returnIcons('black','knightB2','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','rookB2','killed')}              
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{flex : 1}}>
              {this.returnIcons('black','pawnB1','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','pawnB2','killed')}              
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','pawnB3','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','pawnB4','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','pawnB5','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','pawnB6','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','pawnB7','killed')}
            </View>
            <View style={{flex : 1}}>
              {this.returnIcons('black','pawnB8','killed')}              
            </View>
            </View>
        </View>
      )
    }   
  }
  async playAlert(){
    soundObject.unloadAsync();
    await soundObject.loadAsync(require('./assets/alert.mp3'));
    await soundObject
    .playAsync()
    .then(async playBackStatus => {
      setTimeout(()=>{
        soundObject.unloadAsync();
      },2200)
    })
  } 
  async playKhatam(){
    soundObject.unloadAsync();
    await soundObject.loadAsync(require('./assets/khatam.mpeg'));
    await soundObject
    .playAsync()
    .then(async playBackStatus => {
      setTimeout(()=>{
        soundObject.unloadAsync();
      },4000)
    })
  }
  render(){
      return (
        <View style={styles.container}>
              <View style={styles.message}>
                <Text style={styles.messageText}> {this.state.message} </Text>
              </View>
              <View style={styles.killedForBlack}>
                  {this.killedSpace('black')}
              </View>
              <View style={styles.allRows}>
                {this.returnWhole(0)}
                {this.returnWhole(1)}
                {this.returnWhole(2)}
                {this.returnWhole(3)}
                {this.returnWhole(4)}
                {this.returnWhole(5)}
                {this.returnWhole(6)}
                {this.returnWhole(7)}
            </View>
            <View style={styles.killedForWhite}>
                {this.killedSpace('white')}
            </View>
            <View style={styles.playAgain}>
                <TouchableOpacity onPress={()=>{this.initialSettings(false)}} style={styles.button}>
                    <Text style={styles.btnText}>
                      Play Again
                    </Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  }
}