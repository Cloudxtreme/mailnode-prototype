(function () {
  $(function () {
    $('.toggler').click(function () {
      $(this).parents(".toggle-container").find(".toggled-form").toggle($(this).is(":checked"));
    });
    function optinStatus(whether) {
      $(".customize").toggle(whether);
      $(".confirmed-url").toggle(whether);
      $(".welcome-email").toggleClass('hidden', whether);
    }

    $("#single").click(function () {
      var whether = !$(this).is(":checked");
      optinStatus(whether);
    });

    function setWelcomeConfigStatus(toggleStatus) {
      $(".welcome-email-config").toggle(toggleStatus);
    }

      $(".welcome-check").click(function () {
      var toggleStatus = $(this).is(":checked");
        setWelcomeConfigStatus(toggleStatus);
    });
    setWelcomeConfigStatus(false);

  });
}());
