const closeBtn = document.getElementById("modal-close-btn")
const modal = document.getElementById("modal")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceBtns = document.getElementById("modal-choice-btns")

setTimeout(() => {
    modal.style.display = "inline"
}, 2000)

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

declineBtn.addEventListener("mouseenter", () => {
    modalChoiceBtns.classList.toggle("modal-choice-btns-reverse")
})

consentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    
    const name = consentFormData.get("fullName")
    
    modalText.innerHTML = 
    `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>
    `

    setTimeout(() => {
        const uploadText = document.getElementById("uploadText")
        uploadText.innerText = "Making the sale..."    
    }, 1500)
    
    setTimeout(() => {
        
        document.getElementById("modal-inner").innerHTML = 
        `   <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>
        `
        
        closeBtn.disabled = false
    }, 3000)
})

