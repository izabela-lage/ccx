function addRedBorder(id) {
element = document.querySelector("#" + id);
element.style.border = "5px solid red";

}

function hightlightCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}