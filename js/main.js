
var addToCartButtons = document.querySelectorAll('.add-to-cart');
var selectedProductsDiv = document.getElementById('selected-products');
var selectedItemsDiv = document.getElementById('selected-items');
var showTotalButton = document.getElementById('show-total');
var totalPriceParagraph = document.getElementById('total-price');
var totalPrice = 0;


addToCartButtons.forEach(function(button) {
    button.onclick = function() {
        var productName = button.parentElement.querySelector('.product-name').textContent;
        selectedItemsDiv.innerHTML += `<div>${productName}</div>`;

        var productPrice = button.parentElement.querySelector(' .price').textContent;
        totalPrice +=  +(productPrice)

        if (selectedItemsDiv.innerHTML != "") {
            selectedProductsDiv.style.display = 'block';
        }
    }
} )

showTotalButton.onclick = function() {
    totalPriceParagraph.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
};













