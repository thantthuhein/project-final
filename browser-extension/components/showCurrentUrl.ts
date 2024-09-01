import axios from 'axios'

export function showCurrentUrl(current_url_element: HTMLInputElement, short_url_element: HTMLInputElement) {
    browser.tabs.query({ active: true, currentWindow: true }).then(async tabs => {
        let currentUrl = tabs[0].url

        if (currentUrl && currentUrl.startsWith('http') && current_url_element) {
            current_url_element.value = currentUrl

            if (localStorage.getItem(currentUrl)) {
                if (short_url_element) {
                    short_url_element.value = localStorage.getItem(currentUrl) ?? ''
                }
            } else {
                const payload = {
                    long_url: currentUrl ?? '',
                }

                const url = `${import.meta.env.VITE_SHORTEN_SERVER_URL}${import.meta.env.VITE_SHORTEN_GENERATE_URL}`

                axios.post(url, payload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + (await browser.storage.local.get('authToken')).authToken
                    }
                }).then(response => {
                    let data = response.data.data
                    if (data && data.short_url) {
                        localStorage.setItem(currentUrl, data.short_url)
                        short_url_element.value = data.short_url
                    } else {
                        alert('Fail')
                    }
                })
                .catch(error => {
                    const errorMessage = error.response?.data?.data?.message || error.response?.data?.message;
                    if (errorMessage) {
                        alert(errorMessage)
                    } else {
                        alert(error)
                    }
                })
            }
        }
    })
    .catch(error => {
        alert(error)
    })

    if (current_url_element) {
        current_url_element.value = ``
    }
}

