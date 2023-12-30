/* Folder Tree View version 1.0 */
/* Get the latest from https://github.com/BV5Tl0N/foldertreeview */

var toggler = document.getElementsByClassName("toggler");

for (var i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".toggler-collapsible").classList.toggle("active");
    this.classList.toggle("toggler-down");
  });
}