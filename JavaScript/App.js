// Funzione per cambuare tema

const themeBtns = document.getElementById('theme-button')
const dark = 'dark-theme'


const selectedTheme = localStorage.getItem('selected-theme')
const getCurrentTheme = () => document.body.classList.contains(dark) ? 'dark' : 'light'

if (selectedTheme) {

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](dark)
}

themeBtns.addEventListener('click', () => {
    document.body.classList.toggle(dark)
    localStorage.setItem('selected-theme', getCurrentTheme())
})




// Funzione per cambiare icona

const themeBtn = document.getElementById('theme-button')
const icon = 'uil-bright'


const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentIcon = () => themeBtn.classList.contains(icon) ? 'uil-moon' : 'uil-bright'

if (selectedIcon) {

    themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](icon)
}

themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle(icon)
    localStorage.setItem('selected-icon', getCurrentIcon())
})




// Funzione per cambuare Button

const themeBt = document.getElementById('theme-button')
const btn = 'btn_dark'


const selectedBtn = localStorage.getItem('selected-btn')
const getCurrentBtn = () => themeBt.classList.contains(btn) ? 'btn' : 'btn_dark'

if (selectedBtn) {
    themeBt.classList[selectedBtn === 'btn' ? 'add' : 'remove'](btn)
}

themeBt.addEventListener('click', () => {
    themeBt.classList.toggle(btn)
    localStorage.setItem('selected-btn', getCurrentBtn())
})