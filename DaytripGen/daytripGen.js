"use strict"
prompt("Welcome to 'Day Trip Generator'! Click 'OK' to Start");


let name = prompt ("What is your name?");


let destination = ["Milwaukee, WI", "Chicago, IL", "Nashville, TN", "Maimi, FL", "San Diego, CA", "Denver, CO", "Dallas, TX", "L.A., CA", "Seatle, WA", "Fort Worth, TX"];
var rand_dest= destination[Math.floor(Math.random() *destination.length)];
prompt("You will be in the city of...",rand_dest);

  

let restaurant = ["Red Lobster", "Olive Garden", "Pizza House", "ZoGo's Sports Grill", "El Lago","Food Palace"];
let rand_rest = restaurant[Math.floor(Math.random()*restaurant.length)];
prompt("You be eating at the...",rand_rest);


let transportation = ["Bus", "Taxi", "Uber", "Rental", "Bike", "Lyft"];
let rand_trans = transportation[Math.floor(Math.random()*transportation.length)];
prompt("You'll take the",rand_trans);


let entertainment = ["Comedy Show", "Indoor Rock climbing", "Movie Theater", "Bowling", "Karaoke", "Amusement Park", "Water Park"];
let rand_entert = entertainment[Math.floor(Math.random()*entertainment.length)];    
console.log("You'll go!",rand_entert);


//
// let destination = ["Milwaukee, WI", "Chicago, IL", "Nashville, TN", "Maimi, FL", "San Diego, CA", "Denver, CO", "Dallas, TX", "L.A., CA", "Seatle, WA", "Fort Worth, TX"];
// let restaurant = ["Red Lobster", "Olive Garden", "Pizza House", "ZoGo's Sports Grill", "El Lago", "Food Palace"];
// let transportation = ["Bus", "Taxi", "Uber", "Rental","Bike", "Lyft"];
// let entertainment = ["Comedy Show", "Indoor Rock climbing", "Movie Theater", "Bowling", "Karaoke", "Amusement Park", "Water Park"];


// let destination = ["Milwaukee, WI", "Chicago, Il", "Nashville, TN", "Maimi, FL", "San Diego, CA", "Denver, CO", "Dallas, TX", "L.A., CA", "Seatle, WA","Fort Worth, TX"];
// let rand_dest = destination[Math.floor(Math.random()*destination.length)];
//    //1.I want dest randomly selected
// function 
// let response =

//2. I want rest randomly selected

// let response = prompt(rand_rest)



//3. I want trans randomly selected
// let response= prompt(rand_trans);



//4. I want entert randomly selected
// let response =  prompt(rand_entert);
        


 
let final = (name)+ "will begin this exciting trip in" + (rand_dest) + "Later that evening, you will be sitting down to have a delicious meal at" + (rand_rest) + "During the day, you will be utilizing a/an" + (rand_trans) + "to see all the beautiful sites. Lastly, you will make fun memories at" + (rand_entert) + "Hope you enjoy your trip. Click OK";
prompt(final);
alert(final);
console.log(final);

