## first-electron-app

### Issues history

1. Error: Cannot find module '@electron-forge/plugin-fuses'
   1. https://www.electronforge.io/config/plugins/fuses
   2. https://github.com/electron/forge/issues/3509
2. Socket hang up / ETIMEOUT 20.205.243.166:443
   1. https://blog.csdn.net/weixin_42728767/article/details/122568179
   2. https://github.com/electron/forge/issues/3285
3. Make file too large -- ASAR
   1. https://www.electronjs.org/zh/docs/latest/tutorial/asar-archives
   2. https://github.com/electron/forge/issues/3224
4. Personal access token -- public_repo
   1. https://github.com/settings/tokens/new
   2. export GITHUB_TOKEN = 'xxx'
5. Publish to GitHub releases -- Default draft
   1. https://www.electronjs.org/zh/docs/latest/tutorial/%E6%8E%A8%E9%80%81%E6%9B%B4%E6%96%B0%E6%95%99%E7%A8%8B
   2. https://stackoverflow.com/questions/75270468/electron-forge-github-publisher-doesnt-create-any-release
   3. https://github.com/Lsnsh/first-electron-app/releases
6. NPM runtime package env variable -- Rumtime Variable
   1. https://docs.npmjs.com/cli/v10/using-npm/scripts#packagejson-vars
   2. https://github.com/nodejs/help/issues/2354
7. NPM version command -- Auto commit and add tag
   1. https://docs.npmjs.com/cli/v10/commands/npm-version
   2. https://stackoverflow.com/questions/44370727/how-to-call-npm-version-to-update-my-own-packages-version-and-then-commit
   3. https://docs.npmjs.com/updating-your-published-package-version-number
8. Uncaught Exception: Error: Could not get code signature for running application at initUpdater -- Code Signing
   1. https://www.electronjs.org/zh/docs/latest/tutorial/code-signing
   2. https://github.com/electron/electron/issues/7476
9. Error: Could not find any Electron packages in devDependencies / `npm install` Electron output RequestError: read ETIMEDOUT / socket hang up
   1.  https://www.electronjs.org/docs/latest/tutorial/installation#custom-mirrors-and-caches
   2.  https://github.com/electron/electron-quick-start/issues/626