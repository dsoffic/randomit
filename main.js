const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
	win = new BrowserWindow({
		width: 950,
		height: 500,
		resizable: false,
		autoHideMenuBar: true,
		webPreferences: {
        nodeIntegration: true
    },
		// icon: __dirname + "/img/icon.png"
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));


	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	app.quit();
});
