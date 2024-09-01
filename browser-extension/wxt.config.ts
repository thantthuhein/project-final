import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: {
        permissions: ['storage', 'tabs', 'activeTab', 'scripting', 'request', 'webRequest', 'webRequests'],
        host_permissions: [
            "http://*/*",
            "https://*/*"
        ],
        web_accessible_resources: [
            {
              matches: [
                "http://*/*",
                "https://*/*"
              ],
              resources: ['icon/*.png'],
            },
        ],
    }
});
