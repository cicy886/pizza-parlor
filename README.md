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
if (this.size == "medium"){
  this.totalPayment=8;
};
Pizza.prototype.paymentCalculation(medium);
Expected Output: 8

Test: "It should return 10 when pizza has one topping and medium size."
code:
if (this.size == "medium"){
  if (this.firstTopping =="pepperoni" || this.firstTopping == "cheese" || this.firstTopping == "artichoke" || this.firstTopping == "anchovy"){
    if (this.secondTopping == "none") {
      if (this.thirdTopping == "none") {
        if (this.fourthTopping == "none) {
          this.totalPayment = 10;
        }
      }
    }
  }
};
Pizza.prototype.paymentCalculation(medium,oneTopping);
Expected Output: 10

Test: "It should return 12 when pizza has two toppings and medium size."
code:
if (this.size == "medium"){
  if (this.firstTopping =="pepperoni" || this.firstTopping == "cheese" || this.firstTopping == "artichoke" || this.firstTopping == "anchovy"){
    if (this.secondTopping == "none") {
      if (this.thirdTopping == "none") {
        if (this.fourthTopping == "none") {
          this.totalPayment = 10;
        } else {
          this.totalPayment = 12;
        }
      } else {
        if (this.fourthTopping == "none"){
          this.totalPayment = 12;
        }
      }
    }
  } else {
      if (this.thirdTopping == "none" && this.fourthTopping =="none"){
        this.totalPayment = 12;
      }
    }
};

Pizza.prototype.paymentCalculation(medium,twoToppings);
Expected Output: 12

Test: "It should return 14 when pizza has three toppings and medium size."
code:
if (this.size == "medium"){
  if (this.firstTopping =="pepperoni" || this.firstTopping == "cheese" || this.firstTopping == "artichoke" || this.firstTopping == "anchovy"){
    if (this.secondTopping == "none") {
      if (this.thirdTopping == "none") {
        if (this.fourthTopping == "none") {
          this.totalPayment = 10;
        } else {
          this.totalPayment = 12;
        }
      } else {
        if (this.fourthTopping == "none"){
          this.totalPayment = 12;
        } else {
            this.totalPayment = 14;
          }
      }
    }
  } else {
      if (this.thirdTopping !="none" && this.fourthTopping == "none"){
        this.totalPayment = 14;
      } else if (this.thirdTopping == "none" && this.fourthTopping !="none"){
        this.totalPayment = 14;
      } else {
        this.totalPayment = 12;
      }
    }
};

Pizza.prototype.paymentCalculation(medium,threeToppings);
Expected Output: 14

Test: "It should return 16 when pizza has four toppings and medium size."
code:
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

Pizza.prototype.paymentCalculation(medium,fourToppings);
Expected Output: 16

Test: "It should return 10 when pizza size is large."
code:
if (this.size == "large"){
  this.totalPayment=8;
};
Pizza.prototype.paymentCalculation(large);
Expected Output: 10

Test: "It should return 12 when pizza has one topping and large size."
code:
if (this.size == "large"){
  if (this.firstTopping =="pepperoni" || this.firstTopping == "cheese" || this.firstTopping == "artichoke" || this.firstTopping == "anchovy"){
    if (this.secondTopping == "none") {
      if (this.thirdTopping == "none") {
        if (this.fourthTopping == "none) {
          this.totalPayment = 12;
        }
      }
    }
  }
};
Pizza.prototype.paymentCalculation(large,oneTopping);
Expected Output: 12

Test: "It should return 14 when pizza has two toppings and large size."
code:
if (this.size == "large"){
  if (this.firstTopping =="pepperoni" || this.firstTopping == "cheese" || this.firstTopping == "artichoke" || this.firstTopping == "anchovy"){
    if (this.secondTopping == "none") {
      if (this.thirdTopping == "none") {
        if (this.fourthTopping == "none") {
          this.totalPayment = 12;
        } else {
          this.totalPayment = 14;
        }
      } else {
        if (this.fourthTopping == "none"){
          this.totalPayment = 14;
        }
      }
    }
  } else {
      if (this.thirdTopping == "none" && this.fourthTopping =="none"){
        this.totalPayment = 14;
      }
    }
};

Pizza.prototype.paymentCalculation(large,twoToppings);
Expected Output: 14

Test: "It should return 16 when pizza has three toppings and large size."
code:
if (this.size == "large"){
  if (this.firstTopping =="pepperoni" || this.firstTopping == "cheese" || this.firstTopping == "artichoke" || this.firstTopping == "anchovy"){
    if (this.secondTopping == "none") {
      if (this.thirdTopping == "none") {
        if (this.fourthTopping == "none") {
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
    }
  } else {
      if (this.thirdTopping !="none" && this.fourthTopping == "none"){
        this.totalPayment = 16;
      } else if (this.thirdTopping == "none" && this.fourthTopping !="none"){
        this.totalPayment = 16;
      } else {
        this.totalPayment = 14;
      }
    }
};

Pizza.prototype.paymentCalculation(large,threeToppings);
Expected Output: 16

Test: "It should return 18 when pizza has four toppings and large size."
code:
if (this.size == "large"){
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

Pizza.prototype.paymentCalculation(large,fourToppings);
Expected Output: 18