function PizzaOrders() {
  this.pizzas = {};
  this.currentId = 0;
  this.totalPayment = 0;
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

Pizza.prototype.paymentCalculation = function(){
  if (this.size == "medium"){
    if (this.firstTopping=="pepperoni" || this.firstTopping=="cheese" || this.firstTopping=="artichoke" || this.firstTopping=="anchovy"){
      if (this.secondTopping == "none"){
        if (this.thirdTopping == "none"){
          if (this.fourthTopping == "none"){
            this.totalPayment = 10;
          } else {
            this.totalPayment = 12;
          }
        } else {
          if (this.fourthTopping == "none"){
            this.totalPayment = 12;
          }else {
            this.totalPayment = 14;
          }
        }
      } else {
        if (this.thirdTopping != "none" && this.fourthTopping !="none"){
          this.totalPayment = 16;
        } else if (this.thirdTopping !="none" && this.fourthTopping == "none"){
          this.totalPayment = 14;
        } else if (this.thirdTopping == "none" && this.fourthTopping !="none"){
          this.totalPayment = 14;
        } else {
          this.totalPayment = 12;
        }
      }
    }
  } else if (this.size == "large"){
    if (this.firstTopping=="pepperoni" || this.firstTopping=="cheese" || this.firstTopping=="artichoke" || this.firstTopping=="anchovy"){
      if (this.secondTopping == "none"){
        if (this.thirdTopping == "none"){
          if (this.fourthTopping == "none"){
            this.totalPayment = 12;
          } else {
            this.totalPayment = 14;
          }
        } else {
          if (this.fourthTopping == "none"){
            this.totalPayment = 14;
          } else {
            this.totalPayment = 16;
          }
        }
      } else {
        if (this.thirdTopping != "none" && this.fourthTopping !="none"){
          this.totalPayment = 18;
        } else if (this.thirdTopping !="none" && this.fourthTopping == "none"){
          this.totalPayment = 16;
        } else if (this.thirdTopping == "none" && this.fourthTopping !="none"){
          this.totalPayment = 16;
        } else {
          this.totalPayment = 14;
        }
      }
    }
  }
};



function displayOrderDetails(pizzaOrdersToDisplay) {
  let pizzasList = $("ul#pizzas");
  let htmlForPizzaInfo = "";
  Object.keys(pizzaOrdersToDisplay.pizzas).forEach(function(key) {
    const pizza = pizzaOrdersToDisplay.findPizza(key);
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.customerName + "'s order" + "</li>";
  });
  pizzasList.html(htmlForPizzaInfo);
}


$(document).ready(function() {

  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    let pizzaOrders = new PizzaOrders();

    const inputtedCustomerName = $("input#newName").val();
    const inputtedFirstTopping = $("input:radio[name=firstTopping]:checked").val();
    const inputtedSecondTopping = $("input:radio[name=secondTopping]:checked").val();
    const inputtedThirdTopping = $("input:radio[name=thirdTopping]:checked").val();
    const inputtedFourthTopping = $("input:radio[name=fourthTopping]:checked").val();
    const inputtedSize = $("input:radio[name=size]:checked").val();

    $("input#newName").val("");

    let newPizza = new Pizza(inputtedCustomerName, inputtedFirstTopping, inputtedSecondTopping, inputtedThirdTopping, inputtedFourthTopping, inputtedSize);
    newPizza.paymentCalculation();
    $("#show-result").show();
    $(".newName").html(inputtedCustomerName);
    $(".firstTopping").html(inputtedFirstTopping);
    $(".secondTopping").html(inputtedSecondTopping);
    $(".thirdTopping").html(inputtedThirdTopping);
    $(".fourthTopping").html(inputtedFourthTopping);
    $(".size").html(inputtedSize);
    $(".totalPayment").html(newPizza.totalPayment);
    displayOrderDetails(pizzaOrders);
  });
});