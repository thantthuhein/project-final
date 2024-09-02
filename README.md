# URL Shortener / Shorten URL
#### Video Demo: [URL HERE](https://youtu.be/NsL42Eil_wc)
#### Description:
#### The key features:
#### (1) Shorten the Current URL:

Open your web browser and navigate to the page you want to shorten the URL. To Use the URL shortener extension installed in your browser, click on the extension's icon in the toolbar and get the shortened URL.


#### (2) View Logs for Shortened URLs:
After shortening the URL, you can view a log of all URLs you've shortened. This can accessible through the dashboard. After opening the dashboard, you can see a list of your shortened URLs with details such as the original URLs, the short URL key and how many times it gets visited.

#### User Story
In order to use the URL shortener extension, you need to first create user account at the dashboard.
After create user account, now login through the extension with the created account credentials.

After log in through the extension, go to the website you want and click the extension. You can see the shortened URL of current website. You can copy and share it wherever you want.

And on the dashboard side, after logged in, it shows the shortened URLs of the current user and how many times each short URLs got visited.

For the security, API is guarded with JWT token signature validation and revoked state that is stored in the database. When calls the API without token or invalid token, it will returns the error status code and API request will be failed.

#### Future Improvements
- Improve the UI of the dashboard.
- Improve the UI of the extension.
- Add more analytical data.
- Share to Social Media (facebook, instagram, x, etc..)
- Login with Google
- Enhance the storage
- Add team and organizations
- Add more user informations

## Browser Extension

[Browser Extension Repository](https://github.com/thantthuhein/cs50-final-project-fe)

- **Technologies Used**
  - TypeScript
  - WXT Extension Framework
  - Local Storage
  - User Login Guard

- **Features**

  - Login via the extension
  - Shorten the current URL directly from the browser
  - Copy to clipboard

## Backend Server

[Backend Server Repository](https://github.com/thantthuhein/cs50-final-project-be)

- **Technologies Used**
  - Python
  - Flask
  - Flask SQLAlchemy
  - SQLite
  - pyJWT
  - werkzeug
  - dotenv

- **Features**
  - User login and registration from the website
  - View the user’s shortened URLs
  - API for login from the extension
  - API for Generate short URLs from the extension
  - JWT token validation for APIs
  - For the API, guarded with JWT token validation with timestamps and revoke state that is stored in the database
