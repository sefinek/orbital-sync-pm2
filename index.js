require('dotenv').config();
const { spawn } = require('node:child_process');
const path = require('node:path');
const orbitalPath = path.join(__dirname, 'node_modules', 'orbital-sync', 'dist', 'index.js');

const startOrbitalSync = () => {
	const orbital = spawn('node', [orbitalPath], { stdio: 'inherit' });

	orbital.on('error', err => console.error(`Failed to start orbital-sync: ${err.message}`));

	orbital.on('exit', code => {
		console.log(`orbital-sync exited with code ${code}, restarting in 5 seconds...`);
		setTimeout(startOrbitalSync, 5000);
	});
};

startOrbitalSync();