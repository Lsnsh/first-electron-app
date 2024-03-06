# Electron examples desktop application

Available on: macOS

这是一个 [Electron][0] 示例应用，用于展示框架的能力，也我的第一个 Electron 应用程序，不断学习和实践官方文档中的示例和功能，并记录过程中遇到的问题。

This is an [Electron][0] example application used to demonstrate the framework's capabilities, which is also my first Electron application, constantly learning and practicing the examples and features in official documentation, and documenting any issues encountered during the process.

## Done List

已完成的部分，在这里记录，点击链接可查看期间遇到过的问题。

Record the parts that have been done here, and click the link to view the problems encountered during this period.

- [教程 / Tutorial](#tutorial)
- [Electron 中的进程 / Processes in Electron](#processes-in-electron)

## Record the problems encountered

记录实践学习中遇到的问题，并留下可行的问题解决方案的相关链接，随时推移相关链接可能会发生变化。

Record the problems encountered in practical learning and leave relevant links for feasible problem-solving solutions. Relevant links may change as time goes by.


### Processes in Electron

> https://www.electronjs.org/zh/docs/latest/tutorial/process-model
> https://www.electronjs.org/docs/latest/tutorial/process-model
> 
> Last updated: 2024/03/05

### Tutorial

> https://www.electronjs.org/zh/docs/latest/tutorial/tutorial-prerequisites
> https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites
> 
> Last updated: 2024/03/05

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
10. Notarize debugger log: An unhandled rejection has occurred inside Forge:  SyntaxError: Unexpected end of JSON input
    1.  https://github.com/electron/notarize/issues/143
    2.  https://github.com/electron/forge/issues/3403
    3.  https://developer.apple.com/forums/thread/657090
    4.  https://mp.apipost.cn/a/4b137555c8bdbc05
    5.  https://stackoverflow.com/questions/74456693/electron-forge-an-unhandled-rejection-has-occurred-inside-forge-object-objec


[0]: https://electronjs.org/
