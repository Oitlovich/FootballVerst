window.addEventListener('scroll', () => {
    const upparrow = document.getElementsByClassName('upperbutton_section')[0]
    
    window.pageYOffset > 700 ? upparrow.classList.remove("upperbutton_section_nodisplay") : upparrow.classList.add("upperbutton_section_nodisplay")
});

document.getElementsByClassName('person').map(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('person_active')
    })
})