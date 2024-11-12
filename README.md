# Orbital Sync PM2
Runs the [orbital-sync](https://github.com/mattwebbio/orbital-sync) process continuously (24/7) using [PM2](https://www.npmjs.com/package/pm2). You don't need to install this module globally (-g).
You can set environment variables in the `.env` file.

## Installation
```bash
cd ~
git clone https://github.com/sefinek/orbital-sync-pm2.git
cd orbital-sync-pm2
cp .env.default .env
mcedit .env
npm install
npm install pm2 -g
sudo chown -R $USER:$USER /var/log/orbital-sync
node .     // first test, ^C to exit
pm2 start
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME
pm2 save
systemctl status pm2-sefinek
```

And that's all, good luck!