## Install NodeJS for Ubuntu/Debian Server
```
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs

# Check if properly installed
node -v
npm -v
```

## Install Dependencies
```
npm install discord.js --save
npm install request --save
npm init
```

## Create config.json
```
{
    "prefix": "/",
    "token": "<TOKEN HERE>",
    "checker": "<CHECKER API HERE>",
    "binlist": "<CUSTOM PHP BINLIST SCRIPT HERE>"
}
```
## Run BOT
```
node index.js
```

## For 24/7 Background Run on Ubuntu/Debian Server
```
npm install forever -g

# Run forever with NodeJS file
forever start index.js

# Stop forever with NodeJS file
forever stop index.js
```
