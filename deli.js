
function takeANumber(katzDeli, person){
  katzDeli.push(person);
  return `Welcome, ${person}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli){
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    var serving = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(katzDeli){
  if(katzDeli.length === 0){
    return  "The line is currently empty.";
  }
  else {
    var line_status = "The line is currently:"
    for (i=0; i < katzDeli.length; i++){
       line_status += ` ${i+1}. ${katzDeli[i]},`;
    }
    return line_status.slice(0, -1);
  }
}


  // for (i=0; i<katzDeli.length; i++){
  //   if (katzDeli[i] === person){
  //     return i+1;
  //   }
  // }