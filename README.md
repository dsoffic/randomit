# RandomIt!
A fully random generator for PC
# Launching from source
 - Install node.js
 - run `npm install`
 - run `npm start` or `electron .`
# Building app
 - Install node.js
 - run `npm install`
 - `electron-packager ./ randomit --platform=%platform% --arch=%architecture% --electron
-version=%electron_version%`
 - %platform% is you platform (ex. win32)
 - %architecture% is you arch (ex. x64)
 - %electron_version% is result of comand `electron -v` without **v** at the begin (ex. 5.0.1)
