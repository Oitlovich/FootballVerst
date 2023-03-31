window.addEventListener('scroll', () => {
    const upparrow = document.getElementsByClassName('upperbutton_section')[0]
    
    window.pageYOffset > 700 ? upparrow.classList.remove("upperbutton_section_nodisplay") : upparrow.classList.add("upperbutton_section_nodisplay")
});
const img = document.getElementsByClassName("section5_person1_img") [0];
const gradient = document.getElementsByClassName("section5_blackgradient") [0];
img.addEventListener("mouseover", function(){
    img.classList.add('display_none')
    gradient.classList.remove('display_none')
});
gradient.addEventListener("mouseout", function(){
    gradient.classList.add('display_none')
    img.classList.remove("display_none")
});
const text2 = document.getElementsByClassName("mark2text") [0];
const img2= document.getElementsByClassName("mark2img") [0];
text2.addEventListener("mouseover", function(){
    text2.classList.add('display_none')
    img2.classList.remove('display_none')
});
img2.addEventListener("mouseout", function(){
    img2.classList.add('display_none')
    text2.classList.remove("display_none")
});
const text3 = document.getElementsByClassName("mark3text") [0];
const img3 = document.getElementsByClassName("mark3img") [0];
text3.addEventListener("mouseover", function(){
    text3.classList.add('display_none')
    img3.classList.remove('display_none')
});
img3.addEventListener("mouseout", function(){
    img3.classList.add('display_none')
    text3.classList.remove("display_none")
});