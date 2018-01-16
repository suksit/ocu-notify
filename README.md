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
Then put LINE Notify access token(s) in ```tokens.json```. The ```name``` field is just a reminder and can be anything. You can also specify ```tags``` to only send notification when a feed entry's category matches one of these tags. For example,

```json
[
  {
    "name": "Me",
    "value": "ulzku7sSCbd09sP163Yc4Dk4tOAQKj9UMpNTqY1bzll"
  },
  {
    "name": "JavaScript User Group",
    "value": "ab7e19UMpNTqY1bz5l0POs163Yc4DAQk4tSCbd09sKj",
    "tags": [
      "javascript",
      "nodejs",
      "webpack"
    ]
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
