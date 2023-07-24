$(document).on("click", ".scrollable", function (e) {
  e.preventDefault();

  var target = $(this).attr("href");
  var split = target.split("#")[0];

  if (split == ''){
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  }else{
    window.location.href = target;
  }
});

