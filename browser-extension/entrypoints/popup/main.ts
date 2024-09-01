import './style.css';

(async () => {
  let isLoggedIn: null|string = (await browser.storage.local.get('authToken')).authToken

  browser.storage.local.onChanged.addListener((data) => {
    if (data.authToken) {
      isLoggedIn = data.authToken.newValue as string
      render()
    }
  })

  const render = () => {
    if (isLoggedIn) {
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class="container">
        <h2>Shorten your URL</h2>
        <label for="current_url">Current URL</label>
        <br/>
        <input id="current_url" type="text" name="current_url" value="">
        <br/>
        <label for="short_url">Shortened URL</label>
        <br/>
        <input id="short_url" type="short_url" name="short_url" value="">
        <div class="tooltip-container">
          <div id="tooltip" class="tooltip">Copied to clipboard!</div>
        </div>
        <br/>
        <button id="shorten" type="button">Shorten Now</button>
        <br/>
        <button id="logout" type="button">Logout</button>
      </div>`

      let shortUrlInput = document.querySelector<HTMLInputElement>('#short_url')!
      let currentUrlInput = document.querySelector<HTMLInputElement>('#current_url')!
      let logoutButton = document.querySelector<HTMLButtonElement>('#logout')!
      let shortenButton = document.querySelector<HTMLButtonElement>('#shorten')!
      let tooltip = document.querySelector<HTMLDivElement>('#tooltip')!

      showCurrentUrl(
        currentUrlInput,
        shortUrlInput,
      )
      shortenUrl(
        shortenButton,
        currentUrlInput,
        shortUrlInput,
      )
      logout(
        logoutButton
      )
      redirect(currentUrlInput)
      copyText(shortUrlInput, tooltip)

    } else {
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class="container">
        <h2>Login to URL Shortener</h2>
        <label for="username">Username</label>
        <br/>
        <input id="username" type="text" name="username" value="" required>
        <br/>
        <label for="password">Password</label>
        <br/>
        <input id="password" type="password" name="password" value="" required>
        <br/>
        <button id="login" type="button">Login</button>
      </div>`

      login(
        document.querySelector<HTMLButtonElement>('#login')!,
        document.querySelector<HTMLInputElement>('#username')!,
        document.querySelector<HTMLInputElement>('#password')!
      )
    }
  }

  render()
})()

