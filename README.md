# Pizza Parlor
___________
#### By Sisi Vieira
## Discription
This project includes one HTML file, one custom CSS file, one custom JS file, bootstrap.css, jquery-3.6.0.js, and one MD file. This webpage is designed to allow the user to design their own pizza and edit the price as they go based on their topping and size selections. You can add more content to the HTML file, the CSS file can decorate the webpage, and the JS file can make the webpage interactive with users.
## Program Steup instruction
On GitHub, navigate to the main page of the repository. Above the list of files, click **Code**. Click **Download ZIP** and download the files onto your machine. Open the HTML file or/and the CSS file with VS code or other coding applications you preferred.
## Known Bugs
The total price is not displaying correctly.
## Github page website
https://cicy886.github.io/pizza-parlor/
## Lisence
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Sisi Vieira

Specs:
Describer: Pizza.prototype.paymentCalculation()

Test: "It should return 8 when pizza size is medium."
code:
const inputtedSize = $("input:radio[name=size]:checked").val();
Pizza.prototype.paymentCalculation(inputtedSize);
Expected Output: 8

Test: "It should return 10 when pizza has one topping and medium size."
code:
const inputtedSize = $("input:radio[name=size]:checked").val();
const inputtedFirstTopping = $("input:radio[name=firstTopping]:checked").val();
Pizza.prototype.paymentCalculation(inputtedSize,inputtedFirstTopping);
Expected Output: 10

Test: "It should return 12 when pizza has two toppings and medium size."
code:
const inputtedSize = $("input:radio[name=size]:checked").val();
const inputtedFirstTopping = $("input:radio[name=firstTopping]:checked").val();
const inputtedSecondTopping = $("input:radio[name=secondTopping]:checked").val();
Pizza.prototype.paymentCalculation(inputtedSize,inputtedFirstTopping,inputtedSecondTopping);
Expected Output: 12

Test: "It should return 14 when pizza has three toppings and medium size."
code:
const inputtedSize = $("input:radio[name=size]:checked").val();
const inputtedFirstTopping = $("input:radio[name=firstTopping]:checked").val();
const inputtedSecondTopping = $("input:radio[name=secondTopping]:checked").val();
const inputtedThirdTopping = $("input:radio[name=thirdTopping]:checked").val();
Pizza.prototype.paymentCalculation(inputtedSize,inputtedFirstTopping,inputtedSecondTopping,inputtedThirdTopping);
Expected Output: 14

Test: "It should return 16 when pizza has four toppings and medium size."
code:
const inputtedSize = $("input:radio[name=size]:checked").val();
const inputtedFirstTopping = $("input:radio[name=firstTopping]:checked").val();
const inputtedSecondTopping = $("input:radio[name=secondTopping]:checked").val();
const inputtedThirdTopping = $("input:radio[name=thirdTopping]:checked").val();
const inputtedFourthTopping = $("input:radio[name=fourthTopping]:checked").val();
Pizza.prototype.paymentCalculation(inputtedSize,inputtedFirstTopping,inputtedSecondTopping,inputtedThirdTopping,inputtedFourthTopping);
Expected Output: 16

Test: "It should return 10 when pizza size is large."
code:
const inputtedSize = $("input:radio[name=size]:checked").val();
Pizza.prototype.paymentCalculation(inputtedSize);
Expected Output: 10

Test: "It should return 12 when pizza has one topping and large size."
code:
const inputtedSize = $("input:radio[name=size]:checked").val();
const inputtedFirstTopping = $("input:radio[name=firstTopping]:checked").val();
Pizza.prototype.paymentCalculation(inputtedSize,inputtedFirstTopping);
Expected Output: 12

Test: "It should return 14 when pizza has two toppings and large size."
code:
const inputtedSize = $("input:radio[name=size]:checked").val();
const inputtedFirstTopping = $("input:radio[name=firstTopping]:checked").val();
const inputtedSecondTopping = $("input:radio[name=secondTopping]:checked").val();
Pizza.prototype.paymentCalculation(inputtedSize,inputtedFirstTopping,inputtedSecondTopping);
Expected Output: 14

Test: "It should return 16 when pizza has three toppings and large size."
code:
const inputtedSize = $("input:radio[name=size]:checked").val();
const inputtedFirstTopping = $("input:radio[name=firstTopping]:checked").val();
const inputtedSecondTopping = $("input:radio[name=secondTopping]:checked").val();
const inputtedThirdTopping = $("input:radio[name=thirdTopping]:checked").val();
Pizza.prototype.paymentCalculation(inputtedSize,inputtedFirstTopping,inputtedSecondTopping,inputtedThirdTopping);
Expected Output: 16

Test: "It should return 18 when pizza has four toppings and large size."
code:
const inputtedSize = $("input:radio[name=size]:checked").val();
const inputtedFirstTopping = $("input:radio[name=firstTopping]:checked").val();
const inputtedSecondTopping = $("input:radio[name=secondTopping]:checked").val();
const inputtedThirdTopping = $("input:radio[name=thirdTopping]:checked").val();
const inputtedFourthTopping = $("input:radio[name=fourthTopping]:checked").val();
Pizza.prototype.paymentCalculation(inputtedSize,inputtedFirstTopping,inputtedSecondTopping,inputtedThirdTopping,inputtedFourthTopping);
Expected Output: 18