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
    let price = () => {
      if (category === "classic pizzas") {
        if (size === "small" && quantity >= 1) {
          return quantity * 500
        } else if (size === "medium" && quantity >= 1) {
          return  quantity * 750
        } else if (size === "large" && quantity >= 1) {
          return quantity * 950
        } else {
          alert("Kindly pick pizza SIZE: & QTY: for " + flavour)
        }
      } else if (category === "deluxe pizzas") {
        if (size === "small" && quantity >= 1) {
          return quantity * 550
        } else if (size === "medium" && quantity >= 1) {
          return quantity * 800
        } else if (size === "large" && quantity >= 1) {
          return quantity * 1000
        } else {
          alert("Kindly pick pizza SIZE: & QTY: for " + flavour)
        }
      } else if (category === "supreme pizzas") {
        if (size === "small" && quantity >= 1) {
          return quantity * 600
        } else if (size === "medium" && quantity >= 1) {
          return quantity * 940
        } else if (size === "large" && quantity >= 1) {
          return quantity * 1210
        } else {
          alert("Kindly pick pizza SIZE: & QTY: for " + flavour)
        }
      } else {
        alert("No order made")
      }
    }
    
    let pizzaOrdered = new pizza(
      category,
      flavour,
      size,
      quantity,
      price()
    )
    alert(JSON.stringify(pizzaOrdered))
  })
})