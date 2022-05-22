//
//01.kilometer to meter conversion.
function kilometerToMeter(kilometers){  //kilometer to meter conversion.
    if(kilometers>=0){
    var meter = kilometers *1000;
    return meter;
}
else{
   console.log("please enter a positive number.");
}
}

var count= kilometerToMeter(-20);
console.log( "meter is ="+ count);
//02 bouget calculatro
function bugetCalculator(watch, mobile , laptop){
    var Total=0;
    if(watch>=0 && mobile>=0 && laptop>=0 ){
        var watchTotal=watch*50;
        var mobileTotal=mobile*100;
        var laptopTotal=laptop*500;
        Total= watchTotal+mobileTotal+laptopTotal;
        return Total;
    }
    else{
        console.log("please enter a positive number.");
    }
}
const prompt= require("prompt-sync")();
var watch =prompt ("Input watch number you want to buy= ");
var mobile =prompt ("Input mobile number you want to buy= ");
var laptop =prompt ("Input laptop number you want to buy="); 
var count= bugetCalculator(watch, mobile, laptop);
console.log("total is =" +count);
//03. hotel cost
function hotelCost(day){
    var cost=0;
    if (day<=10){
        cost=day*100;
    }
    else if(day<=20){
        var firstCost=10*100;
        var remain=day-10;
        var secoundCost=remain*80;
        cost=firstCost+secoundCost;
    }
    else{
        var firstCost=10*100;
        var scoundCost=10*80;
        var remain= day-20;
        var thirdCost=remain*50;
        cost=firstCost+scoundCost+thirdCost;
    }
    return cost;
}
var count=hotelCost(22);
console.log(count);
//04.mega Friend 
function megaFriend(name){
    var long = name[0];
     for (let i = 0; i < name.length; i++) {
        const element = name[i];
            if( long.length < element.length){
                long = element
                }
                     }
                    return long
                        }

        var  friend = ["Tamim","Abdullah","Sakib","Montasim","Ali"]
        var longName = megaFriend(friend);
        console.log(longName);