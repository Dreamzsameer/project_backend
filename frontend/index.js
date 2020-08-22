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
        fullname: name,
        email: email,
        mobile: contact,
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
        userid: user_id,
        productid: product_id,
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
        productname: name,
        brand: brand,
        price: price,
        description: desc,
        warrenty: warrenty,
        image: img,
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
  $("#btn_order").click(function (e) {
    userid = $("#ouser_id").val();
    productid = $("#oproduct_id").val();

    $.ajax({
      url: "http://localhost:8080/order/add",
      type: "POST",
      dataType: "json",
      data: {
        userid: userid,
        productid: productid,
      },
      success: function (res, textStatus, xhr) {
        if (res.message == true) {
          alert("You are successfully registered order");
        } else {
          alert(res.message);
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        alert(errorThrown);
      },
    });
  });
  $("#btn_cart").click(function (e) {
    userid = $("#cuser_id").val();
    productid = $("#cproduct_id").val();

    $.ajax({
      url: "http://localhost:8080/cart/add",
      type: "POST",
      dataType: "json",
      data: {
        userid: userid,
        productid: productid,
      },
      success: function (res, textStatus, xhr) {
        if (res.message == true) {
          alert("You are successfully registered cart");
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
