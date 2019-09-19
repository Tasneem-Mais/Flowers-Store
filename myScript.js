//OOP: Plan Class:
function Plan(name, weddingDate){
 var plan = {};
 //add states
 plan.name = name;
 plan.weddingDate = weddingDate;
 plan.cake = {};
 plan.food ={};
 plan.flower = {};
 plan.card = {};

 // add methods
 //plan.createPlan = createPlan;
 plan.addCake = addCake;
 plan.addFood = addFood;
 plan.addFlower = addFlower;
 plan.addCard = addCard;
 return plan;
}

//add cake props methods
var addCake = function(cakeName, cakePrice, cakeImg) {
 this.cake["name"] = cakeName;
 this.cake["price"] = cakePrice;
 this.cake["img"] = cakeImg;
 console.log(this.cake);
 //return this.cake;
}

//add food props methods
var addFood = function(foodName, foodPrice, foodImg) {
 this.food["name"] = foodName;
 this.food["price"] = foodPrice;
 this.food["img"] = foodImg;
 console.log(this.food);
 //return this.food;
}

//add flowers props methods
var addFlower = function(flowerName, flowerPrice, flowerImg) {
 this.flower["name"] = flowerName;
 this.flower["price"] = flowerPrice;
 this.flower["img"] = flowerImg;
 console.log(this.flower);
 //return this.flower;
}

//add card props methods
var addCard = function(cardName, cardPrice, cardImg) {
 this.card["name"] = cardName;
 this.card["price"] = cardPrice;
 this.card["img"] = cardImg;
 console.log(this.card);
 //return this.food;
}

//array of plans
var plansArr =[];

//////////////////

