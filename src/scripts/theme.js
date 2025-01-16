const themeButton = document.querySelector('.header-options-button-theme')
const body = document.querySelector('body')

const SRC_PATHS = {
    themeLight: '/assets/theme.svg',
    themeDark: '/assets/theme-dark.svg',
    personDark: '/assets/person-dark.svg',
    personLight: '/assets/person.svg',
    projectLight: '/assets/projects.svg',
    projectDark: '/assets/projects-dark.svg',
    historyLight: '/assets/history.svg',
    historyDark: '/assets/history-dark.svg',
    homeLight: '/assets/home.svg',
    homeDark: '/assets/home-dark.svg',
    apiLight: '/assets/api.svg',
    apiDark: '/assets/api-dark.svg',
    broDark: '/assets/bro-yellow.svg',
    broLight: '/assets/bro-blue.svg',
    arrowLight: '/assets/arrow-up-right.svg',
    arrowDark: '/assets/arrow-up-dark.svg',
}

const THEME = {
    dark: 'dark',
    light: 'light',
    theme: 'theme',
}
const optionsKey = ['home', 'project', 'history', 'api']

let savedTheme = localStorage.getItem(THEME.theme) ?? THEME.light

body.dataset.theme = savedTheme
updateImage({ savedTheme })

themeButton.addEventListener('click', () => {
    savedTheme = savedTheme === THEME.light ? THEME.dark : THEME.light

    body.dataset.theme = savedTheme
    updateImage({ savedTheme })
    localStorage.setItem(THEME.theme, savedTheme)
})

function updateImage({ savedTheme }) {
    const header = document.querySelector('.layout-header')
    const subHeader = document.querySelector(
        '.sub-header-section-1-image-text img'
    )
    const asideLefOptions = document.querySelectorAll('.aside-left-options img')

    const broSvg = document.querySelector(
        '.section-home-first-section-article-header img'
    )

    const arrows = document.querySelectorAll('.arrow-image')

    asideLefOptions.forEach((option, index) => {
        const key = optionsKey[index]

        const themeKey = `${key}${savedTheme === THEME.dark ? 'Dark' : 'Light'}`

        option.setAttribute('src', SRC_PATHS[themeKey])
    })

    /**Change thme svg path */
    const themeSvg = header.querySelector('button img')
    themeSvg.setAttribute(
        'src',
        savedTheme === THEME.dark ? SRC_PATHS.themeDark : SRC_PATHS.themeLight
    )

    subHeader.setAttribute(
        'src',
        savedTheme === THEME.dark ? SRC_PATHS.personDark : SRC_PATHS.personLight
    )

    broSvg.setAttribute(
        'src',
        savedTheme === THEME.dark ? SRC_PATHS.broDark : SRC_PATHS.broLight
    )

    arrows.forEach((arrow) => {
        arrow.setAttribute(
            'src',
            savedTheme === THEME.dark
                ? SRC_PATHS.arrowDark
                : SRC_PATHS.arrowLight
        )
    })
}
