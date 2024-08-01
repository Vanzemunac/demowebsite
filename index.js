// get the element
const element = document.getElementById('liked');
const b = document.getElementById('button');
const card = document.querySelectorAll('thecard');
// always checking if the element is clicked, if so, do alert('hello')
element.addEventListener("click", () => {
    const card = document.querySelector('.thecard');
    card.classList.toggle('rotated');
    //alert('clicked');

    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    const f = setTimeout(() =>{
        b.style.visibility = "hidden";
    }, 1000);
    
});
