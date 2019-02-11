 
var num1 = prompt("In which class do you read?");
var num2 = Number(num1);

var teacher;



if(num2 === 1 || num2 === 2 || num2 === 3 || num2 === 4 || num2 === 5 || num2 === 6 || num2 === 7 || num2 === 8 || num2 === 9 || num2 === 10  ){
   var Sec = prompt("What is your section?");
   if(Sec === "A" || Sec === "a" || Sec === "B" || Sec === "b"){
   var subject1 = prompt("Your subject is IR, BBA & GK." ," IR , BBA , GK ");
  
   var subject2 = prompt("Select one subject IT/Engineering");
  
   var subject3 = prompt("Select one  subject English/Sindhi");
   if(Sec === "A" || Sec === "a"){
       teacher = "Sir Umar";
       alert("Your class is " + num2 + ", " + "your subjects are " + subject1 + ", " + subject2 + ", " + "& " + subject3 + "  and your teacher is " + teacher + ".")
   }
   
     else if(Sec === "B" || Sec === "b"){
     
     teacher = "Sir Arslan"
     alert("Your class is " + num2 + ", " + "your subjects are " + subject1 + " "+ subject2 + " " + subject3 + "  and your teacher is " + teacher + ".")
   }
}
else{
   alert("Sorry ! only limited student allow.")
}
   
}
else{
   alert("Try again second time.")
}
