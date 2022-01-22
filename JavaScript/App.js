// Definisco variabili

const themeBtns = document.getElementById('theme-button')
const dark = 'dark-theme'


// Salvo  in memoria 

const selectedTheme = localStorage.getItem('selected-theme')



// Otteniamo il tema corrente dell'interfaccia convalidando la classe dark-theme

const getCurrentTheme = () => document.body.classList.contains(dark) ? 'dark' : 'light'

if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](dark)
}

// Activate / deactivate the theme manually with the button
themeBtns.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(dark)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())

})







// Definisco variabili

const themeBtn = document.getElementById('theme-button')
const icon = 'uil-bright'

// Salvo  in memoria 


const selectedIcon = localStorage.getItem('selected-icon')


// 


const getCurrentIcon = () => themeBtn.classList.contains(icon) ? 'uil-moon' : 'uil-bright'

if (selectedIcon) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

    themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](icon)
}

// Activate / deactivate the theme manually with the button
themeBtn.addEventListener('click', () => {
        // Add or remove the dark / icon theme

        themeBtn.classList.toggle(icon)
            // We save the theme and the current icon that the user chose

        localStorage.setItem('selected-icon', getCurrentIcon())

    })
    // Definisco variabili

const themeBt = document.getElementById('theme-button')
const btn = 'btn_dark'

// Salvo  in memoria 


const selectedBtn = localStorage.getItem('selected-btn')


// 


const getCurrentBtn = () => themeBt.classList.contains(btn) ? 'btn' : 'btn_dark'

if (selectedBtn) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

    themeBt.classList[selectedBtn === 'btn' ? 'add' : 'remove'](btn)
}

// Activate / deactivate the theme manually with the button
themeBt.addEventListener('click', () => {
    // Add or remove the dark / icon theme

    themeBt.classList.toggle(btn)
        // We save the theme and the current icon that the user chose

    localStorage.setItem('selected-btn', getCurrentBtn())

})