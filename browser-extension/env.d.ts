interface ImportMetaEnv {
    readonly VITE_SHORTEN_SERVER_URL: string
    readonly VITE_SHORTEN_LOGIN_URL: string
    readonly VITE_SHORTEN_LOGOUT_URL: string
    readonly VITE_SHORTEN_GENERATE_URL: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
