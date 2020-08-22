$(document).ready(function () {
  $("#btn_register").click(function (e) {
    name = $("#name").val();
    email = $("#email").val();
    contact = $("#contact").val();
    password = $("#password").val();
    address = $("#address").val();

    $.ajax({
      url: "http://localhost:8080/user/register",
      type: "POST",
      dataType: "json",
      data: {
        name: name,
        email: email,
        contact: contact,
        password: password,
        address: address,
      },
      success: function (res, textStatus, xhr) {
        if (res.message == true) {
          alert("You are successfully registered.\nPlease Login to proceed");
        } else {
          alert(res.message);
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        alert(errorThrown);
      },
    });
  });

  $("#btn_feedback").click(function (e) {
    user_id = $("#user_id").val();
    product_id = $("#product_id").val();
    feedback = $("#feedback").val();
    rating = $("#rating").val();

    $.ajax({
      url: "http://localhost:8080/feedback/add",
      type: "POST",
      dataType: "json",
      data: {
        user_id: user_id,
        product_id: product_id,
        feedback: feedback,
        rating: rating,
      },
      success: function (res, textStatus, xhr) {
        if (res.message == true) {
          alert("feedback aded");
        } else {
          console.log(res);
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        alert(errorThrown);
      },
    });
  });

  $("#btn_product").click(function (e) {
    name = $("#pname").val();
    brand = $("#brand").val();
    price = $("#price").val();
    desc = $("#desc").val();
    warrenty = $("#warrenty").val();
    img = $("#img").val();

    $.ajax({
      url: "http://localhost:8080/product/add",
      type: "POST",
      dataType: "json",
      data: {
        name: name,
        brand: brand,
        price: price,
        desc: desc,
        warrenty: warrenty,
        img: img,
      },
      success: function (res, textStatus, xhr) {
        if (res.message == true) {
          alert("You are successfully registered feedbak");
        } else {
          alert(res.message);
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        alert(errorThrown);
      },
    });
  });
});
