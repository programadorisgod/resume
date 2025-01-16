document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('#editableTable')

    table?.addEventListener('click', (event) => {
        const target = event.target

        const input = target.querySelector('input')
        const row = document.querySelectorAll('tbody td')
        const cells = Array.from(row)
        const cellIndex = cells.indexOf(target)

        if (
            (target.tagName === 'TD' && cellIndex === 1) ||
            (cellIndex === 3 && input === null)
        ) {
            const currentValue = target.textContent.trim()

            const newInput = document.createElement('input')
            newInput.type = 'text'
            newInput.value = currentValue

            target.textContent = ''
            target.appendChild(newInput)

            newInput.focus()

            newInput.addEventListener('blur', () => {
                target.textContent = newInput.value
            })

            newInput.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    target.textContent = newInput.value
                }
            })
        }
    })
})
