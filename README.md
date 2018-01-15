# Online Courses Update Notify

A simple Node.js app that reads RSS feed from http://www.onlinecoursesupdate.com/ and sends notifications to users via [LINE Notify API](https://notify-bot.line.me/doc/en/).

## Installation
```bash
git clone https://github.com/suksit/ocu-notify.git
cd ocu-notify
npm install
```

## Configuration
Create ```tokens.json``` from the template:
```bash
cp tokens.json.example tokens.json
```
Then put LINE Notify access token(s) in ```tokens.json```. The ```name``` field is just a reminder and can be anything. For example,

```json
[
  {
    "name": "me",
    "value": "ulzku7sSCbd09sP163Yc4Dk4tOAQKj9UMpNTqY1bzll"
  },
  {
    "name": "some group",
    "value": "ab7e19UMpNTqY1bz5l0POs163Yc4DAQk4tSCbd09sKj"
  }
]
```

## Usage
One-time execution:
```bash
node index.js
```
Crontab with Docker:
```bash
docker build -t ocu-notify .
docker run -d --name ocu_notify ocu-notify
