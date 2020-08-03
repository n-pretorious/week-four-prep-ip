function pizza(category, flavour, size, quantity, price) {
  this.category = category,
    this.flavour = flavour,
    this.size = size,
    this.quantity = parseInt(quantity),
    this.price = price
}

// an array of pizzas orders
let order = []



$(document).ready(function () {
  $("#pizza").submit(function (event) {
    event.preventDefault()

    let category = $("#pizza .category").text().toLowerCase()
    let flavour = $("#pizza .card-title").text().toLowerCase()
    let size = $("#pizza select").val()
    let quantity = $("#pizza .quantity").val()
    let price

    let calculatePrice = () => {
      if (category === "classic pizzas") {
        if (size === "small" && quantity >= 1) {
          if ($('input[type="checkbox"]').is(":checked")) {
            price = quantity * 500 + 100
            return price
          } else {
            price = quantity * 500
            return price
          }
        } else if (size === "medium" && quantity >= 1) {
          if ($('input[type="checkbox"]').is(":checked")) {
            price = quantity * 750 + 100
            return price
          } else {
            price = quantity * 750
            return price
          }
        } else if (size === "large" && quantity >= 1) {
          if ($('input[type="checkbox"]').is(":checked")) {
            price = quantity * 950 + 100
            return price
          } else {
            price = quantity * 950
            return price
          }
        } else {
          alert("Kindly pick pizza SIZE: & QTY: for " + flavour)
        }
      } else if (category === "deluxe pizzas") {
        if (size === "small" && quantity >= 1) {
          if ($('input[type="checkbox"]').is(":checked")) {
            price = quantity * 550 + 100
            return price
          } else {
            price = quantity * 550
            return price
          }
        } else if (size === "medium" && quantity >= 1) {
          if ($('input[type="checkbox"]').is(":checked")) {
            price = quantity * 800 + 100
            return price
          } else {
            price = quantity * 800
            return price
          }
        } else if (size === "large" && quantity >= 1) {
          if ($('input[type="checkbox"]').is(":checked")) {
            price = quantity * 1000 + 100
            return price
          } else {
            price = quantity * 1000
            return price
          }
        } else {
          alert("Kindly pick pizza SIZE: & QTY: for " + flavour)
        }
      } else if (category === "supreme pizzas") {
        if (size === "small" && quantity >= 1) {
          if ($('input[type="checkbox"]').is(":checked")) {
            price = quantity * 600 + 100
          } else {
            price = quantity * 600
          }
        } else if (size === "medium" && quantity >= 1) {
          if ($('input[type="checkbox"]').is(":checked")) {
            price = quantity * 940 + 100
          } else {
            price = quantity * 940
          }
        } else if (size === "large" && quantity >= 1) {
          if ($('input[type="checkbox"]').is(":checked")) {
            price = quantity * 1210 + 100
          } else {
            price = quantity * 1210
          }
        } else {
          alert("Kindly pick pizza SIZE: & QTY: for " + flavour)
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
    if (pizzaOrdered.size != "" && pizzaOrdered.quantity > 0) {
      // Make first letter capital
      pizzaOrdered.flavour = pizzaOrdered.flavour[0].toUpperCase() + pizzaOrdered.flavour.slice(1)

      let orderNumber = $('#checkout-ul li').length + 1

      // format checkout info depending on whether topping is checked or not
      let withTopping = $('input[type="checkbox"]').is(":checked") ? '<small class="text-muted">With topping</small>' : '<small class="text-muted"></small>'

      $(".badge").text(orderNumber)

      $("#checkout-ul").append('<li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6>' + pizzaOrdered.flavour + '<h6>' + withTopping + '</div><span class="text-muted">Ksh. ' + pizzaOrdered.price + '</span></li>')
    }
  })
})