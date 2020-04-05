# README

# Dcard

測試用網站： http://ec2-3-17-173-21.us-east-2.compute.amazonaws.com:4000/

- Backend：Express
- Database: MongoDB
- Server: AWS

## Intro

- `./app.js`: 主程式
- `./middleware/connectionMonitor`：監測API連線的middleware
- `./models/connectionRecord`：API的儲存模型


## Usage

Install the dependencies

```
npm install
```

Start the development server (running on 3000 by default)

```
npm run serve
```
