# Orbital Sync PM2
Runs the [orbital-sync](https://github.com/mattwebbio/orbital-sync) process continuously (24/7) using [PM2](https://www.npmjs.com/package/pm2). You don't need to install `orbital-sync` globally (-g).

Set the necessary [environment variables](https://orbitalsync.com/CONFIG.html) in the `.env` file.

## Installation
### Download or upgrade Git
```bash
sudo add-apt-repository ppa:git-core/ppa
sudo apt update && sudo apt -y install git
git --version
```

### Prepare and run
```bash
cd ~
git clone https://github.com/sefinek/orbital-sync-pm2.git
cd orbital-sync-pm2
cp .env.default .env
mcedit .env
npm install
npm install pm2 -g
sudo mkdir /var/log/orbital-sync
sudo chown $USER:$USER /var/log/orbital-sync
node .     // first test, ^C to exit
pm2 start
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME
pm2 save
pm2 logs
```

And that's all, good luck!