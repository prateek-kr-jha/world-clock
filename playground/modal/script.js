const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");


const openModal = ()=> {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = ()=>{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

openModalBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if(e.key == "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
})