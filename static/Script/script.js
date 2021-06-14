// copy button

function copypassword() {
  var range = document.createRange();
  range.selectNode(document.getElementById("output"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect

  document.getElementById('copy-btn')
  .innerHTML="Copied!";
}

// reload button

function refreshPage() {
  $('#output').load(" #output").removeClass('output')
  $('#copy-btn').load(" #copy-btn")
};

// Drop down animatio of menu bar (only for screen width < 786px)

$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

$(document).ready(function () {
  $(".menu a").on("click", function () {
    $("nav ul").removeClass("showing");
  });
});

// Hamburger animation (only for screen width < 786px)

$(document).ready(function () {
  $(".wrapper-menu").click(function () {
    $(this).toggleClass("open");
  });
});

$(document).ready(function () {
  $(".menu a").click(function () {
    $(".wrapper-menu").removeClass("open");
  });
});
