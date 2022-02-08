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

## Start Vscode and Install extensions

open up visual studio code

![openVSCode](https://github.com/arag0re/fioriLP-walkthrough/blob/master/images/openVscode.png, 'open up visual studio code')

click on the right side on the Tetris like looking graphic

![installExtensions](https://github.com/arag0re/fioriLP-walkthrough/blob/master/images/installExtensions.png, 'install extensions')

search for `Application Wizard` and install it

![searchForExtensionsAndInstall](https://github.com/arag0re/fioriLP-walkthrough/blob/master/images/searchForExtensionsAndInstall.png, 'install Application Wizard')

do the same for the rest of the List below:

-  Fiori XML Lint
-  SAP Fiori Tools - Application Modeler
-  SAP Fiori Tools - Service Modeler
-  SAPUI5 Extension
-  UI5 i18n Check

## Prepare Extensions

Press F1 in VSCode (on Laptops fn + F1 most of the times)
![openAppGen](https://github.com/arag0re/fioriLP-walkthrough/blob/master/images/openAppGen.png, 'open app generator')

Open up Fiori Application Generator for the first time so that the install is complete
![installGenCompleted](https://github.com/arag0re/fioriLP-walkthrough/blob/master/images/installGenCompleted.png, 'complete the installatiopn of the wizard')

## Install Yeoman

open up a new Terminal in VSCode then run:
`npm i -g yo`

## Create first Fiori-App

press F1 again in VSCode or fn + F1 on Laptops
open up the Fiori Application Generator and generate a new App like the following:
