const VI = {}


VI.toggleSwitch = function(outerBox, innerBox, flag){
  if(flag.value){
    outerBox.style = 'background-color: #afafaf;'
    innerBox.style = 'left: 5%;'
    flag.value = false
  }
  else if(flag.value === false){
    outerBox.style = 'background-color: #51d4ea;'
    innerBox.style = 'left: 50%;'
    flag.value = true
  }
}