function PizzaOrders() {
  this.pizzas = {};
  this.currentId = 0;
}

PizzaOrders.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

PizzaOrders.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

PizzaOrders.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};

function Pizza (customerName,firstTopping,secondTopping,thirdTopping,fourthTopping,size){
  this.customerName = customerName;
  this.firstTopping = firstTopping;
  this.secondTopping = secondTopping;
  this.thirdTopping = thirdTopping;
  this.fourthTopping = fourthTopping;
  this.size = size;
}

// function totalPayment(pizza){
//   let sum=0;
//   for (let i of Object.keys(pizza)){
    
//   }
// }

let pizzaOrders = new PizzaOrders();

function displayOrderDetails(pizzaOrdersToDisplay) {
  let pizzasList = $("ul#pizzas");
  let htmlForPizzaInfo = "";
  Object.keys(pizzaOrdersToDisplay.pizzas).forEach(function(key) {
    const pizza = pizzaOrdersToDisplay.findPizza(key);
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.customerName + "'s order" + "</li>";
  });
  pizzasList.html(htmlForPizzaInfo);
}

function showPizza(pizzaId) {
  const pizza = pizzaOrders.findPizza(pizzaId);
  $("#show-result").show();
  $(".newName").html(pizza.customerName);
  $(".firstTopping").html(pizza.firstTopping);
  $(".secondTopping").html(pizza.secondTopping);
  $(".thirdTopping").html(pizza.thirdTopping);
  $(".fourthTopping").html(pizza.fourthTopping);
  $(".size").html(pizza.size);
  $(".totalPayment").html(pizza.totalPayment)
}

function attachPizzaListeners() {
  $("ul#pizzas").on("click", "li", function() {
    showPizza(this.id);
  });
}

$(document).ready(function() {
  attachPizzaListeners();
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const inputtedCustomerName = $("input#newName").val();
    const inputtedFirstTopping = $("input:radio[name=firstTopping]:checked").val();
    const inputtedSecondTopping = $("input:radio[name=secondTopping]:checked").val();
    const inputtedThirdTopping = $("input:radio[name=thirdTopping]:checked").val();
    const inputtedFourthTopping = $("input:radio[name=fourthTopping]:checked").val();
    const inputtedSize = $("input:radio[name=size]:checked").val();

    $("input#newName").val("");

    let newPizza = new Pizza(inputtedCustomerName, inputtedFirstTopping, inputtedSecondTopping, inputtedThirdTopping, inputtedFourthTopping, inputtedSize);
    // totalPayment(newPizza);
    $("#totalPayment").html(newPizza);
    pizzaOrders.addPizza(newPizza);
    displayOrderDetails(pizzaOrders);
  });
});