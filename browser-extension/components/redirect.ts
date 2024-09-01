export function redirect(element: HTMLInputElement) {
    element.addEventListener('click', (event) => {
        if (element.value && element.value.startsWith('http')) {
            window.open(element.value, '_blank')
        }
    })
}