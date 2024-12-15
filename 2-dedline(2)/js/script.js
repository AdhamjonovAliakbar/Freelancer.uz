const modal = document.getElementById("modal")
const list_menu = document.getElementById("list_menu")
list_menu.addEventListener("click",()=>{
    modal.style.display = "block"
})
const links = modal.querySelectorAll("a");

// Har bir <a> uchun hodisani qo'shamiz
links.forEach(link => {
    link.addEventListener("click", () => {
        // Modal oynani yashirish
        modal.style.display = "none";
    });
});