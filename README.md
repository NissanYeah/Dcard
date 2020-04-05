# README

# 2020 Web Backend Intern

Web： http://ec2-3-17-173-21.us-east-2.compute.amazonaws.com:4000/

## 主要檔案

- `./app.js`
- `./models/connectionRecord`：IP的儲存模型
- `./middleware/connectionMonitor`：監測IP連線的middleware

## Model 設計邏輯

`./models/connectionRecord`
- 在 MongoDB 中儲存 ip、剩餘的請求數量、歸零的時間

```js
  ip: { //ip
    type: String,              
    required: true          
  }, 
  rate_limit: { //剩餘的請求數量
    type: Number,              
    required: true          
  },
  reset_time: { //歸零的時間
    type: Date,              
    required: true          
  },
```

## Middleware 設計邏輯

`./middleware/connectionMonitor`

### 若IP紀錄不存在
- 如果IP紀錄不存在->允許連線 & 於mongoDB寫入紀錄

### 若IP紀錄存在

- 剩餘的請求數量>0 && 歸零時間未到 -> 允許連線 & 允許請求數量-1
- 剩餘的請求數量<0  && 歸零時間未到 -> 429錯誤
- 歸零時間已到 -> 允許連線 & 重設紀錄

## Usage


- Backend：Express
- Database: MongoDB
- Server: AWS


Install the dependencies

```
npm install
```

Start the development server (running on 4000 by default)

```
npm run serve
```

## Other

- 題目：https://boards.greenhouse.io/dcard/jobs/2101606?gh_src=e58132461