function pizza(category, flavour, size, quantity, price) {
  this.category = category,
    this.flavour = flavour,
    this.size = size,
    this.quantity = parseInt(quantity),
    this.price = price
}

$(document).ready(function () {
  let totalPrice = 0

  // set flavour option depending on pizza category
  $("#category-select").change(function () {
    let val = $(this).val();
    if (val == "classic") {
      $("#flavour-select").html(
        "<option value='Hawaiian'>Hawaiian</option> <option value='Boerewors'>Boerewors</option> <option value='BBQ Steak'>BBQ Steak</option> <option value='Regina'>Regina</option> <option value='Peri-peri Chicken'>Peri-peri Chicken</option> <option value='Chicken & Mushroom'>Chicken & Mushroom</option> <option value='Chicken Tikka'>Chicken Tikka</option> <option value='Veg Tikka'>Veg Tikka</option>"
      )
    } else if (val == "deluxe") {
      $("#flavour-select").html(
        "<option value='Chicken & Beef Pepperoni'>Chicken & Beef Pepperoni</option> <option value='Meat Deluxe'>Meat Deluxe</option> <option value='Chicken Macon BBQ'>Chicken Macon BBQ</option> <option value='Chicken Hawaiian'>Chicken Hawaiian</option> <option value='Beef Pepperoni Plus'>Beef Pepperoni Plus</option> <option value='Cheese Burger'>Cheese Burger</option> <option value='Roast Veg & Feta'>Roast Veg & Feta</option> <option value='Veg Feast'>Veg Feast</option> <option value='Spicy Boerwors'>Spicy Boerwors</option>"
      )
    } else if (val == "supreme") {
      $("#flavour-select").html(
        "<option value='Nyama Feast'>Nyama Fest</option> <option value='Chicken Feast'>Chicken Feast</option>"
      )
    }
  })

  $("#pizza").submit(function (event) {
    event.preventDefault()

    let category = $("#category-select").val()
    let flavour = $("#flavour-select").val()
    let size = $("#size-select").val()
    let crust = $("#crust-select").val()
    let quantity = $("#quantity").val()
    let price

    let calculatePrice = () => {
      if (category === "classic") {
        if (size === "small" && crust !== "" && quantity >= 1) {
          if ($('#tops').is(":checked")) {
            price = quantity * 500 + 100
            return price
          } else {
            price = quantity * 500
            return price
          }
        } else if (size === "medium"  && crust !== "" && quantity >= 1) {
          if ($('#tops').is(":checked")) {
            price = quantity * 750 + 100
            return price
          } else {
            price = quantity * 750
            return price
          }
        } else if (size === "large"  && crust !== "" && quantity >= 1) {
          if ($('#tops').is(":checked")) {
            price = quantity * 950 + 100
            return price
          } else {
            price = quantity * 950
            return price
          }
        } else {
          alert("Kindly pick pizza SIZE: & CRUST: & QTY: for " + flavour)
        }
      } else if (category === "deluxe") {
        if (size === "small" && crust !== "" && quantity >= 1) {
          if ($('#tops').is(":checked")) {
            price = quantity * 550 + 100
            return price
          } else {
            price = quantity * 550
            return price
          }
        } else if (size === "medium" && crust !== "" && crust !== "" && quantity >= 1) {
          if ($('#tops').is(":checked")) {
            price = quantity * 800 + 100
            return price
          } else {
            price = quantity * 800
            return price
          }
        } else if (size === "large" && crust !== "" && quantity >= 1) {
          if ($('#tops').is(":checked")) {
            price = quantity * 1000 + 100
            return price
          } else {
            price = quantity * 1000
            return price
          }
        } else {
          alert("Kindly pick pizza SIZE: & CRUST: & QTY: for " + flavour)
        }
      } else if (category === "supreme") {
        if (size === "small" && crust !== "" && quantity >= 1) {
          if ($('#tops').is(":checked")) {
            price = quantity * 600 + 100
          } else {
            price = quantity * 600
          }
        } else if (size === "medium" && crust !== "" && quantity >= 1) {
          if ($('#tops').is(":checked")) {
            price = quantity * 940 + 100
          } else {
            price = quantity * 940
          }
        } else if (size === "large" && crust !== "" && quantity >= 1) {
          if ($('#tops').is(":checked")) {
            price = quantity * 1210 + 100
          } else {
            price = quantity * 1210
          }
        } else {
          alert("Kindly pick pizza SIZE: & CRUST: & QTY: for " + flavour)
        }
      } else {
        alert("No order made")
      }
    }
    calculatePrice()


    let pizzaOrdered = new pizza(
      category,
      flavour,
      size,
      quantity,
      price
    )

    totalPrice += pizzaOrdered.price
  
    if (pizzaOrdered.size != "" && pizzaOrdered.quantity > 0) {
      // Make first letter capital
      pizzaOrdered.flavour = pizzaOrdered.flavour[0].toUpperCase() + pizzaOrdered.flavour.slice(1)
      crust = crust[0].toUpperCase() + crust.slice(1)

      let orderNumber = $('#checkout-ul li').length + 1

      // format checkout info depending on whether topping is checked or not
      let withTopping = $('#tops').is(":checked") ? 'with topping' : ''

      // show total orders made by a user in the checkout section
      $(".badge").text(orderNumber)

      $("#checkout-ul").append(`<li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6>${pizzaOrdered.flavour} <small class="text-muted">(x${pizzaOrdered.quantity})</small><h6><small class="text-muted">${crust} crust ${withTopping}</small></div><span class="text-muted">Ksh. ${pizzaOrdered.price}</span></li>`)

      $("#total-price").text(totalPrice)
    }
  })
})