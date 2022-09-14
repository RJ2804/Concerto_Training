(function (global) {

    var foodItems = "[" + localStorage.getItem('foodItem') + "]";

    var cartFoodItems = JSON.parse(foodItems);

    for (var i = 0; i < cartFoodItems.length; i++) {

        $('#maincart').append(
            "<div class="
            + '"card-body"'
            + ">"
            + "<div class="
            + '"card"'
            + "style="
            + '"background-color:rgb(222, 250, 215);;"'
            + ">"
            + "<div class="
            + '"card-header"'
            + ">"
            + "Food Category : "
            + cartFoodItems[i].category
            + "</div>"
            + "<div class="
            + '"card-body"'
            + ">"
            + "<div class="
            + '"row"'
            + ">"
            + "<div class="
            + '"col-sm-4"'
            + ">"
            + "<img src="
            + '"'
            + cartFoodItems[i].img
            + '"'
            + "style="
            + '"width:200px;height:150px"'
            + ">"
            + "</div>"
            + "<div class="
            + '"col-sm-4"'
            + ">"
            + "<h5 class="
            + '"card-title"'
            + ">"
            + "Food Name : "
            + cartFoodItems[i].name
            + "</h5>"
            + "<h5 class="
            + '"card-title"'
            + ">"
            + "Food Rating : "
            + cartFoodItems[i].rating
            + "</h5>"
            + "<p class="
            + '"card-text"'
            + ">"
            + "Food Price : "
            + cartFoodItems[i].price
            + "</p>"
            + "</div>"
            + "<div class="
            + '"col-sm-4"'
            + ">"
            + "<div class="
            + '"col-lg-4"'
            + ">"
            + "<div class="
            + '"input-group"'
            + ">"
            + "<span class="
            + '"input-group-btn"'
            + ">"
            + "<button type="
            + '"button"'
            + "id="
            + '"' + cartFoodItems[i].name.replace(/ +/g, '') + "minus" + '"'
            + "class="
            + '" quantity-left-minus btn btn-danger btn-number"'
            + "onclick="
            + '"minus($(this))"'
            + ">"
            + "<span class="
            + '"fa fa-minus"'
            + "></span>"
            + "</button>"
            + "</span>"
            + "<input type="
            + '"text"' + "id="
            + '"' + cartFoodItems[i].name.replace(/ +/g, '') + "input" + '"'
            + "class="
            + '"form-control input-number"'
            + "value="
            + '"'+cartFoodItems[i].quantity +'"'
            + ">"
            + "<span class="
            + '"input-group-btn"'
            + ">"
            + "<button type="
            + '"button"'
            + "id="
            + '"' + cartFoodItems[i].name.replace(/ +/g, '') + "plus" + '"'
            + "class="
            + '"quantity-left-plus btn btn-success btn-number"'
            + "onclick="
            + '"plus($(this))"'
            + ">"
            + "<span class="
            + '"fa fa-plus"'
            + "></span>"
            + "</button>"
            + "</span>"
            + "</div>"
            + "</div>"
            + "</div>"
            + "</div>"
        )
    }
})(window);

var quantity = 0;

function minus(value) {
    var quantity = parseInt($('#' + value[0].id.replace('minus', '') + 'input').val());
    $('#' + value[0].id.replace('minus', '') + 'input').val(quantity > 1 ? quantity - 1 : quantity);

    var finalData='' 

    var foodItems = "[" + localStorage.getItem('foodItem') + "]";

    var cartFoodItems = JSON.parse(foodItems);

    for (var i = 0; i < cartFoodItems.length; i++) {
      var foodItemName =  cartFoodItems[i].name.replace(/ +/g, '') ;
      if(value[0].id.replace('plus', '') == foodItemName)
      {
       cartFoodItems[i].quantity =  (parseInt(quantity - 1)).toString(); 
      }
      if(finalData == '')
      {
        finalData += JSON.stringify(cartFoodItems[i]);
      }
      else{
      finalData +=','+ JSON.stringify(cartFoodItems[i]) ;
      }
    }
    localStorage.removeItem('foodItem');
    localStorage.setItem('foodItem',finalData)

}


function plus(value) {
    var quantity = parseInt($('#' + value[0].id.replace('plus', '') + 'input').val());
    $('#' + value[0].id.replace('plus', '') + 'input').val(quantity + 1);

    var finalData='' 

    var foodItems = "[" + localStorage.getItem('foodItem') + "]";

    var cartFoodItems = JSON.parse(foodItems);

    for (var i = 0; i < cartFoodItems.length; i++) {
      var foodItemName =  cartFoodItems[i].name.replace(/ +/g, '') ;
      if(value[0].id.replace('plus', '') == foodItemName)
      {
       cartFoodItems[i].quantity =  (parseInt(quantity + 1)).toString(); 
      }
      if(finalData == '')
      {
        finalData += JSON.stringify(cartFoodItems[i]);
      }
      else{
      finalData +=','+ JSON.stringify(cartFoodItems[i]) ;
      }
    }
    localStorage.removeItem('foodItem');
    localStorage.setItem('foodItem',finalData)
}

function proceedtopay() {
    var totalAmountToPay = 0;
    var foodItems = "[" + localStorage.getItem('foodItem') + "]";

    var cartFoodItems = JSON.parse(foodItems);

    for (var i = 0; i < cartFoodItems.length; i++) {
        // console.log(cartFoodItems[i].price)
        totalAmountToPay += parseFloat(cartFoodItems[i].quantity * parseFloat(cartFoodItems[i].price))
        $('#contents').append(
            "<div class="
            + '"row"'
            + ">"
            + "<div class="
            + '"col-md-3"' + ">"
            + cartFoodItems[i].name
            + "</div>"
            + "<div class="
            + '"col-md-3"' + ">"
            + cartFoodItems[i].quantity
            + "</div>"
            + "<div class="
            + '"col-md-3"' + ">"
            + cartFoodItems[i].price
            + "</div>"
            + "<div class="
            + '"col-md-3"' + ">"
            + cartFoodItems[i].quantity * parseFloat(cartFoodItems[i].price)
            + "</div>"
            + "</div>"
        )
    }
    $('#contents').append(
        "<hr>"
        + "<b>Amount To Pay here :</b>" + "<h1>" + totalAmountToPay + "/-</h1>"

    );

    console.log(totalAmountToPay);


}