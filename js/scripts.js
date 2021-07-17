

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