export const navs = () => {let out = document.getElementById("out");
let dispay = document.getElementById("dispay");

out.addEventListener('click', () =>{
    if (dispay.style.display === 'flex'){
        dispay.style.display = 'none';
    } else {
        dispay.style.display = 'none';
    }
})}