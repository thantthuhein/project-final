import axios from 'axios'

export function shortenUrl(element: HTMLButtonElement, current_url: HTMLInputElement, short_url: HTMLInputElement) {
    element.addEventListener('click', async (event) => {
        event.preventDefault()

        const payload = {
            long_url: current_url?.value ?? '',
        }

        const url = `${import.meta.env.VITE_SHORTEN_SERVER_URL}${import.meta.env.VITE_SHORTEN_GENERATE_URL}`

        axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + (await browser.storage.local.get('authToken')).authToken
            }
        })
        .then(response => {
            let data = response.data.data

            if (data.short_url) {
                short_url.value = data.short_url
                if (current_url.value) {
                    localStorage.setItem(current_url.value, short_url.value)
                }

            } else {
                localStorage.removeItem(current_url.value)
                alert('Fail')
            }
        })
        .catch(error => {
            const errorMessage = error.response?.data?.data?.message || error.response?.data?.message;
            localStorage.removeItem(current_url.value)

            if (errorMessage) {
                alert(errorMessage)
            } else {
                alert(error)
            }
        })
    })
}