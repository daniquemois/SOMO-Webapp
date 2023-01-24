const ondertekenKnop = document.querySelector('.onderteken');
const tableofcontents = document.querySelector('.tableofcontents');
const verdrag = document.querySelector('.verdragpl');
const handtekeningtoggle = document.querySelectorAll("input[name=checkbox]");

function verdragSluiten() {
    tableofcontents.classList.toggle('active');
    verdrag.classList.toggle('hide');
    ondertekenKnop.classList.toggle('hide');
}
ondertekenKnop.addEventListener("click", verdragSluiten)