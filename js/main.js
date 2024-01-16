let menuBody = document.getElementById("menu_body")
let profileData = document.getElementById("profile_data")
let buttonMenu = document.getElementById("button_menu")
let buttonCloseMenu = document.getElementById("button_close_menu")
let menuProfile = document.querySelector(".menu_profile")

menuBody.addEventListener("scroll", (e) => {
    let valueScroll = e.target.scrollTop
    if(valueScroll > 0) {
        profileData.classList.add("show_profile_data")
    } else {
        profileData.classList.remove("show_profile_data")
    }
})

buttonMenu.onclick = () => {
    menuProfile.classList.toggle("show_menu_profile")
}

buttonCloseMenu.onclick = () => {
    menuProfile.classList.remove("show_menu_profile")
}
