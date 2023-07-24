$(document).on("focus", "input, textarea", function (e) {
  $(this).next(".placeholder-text").hide();
});

$(document).on("blur", "input, textarea", function (e) {
  if ($(this).val() == "") {
    $(this).next(".placeholder-text").show();
  }
});

$(document).on("click", "#choosefile", function (e) {
  e.preventDefault();
  $('input[name="profilperusahaan"]').trigger("click");
});

$(document).on("change", 'input[name="profilperusahaan"]', function (e) {
  var filename = $(this).val().split("\\").pop();
  if (filename != "") {
    $(".placeholder-file").hide();
    $('input[name="profilperusahaan_text"]').val(filename);
  }
});