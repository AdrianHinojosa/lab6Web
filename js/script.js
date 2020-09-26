// Adrián Hinojosa: A00822490
// Incluir la script aquí

$("button").on("click", (event) => {
    // Event check.
    event.preventDefault();
    // 
    let sText = $("#newItem").val();
    if (sText != "") {
      $(".myItemList").append(`
     <div class="itemClass">
          <h4> ${sText} </h4>
          <button id="checkItem">Check</button>
          <button id="deleteItem">Delete</button>
     </div>
    `);
    }
  });
  /*
    Method used for checking and unchecking the h3 element
  */
  $(".myItemList").on("click", "#checkItem", function () {
    $(this).parent().find("h4").toggleClass("crossItem");
  });

  /*
    Method used for removing elements
  */
  $(".myItemList").on("click", "#deleteItem", function () {
    $(this).parent().remove();
  });







