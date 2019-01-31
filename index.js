function theBeatlesPlay(musicians, instruments){
  var array = [];
  
  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function  johnLennonFacts(facts){
 var i = 0;
 var newarr = [];
  while (i < facts.length){
    newarr.push(facts[i] + "!!!");
    i++;
  }
  
  return newarr;
}