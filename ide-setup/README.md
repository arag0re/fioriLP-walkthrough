# How to Setup your IDE to be ready to use SAPUI5 and start developing

I will quickly guide you through the initial IDE Setup of VSCode to use with SAPUI5 Addons

## Install a Packagemanager if u aren't on Linux

on MacOS install homebrew (you will need Xcode commandlindtools installed):

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

on Windows install chocolatey:
first run:
`Get-ExecutionPolicy`
If it returns Restricted, then run:
`Set-ExecutionPolicy AllSigned` or `Set-ExecutionPolicy Bypass -Scope Process`

then finally run:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Install nodeVersionManager

on MacOS:
`brew install nvm`

on Windows:
`choco install nvm`

on Linux (Ubuntu is only tested distro):
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`

## Install LongTermSupport Version of Node.js

`nvm install 16.13.2`
`nvm use 16.13.2`

## Install Visual Studio Code

on MacOS:
`brew install --cask vscode`

on Windows:
`choco install vscode`

on Linux:
`sudo snap install code --classic`

## Start Vscode

open up visual studio code

![openVSCode](https://github.com/arag0re/fioriLP-walkthrough/images/OpenVscode.png)

click on the right side on the Tetris like looking graphic

![installAddons](https://github.com/arag0re/fioriLP-walkthrough/images/installAddons.png)

search for `Application Wizard` and install it

![searchForAddonsAndInstall](https://github.com/arag0re/fioriLP-walkthrough/images/searchForAddonsAndInstall.png)

do the same for the rest of the List below:

-  Fiori XML Lint
-  SAP Fiori Tools - Application Modeler
-  SAP Fiori Tools - Service Modeler
-  SAPUI5 Extension
-  UI5 i18n Check
