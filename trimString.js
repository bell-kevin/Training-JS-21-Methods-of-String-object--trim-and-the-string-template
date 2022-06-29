function fiveLine(s){
  var string = s.trim()
  var array = [string]
  for(let i = 2;i<=5;i++){
    array.push(string.repeat(i))
  }
  return array.join('\n')
}
