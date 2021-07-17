//constructor function for pizza
function Pizza (customerName,firstTopping,secondTopping,thirdTopping,fourthTopping){
  this.customerName = customerName;
  this.firstTopping = firstTopping;
  this.secondTopping = secondTopping;
  this.thirdTopping = thirdTopping;
  this.fourthTopping = fourthTopping;
}


$(document).ready(function(){
  $("form#new-pizza").submit(function(event){
    event.preventDefalt();
    const inpputedNewNames = $ ("input#newNames").val();
    const inpputedFirstTopping = $("input#firstTopping").val();
    const inpputedSecondTopping = $("input#secondTopping").val();
    const inpputedThirdTopping = $("input#thirdTopping").val();
    const inpputedFourthTopping = $("input#fourthTopping").val();

    $("input#newNames").val("");

    let newPizza = new Pizza (inpputedNewNames, inpputedFirstTopping, inpputedSecondTopping, inpputedThirdTopping, inpputedFourthTopping);
    displayPizzaDetails(newPizza);
  });
});