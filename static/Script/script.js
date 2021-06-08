// slider value

var elem = document.querySelector('input[type="range"]');

var rangeValue = function () {
  var newValue = elem.value;
  var target = document.querySelector(".value");
  target.innerHTML = newValue;
};

elem.addEventListener("input", rangeValue);

// copy button

$(document).on("click", ".copy-btn", function () {
  var range = document.createRange();
  range.selectNode(document.getElementById("output"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
});

// reload button

function refreshPage() {
  window.location.reload();
}

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
