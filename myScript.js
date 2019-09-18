//Helper Functions
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

// create plan 
// OOP

// function Plan(name, weddingDate){

//  var plan = {};

//  //add states
//  plan.name = name;
//  plan.weddingDate = weddingDate;
//  plan.cake = addCake;
//  plan.music = addMusic;
//  plan.flowers = addFlower;
//  plan.venues = addVenues;
  

//  // add methods
//  //plan.createPlan = createPlan;
//  plan.cake = addCake;
//  plan.music = addMusic;
//  plan.flowers = addFlower;
//  plan.venues = addVenues;


//  return plan;

// }

// var createPlan = function() {
//  return this.cake + this.music + this.flowers + this.venues;
// }

var addCake = function() {


}
function Plan(name, weddingDate){

  var plan = {};

  //add states
  plan.name = name;
  plan.weddingDate = weddingDate;
  plan.cake = {};
  // plan.music = addMusic;
  // plan.flowers = addFlower;
  // plan.venues = addVenues;
  

  // add methods
  //plan.createPlan = createPlan;
  plan.addCake = addCake;
  // plan.music = addMusic;
  // plan.flowers = addFlower;
  // plan.venues = addVenues;


  return plan;

}

var addCake = function(cakeName, cakePrice, cakeImg) {
  this.cake["name"] = cakeName;
  this.cake["price"] = cakePrice;
  this.cake["img"] = cakeImg;
  console.log(this.cake);
  //return this.cake;

}




var plansArr =[];

$('#start').click(function() {

  var name = $('#name').val();
  var wDate = $('#date').val();

  var plan = Plan(name, wDate);
  console.log(plan)

  if($('#c1Select').prop('checked')){

    var c1Name = $('#c1Name').text();
    var c1Price = $('#c1Price').text();
    var c1Img = $('#c1Img').attr('src');

    //console.log(c1Name, c1Price, c1Img);

    plan.addCake(c1Name, c1Price, c1Img);
    plansArr.push(plan);
    console.log(plansArr);
  } 


});

$('#display').click(function() {
  
})









  






