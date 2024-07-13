# domain-watcher
도메인 헬스체크 용 Mac 및 Windows 트레이 앱

## 개요 
```
특정 도메인에 대하여 일정 주기로 http / https 에 정상 접근되는지 확인하기 위한 트레이 앱
내부적으로 curl 요청을 보내어 확인할 것이고 다중화 환경인 경우
대상 IP 를 알고 있다면 호스트 변조를 통해 접근 할 수 있도록 지원해야 함
도메인 정상 접근 시 초록색, 그렇지 않다면 빨간색 등으로 ui 로 표현하고 싶다
정상 접근이 되지 않은 도메인이 있다면 소리 알람을 통해 인지 할 수 있게 함
Window 앱은 우측 하단 트레이를 열면 작은 팝업으로 열리면 좋을 것 같고, 
MacOS 앱은 상단 트레이 팝업으로 상태창을 보여 주면 좋을 것 같다
```

## 개발 환경
## Window OS 
### 윈도우 패키지 매니저 설치
```md
# choco 설치
https://chocolatey.org/

# msvs2019 빌드 도구 설치 
choco install visualstudio2019buildtools

# power-shell 관리자 모드로 실행
[Environment]::SetEnvironmentVariable("GYP_MSVS_VERSION", "2019", "User")

# npm msvs_version 환경변수 설정
npm config set msvs_version 2019 --global
```
### node-gyp 설치
> 네이티브 모듈을 컴파일하기 위해 필요함
```sh
npm install -g node-gyp@10.2
```

##### NODE_LIBCURL
> libcurl의 강력한 기능을 활용할 수 있으며, 병렬 요청 처리, SSL 인증서 관리, HTTP/2 지원 등 고급 기능 포함, libcurl은 C/C++로 작성되어 있어 네이티브 코드 수준의 성능을 제공하며, 대용량 데이터 처리나 높은 처리 속도에 쓰임.