//create plan button
$('#startPlan').click(function() {

   $('#showPlan').css("visibility", "visible");

 var name = $('#name').val();
 var wDate = $('#date').val();
 var plan = Plan(name, wDate);
 console.log(plan)

 // cake1 
 if($('#c1Select').prop('checked')){

   var c1Name = $('#c1Name').text();
   var c1Price = $('#c1Price').text();
   var c1Img = $('#c1Img').attr('src');

   console.log(c1Name, c1Price, c1Img);

   plan.addCake(c1Name, c1Price, c1Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

 //cake2
   if($('#c2Select').prop('checked')){

   var c2Name = $('#c2Name').text();
   var c2Price = $('#c2Price').text();
   var c2Img = $('#c2Img').attr('src');

   console.log(c2Name, c2Price, c2Img);

   plan.addCake(c2Name, c2Price, c2Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

 //cake3
 if($('#c3Select').prop('checked')){

   var c3Name = $('#c3Name').text();
   var c3Price = $('#c3Price').text();
   var c3Img = $('#c3Img').attr('src');

   console.log(c3Name, c3Price, c3Img);

   plan.addCake(c3Name, c3Price, c3Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

 //cake4
 if($('#c4Select').prop('checked')){

   var c4Name = $('#c4Name').text();
   var c4Price = $('#c4Price').text();
   var c4Img = $('#c4Img').attr('src');

   console.log(c4Name, c4Price, c4Img);

   plan.addCake(c4Name, c4Price, c4Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

 //// Flowers
 //flower1
 if($('#f1Select').prop('checked')){

   var f1Name = $('#f1Name').text();
   var f1Price = $('#f1Price').text();
   var f1Img = $('#f1Img').attr('src');

   console.log(f1Name, f1Price, f1Img);

   plan.addFlower(f1Name, f1Price, f1Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }
// flower2
if($('#f2Select').prop('checked')){

   var f2Name = $('#f2Name').text();
   var f2Price = $('#f2Price').text();
   var f2Img = $('#f2Img').attr('src');

   console.log(f2Name, f2Price, f2Img);

   plan.addFlower(f2Name, f2Price, f2Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

//flower3
if($('#f3Select').prop('checked')){

   var f3Name = $('#f3Name').text();
   var f3Price = $('#f3Price').text();
   var f3Img = $('#f3Img').attr('src');

   console.log(f3Name, f3Price, f3Img);

   plan.addFlower(f3Name, f3Price, f3Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }


  //flower4
 if($('#f4Select').prop('checked')){
   var f4Name = $('#f4Name').text();
   var f4Price = $('#f4Price').text();
   var f4Img = $('#f4Img').attr('src');
   
   console.log(f4Name, f4Price, f4Img);
   
   plan.addFlower(f4Name, f4Price, f4Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

 //Invitation cards
 //invitation card 1
 if($('#i1Select').prop('checked')){
   var i1Name = $('#i1Name').text();
   var i1Price = $('#i1Price').text();
   var i1Img = $('#i1Img').attr('src');

   console.log(i1Name, i1Price, i1Img);

   plan.addCard(i1Name, i1Price, i1Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

//invitation card2
if($('#i2Select').prop('checked')){
   var i2Name = $('#i2Name').text();
   var i2Price = $('#i2Price').text();
   var i2Img = $('#i2Img').attr('src');
   //console.log(i2Name, i2Price, i2Img);
   plan.addCard(i2Name, i2Price, i2Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }
 //invitation card3
 if($('#i3Select').prop('checked')){

   var i3Name = $('#i3Name').text();
   var i3Price = $('#i3Price').text();
   var i3Img = $('#i3Img').attr('src');

   console.log(i3Name, i3Price, i3Img);

   plan.addCard(i3Name, i3Price, i3Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

  //invitation card4
 if($('#i4Select').prop('checked')){
   var i4Name = $('#i4Name').text();
   var i4Price = $('#i4Price').text();
   var i4Img = $('#i4Img').attr('src');

   console.log(i4Name, i4Price, i4Img);

   plan.addCard(i4Name, i4Price, i4Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

///Foods
//food1
 if($('#fo1Select').prop('checked')){
   var fo1Name = $('#fo1Name').text();
   var fo1Price = $('#fo1Price').text();
   var fo1Img = $('#fo1Img').attr('src');

   console.log(fo1Name, fo1Price, fo1Img);
   
   plan.addFood(fo1Name, fo1Price, fo1Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

//food2
if($('#fo2Select').prop('checked')){
   var fo2Name = $('#fo2Name').text();
   var fo2Price = $('#fo2Price').text();
   var fo2Img = $('#fo2Img').attr('src');

   console.log(fo2Name, fo2Price, fo2Img);

   plan.addFood(fo2Name, fo2Price, fo2Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }
 //food3
 if($('#fo3Select').prop('checked')){

   var fo3Name = $('#fo3Name').text();
   var fo3Price = $('#fo3Price').text();
   var fo3Img = $('#fo3Img').attr('src');

   console.log(fo3Name, fo3Price, fo3Img);

   plan.addFood(fo3Name, fo3Price, fo3Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

  //food4
 if($('#fo4Select').prop('checked')){

   var fo4Name = $('#fo4Name').text();
   var fo4Price = $('#fo4Price').text();
   var fo4Img = $('#fo4Img').attr('src');

   console.log(fo4Name, fo4Price, fo4Img);

   plan.addFood(fo4Name, fo4Price, fo4Img);
   //plansArr.push(plan);
   //console.log(plansArr);
 }

  //Push the plan contains (cake, flower, food, card) to plansArr
  plansArr.push(plan);


});





// $('#nextPage').click(function() {
//   //var msg = $('<p id = "msg">').text(plan[0].name)
//   $('#congrates').text("GGGGGGGGggg");
// })


$('#showPlan').click(function() {
   $('#myPlan').css("visibility", "visible");
   $('#startPlan').css("visibility", "hidden");
  // cake
   $('#myCake').attr('src', plansArr[0]["cake"].img);
   $('#myCakeName').text(plansArr[0]["cake"].name);
   $('#myCakePrice').text(plansArr[0]["cake"].price);

   // flower
   $('#myFlower').attr('src', plansArr[0]["flower"].img);
   $('#myFlowerName').text(plansArr[0]["flower"].name);
   $('#myFlowerPrice').text(plansArr[0]["flower"].price);

    // invitation
   $('#myInvitation').attr('src', plansArr[0]["card"].img);
   $('#myInvitationName').text(plansArr[0]["card"].name);
   $('#myInvitationPrice').text(plansArr[0]["card"].price);

   // Food
   $('#myFood').attr('src', plansArr[0]["food"].img);
   $('#myFoodName').text(plansArr[0]["food"].name);
   $('#myFoodPrice').text(plansArr[0]["food"].price);


})


