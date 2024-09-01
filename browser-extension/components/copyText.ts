export function copyText(input: HTMLInputElement, tooltip: HTMLDivElement) {
    input.addEventListener('click', (event) => {
        if (input.value && input.value.startsWith('http')) {
            input.select();
            input.setSelectionRange(0, 99999);

            try {
                document.execCommand('copy');
                tooltip.classList.toggle('show')
            } catch (err) {
                alert('Failed to copy!');
            }
        }
    })
}