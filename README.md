![Vanilla Coding](https://s3.ap-northeast-2.amazonaws.com/vanilla-coding/Assets/logo_regular%403x.png)

# Chat Simulator

## TODO

**1. 채팅 히스토리 재생 기능**
- `src/index.js`에 보시면 `CHAT_DATA`라는 변수에 채팅 히스토리가 담겨있습니다.
- `CHAT_DATA`에 담겨있는 데이터를 이용해 앱 구동시 채팅이 자동으로 재생되게 만들어 주시면 됩니다.
- `CHAT_DATA`내의 각각의 데이터는 다음과 같은 구조로 되어 있습니다.
  - `delta`: 시간을 의미합니다. 예) 1000 - 채팅 시작후 1초 경과를 의미
  - `payload`: 메시지에 대한 세부 정보를 담고 있습니다. 사용자의 이름, 메시지 내용이 담겨있습니다.
- 위 데이터를 이용하여 각각의 시간에 맞게 메시지가 생성되고 혹은 사라지게 만들면 됩니다.

## 설치하기

**포크하지 마시고 바로 클론하세요.**

```
git clone https://github.com/vanilla-coding/chat-simulator.git
cd chat-simulator
npm install
```

## 실행하기

```
npm start
```

## 작업하기

* 본인의 브랜치를 생성하여 작업하고 푸쉬해주세요.
