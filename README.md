# README

# Mackay Memorial Hospital voice-to-text Diagnosis system

Run with

- node 10.15.0
- npm 6.4.1

## Usage

Install the dependencies

```
npm install
```

Start the development server (running on 3000 by default)

```
npm run serve
```
## AWS Server installation 

- Mongo：資料庫

```
sudo vi /etc/yum.repos.d/mongodb-org-3.6.repo #修改文件
```

貼上以下內容

```
[mongodb-org-4.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
```

安裝Mongo

```
sudo yum install -y mongodb-org
```

- Lame：用來進行mp3轉檔

```
brew install lame
```

- nodemon：用來持續開啟服務

```
npm install -g nodemon
```



## Package Install

- body-parser：解析前端request
- express-fileupload：獲取上傳的檔案
- node-lame：用來進行mp3轉檔案，把前端來的檔案徹底轉為mp3，再送到google speech api
- mongoose：資料庫套件
- passport：驗證登入

## API document

