const projects = [
    {
        title: 'Proyecto 1',
        description:
            'Descripción del proyecto 1.Descripción del proyecto 1. Descripción del proyecto 1. Descripción del proyecto 1.',
        link: '/proyecto1',
        tecnologies: ['Svelte', 'Firebase'],

        img: 'ua.jpg',
        category: 'backend',
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2.',
        link: '/proyecto2',
        tecnologies: ['Node.js', 'Express', 'Mongo DB'],
        img: '3.jpg',
        category: 'backend',
    },
    {
        title: 'Proyecto 3',
        description:
            'Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1.',
        link: '/proyecto1',
        tecnologies: ['Node.js', 'Express', 'Mongo DB', 'Svelte'],
        img: 'ua.jpg',
        category: 'frontend',
    },
    {
        title: 'Proyecto 4',
        description: 'Descripción del proyecto 2.',
        link: '/proyecto2',
        tecnologies: ['Node.js', 'Express', 'Mongo DB', 'Svelte'],
        img: 'web scrapping.jpg',
        category: 'frontend',
    },
]
const button = document.querySelector('.send')

button?.addEventListener('click', () => {
    const tds = document.querySelectorAll('tbody  td')

    const inpuSearch = document.querySelector('.search')

    const projectsContainer = document.querySelector('.project-list')

    const section = tds[0].textContent

    const category = tds[1].textContent

    const url = `https://jerson-tapias/${section}/${category}`

    if (inpuSearch) {
        inpuSearch.value = url
    }

    const projectsFiltered = projects.filter((project) => {
        if (category?.toLocaleLowerCase().trim() === 'all') {
            return true
        }
        return category
            ? project.category.toLocaleLowerCase() ===
                  category?.trim().toLocaleLowerCase()
            : true
    })

    if (projectsContainer) {
        projectsContainer.innerHTML = ''
        projectsContainer.style.display = 'flex'

        projectsContainer.innerHTML = `
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
                <div class="wheel"></div>
                <div class="hamster">
                    <div class="hamster__body">
                        <div class="hamster__head">
                            <div class="hamster__ear"></div>
                            <div class="hamster__eye"></div>
                            <div class="hamster__nose"></div>
                        </div>
                        <div class="hamster__limb hamster__limb--fr"></div>
                        <div class="hamster__limb hamster__limb--fl"></div>
                        <div class="hamster__limb hamster__limb--br"></div>
                        <div class="hamster__limb hamster__limb--bl"></div>
                        <div class="hamster__tail"></div>
                    </div>
                </div>
                <div class="spoke"></div>
            </div>
        `

        renderProjects(projectsFiltered)
    }

    function renderProjects(projectsFiltered) {
        setTimeout(() => {
            if (projectsContainer) {
                projectsContainer.style.display = ''
                projectsContainer.innerHTML = ''

                projectsFiltered.forEach((project) => {
                    projectsContainer.innerHTML += `
                        <article class="card-item">
                                <header>
                                    <img
                                        src=${`/assets/${encodeURIComponent(project.img)}`}
                                        alt=${`Image project:${project.title}`}
                                        
                                        class="project-image"
                                    />
                                </header>

                                <div class="project-content">
                                    <h4 class="project-title">
                                        ${project.title}
                                        <span>
                                            <img
                                                src=${`/assets/arrow-up-right.svg`}
                                                alt=${`Image arrow`}
                                                loading="lazy"
                                                class="arrow-image"
                                            />
                                        </span>
                                    </h4>
                                    <p class="project-description">
                                        ${project.description}
                                    </p>
                                    <footer class="project-tags">
                                        ${project.tecnologies
                                            .map((t) => `<span>${t}</span>`)
                                            .join('')}
                                    </footer>
                                </div>
                            </article>
                    `
                })
            }
        }, 500)
    }
})
