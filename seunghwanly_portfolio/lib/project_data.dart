class ProjectData {
  final String name;
  final String type;
  final String from;
  final String period;
  final String mainDesc;
  final String subDesc;
  final String aboutProject;
  final List<String> myJob;
  final String url;
  final List<String> store;
  final List<String> imageURL;

  ProjectData(
      {this.aboutProject,
      this.type,
      this.from,
      this.mainDesc,
      this.myJob,
      this.name,
      this.period,
      this.subDesc,
      this.url,
      this.store,
      this.imageURL});
}

List<ProjectData> projectData = [
  ProjectData(
      name: 'SEOULLO, 서울로',
      from: '2020년 1학기 공개SW프로젝트',
      type: '팀장, 3인 팀프로젝트',
      period: '03.2020 ~ 06.2020',
      mainDesc: 'Android 기반 소셜네트워크 서비스',
      subDesc: 'Java, Firebase',
      aboutProject:
          '관광지에 대한 광고성 정보가 너무 많은 지금, 서울 내에 사용자들이 직접 가보고 남기는 후기를 통해서 진정성있는 정보를 얻을 수 있도록 플랫폼을 만들어 보았습니다.',
      myJob: [
        'Java기반 Android 개발',
        'Naver Map API로 찾아가는 길 및 걸리는 시간 구현',
        'Google Place 및 Google Map API 주변 관광지 추천 및 검색 구현',
        'Google Place API로 자동 검색 구현',
        'Firebase DB 설계 및 쿼리 구현'
            '검색했던 장소 디바이스 내에 저장',
        '오픈소스 버전 문제 해결',
        '전체적인 UI 디자인 및 개선작업'
      ],
      url: 'https://github.com/CSID-DGU/2020-1-OSSP2-SEOULLO-3',
      store: [
        'https://play.google.com/store/apps/details?id=com.seoullo.seoullotour&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
      ],
      imageURL: [
        'http://user-images.githubusercontent.com/22142225/85195206-8ecc7e80-b30b-11ea-8fbb-c68a509790b3.jpeg',
        'http://user-images.githubusercontent.com/22142225/85195215-955af600-b30b-11ea-8d1b-d9d1a44e8dbf.jpeg'
      ]
      ),
  ProjectData(
      name: 'DGTHRU',
      from: '2020년 동국대학교 팜(Farm) 경진대회',
      type: '팀장, 4인 팀프로젝트',
      period: '08.2020 ~ 11.2020',
      mainDesc: 'React-Native 기반 스마트오더 서비스, 사용자 및 관리자',
      subDesc: 'React-Native, Firebase',
      aboutProject:
          '다음 수업시작까지 커피를 사러 카페에 가기 어려운 학생들을 위해서 동국대학교 생활협동조합카페 통합 스마트오더 시스템을 개발해보았습니다. 미리 주문을 하고 가는 길에 주문한 상품을 찾아 수업을 바로 들어갈 수 있도록 사용자와 관리자 앱을 모두 개발했습니다. 카페에서 가능한 옵션들을 생활협동조합카페 사장님과 이야기를 미리 나누어 보면서 기능 정의를 했습니다.',
      myJob: [
        '전체적인 UI 디자인 및 개선작업',
        'Firebase DB 설계 및 쿼리 구현',
        'React-Native기반 Cross-Platform 개발',
        '사용자, 핸드폰번호 본인인증 구현',
        '사용자, 메뉴 TabView 및 상세보기 구현',
        '사용자, 옵션 기능 및 장바구니 구현',
        '사용자, 카카오페이 결제기능 구현',
        '사용자, 즐겨찾기 기능 및 최근 주문 메뉴 구현',
        '사용자 및 관리자, 실시간 주문관리 구현',
        '관리자, 메뉴 수정 및 조회 구현'
      ],
      url: 'https://github.com/seunghwanly/DGTHRU',
      store: [],
      imageURL: [
        'http://user-images.githubusercontent.com/22142225/99914356-32e5a600-2d40-11eb-8a7c-61bd54fb901d.PNG',
        'http://user-images.githubusercontent.com/22142225/99960045-75a28f00-2dcf-11eb-8faa-861a188ade3a.jpeg',
      ]),
  ProjectData(
      name: 'GAJUGA',
      from: '2020년 2학기 소프트웨어공학개론',
      type: '팀장, 4인 팀프로젝트',
      period: '10.2020 ~ 12.2020',
      mainDesc: 'Flutter 기반 스마트오더 서비스, 사용자 및 관리자',
      subDesc: 'Flutter, Firebase',
      aboutProject: "테이크-아웃이 이루어지는 '레스토랑 자동화 시스템' 주제의 프로젝트, 사용자 및 관리자",
      myJob: [
        '전체적인 UI 디자인 및 개선 작업',
        'Firebase DB 설계 및 쿼리 구현',
        'Flutter 기반 Cross-Platform 개발',
        '사용자, 메인화면, 상세보기, Provider를 이용한 장바구니 구현',
        '사용자, 카카오페이 결제기능 구현',
        '사용자, 최근 주문한 메뉴 기능 구현',
        '관리자, 매출관리 및 재고관리 구현',
        '관리자, 이메일 자동 전송 구현'
      ],
      url: 'https://github.com/seunghwanly/commitSyndrome',
      store: [],
      imageURL: [
        'http://user-images.githubusercontent.com/33684401/100653225-6d2bf480-338b-11eb-91a9-fbaaa2d3a1a2.png',
        'http://user-images.githubusercontent.com/33684401/100653759-39050380-338c-11eb-83cf-30b0c02907a9.png'
      ]),
  ProjectData(
      name: 'HOPE SHARING RELAY',
      from: 'Olinda High School Book Sharing Club, Califorina Brea 희망나눔 프로젝트',
      type: '5인 팀프로젝트',
      period: '11.2020 ~ 12.2020',
      mainDesc: 'Flutter 기반 Mini-Marathon 및 Fundraising 서비스',
      subDesc: 'Flutter, Firebase',
      aboutProject:
          'Olinda HS Book Sharing Club X Korean Town Senior and Community Center LA, California X 동국대학교 봉사활동 프로젝트, COVID-19으로부터 고통받는 Senior들을 위해서 5K 미니마라톤 및 Fundraising을 할 수 있는 봉사활동 서비스를 개발했습니다.',
      myJob: [
        '전체적인 UI와 로고 디자인 및 개선 작업',
        'Firebase DB 설계 및 쿼리 구현',
        'Flutter 기반 Cross-Platform 개발',
        '5개국 휴대폰번호 본인인증 기능 구현',
        '사용자 세션관리 구현',
        '사용자 기부 및 가입정보에 따른 Routing기능 구현',
        'Paypal WebView Redirect 구현',
      ],
      url: 'https://github.com/seunghwanly/minimarathon',
      store: [
        'https://play.google.com/store/apps/details?id=com.hopeSharingRelay',
        'https://apps.apple.com/us/app/hope-sharing-relay/id1542745470'
      ], imageURL: [
        'http://user-images.githubusercontent.com/22142225/101128699-8a8ae800-3643-11eb-9a17-8e5a07864b37.gif',
        'http://user-images.githubusercontent.com/22142225/101128695-88c12480-3643-11eb-8019-921689c9fdcb.gif'
      ]),
  ProjectData(
      name: 'Mobius Platform 레이더 연동',
      from: '브릿지티솔루션(주)',
      type: '2020 겨울하기 현장실습',
      period: '12.2020 ~ 02.2021',
      mainDesc:
          'Node.js 기반 Mobius, IoT Open Source Platform를 이용한 레이더 데이터 시각화 프로젝트',
      subDesc: 'Node.js, Express.js, Docker, Grafana',
      aboutProject:
          '(주)탑엔지니어링 레이더를 이용한 레이더를 시각화 오픈소스 툴인 Grafana를 통해 시각화하는 과정에서 데이터 전송 flow 설계 및 구현을 해보았습니다.',
      myJob: [
        'ubuntu 16.04 환경에서 Node.js 기반 Mobius, docker image화 및 배포',
        'Mobius에 저장된 데이터를 listen 하는 net.Socket Server 설계 및 구현',
        '레이더에서 송신하는 데이터 Parsing 작업',
        'MySQL 실시간 데이터 listener 구현',
        'Grafana 전반적인 UI 디자인 및 데이터 가공 작업'
      ],
      url: 'https://github.com/seunghwanly/mobius-docker',
      store: [],
      imageURL: [
        'http://lh5.googleusercontent.com/FKlCCzdxKX39G95RiELabBGo-ymLAptM8ndfnf9nTPWsv56P6s5mp9kCNSmKFFfWs_Yco5IyJXHUSBfB2KiU6DkldQ0VEF0xdKUE5CeEDytU0uHUxUYzKGVELEGV2RzVzu3z-QzH',
        'http://media.vlpt.us/images/seunghwanly/post/656e5c37-cef8-4505-82b3-ac49410a8b55/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.42.21.png'
      ]),
  // ProjectData(
  //   name: '이건뭐약'
  // ),
  // ProjectData(
  //   name: 'IRURI, 웹툰 매칭 플랫폼'
  // ),
  // ProjectData(
  //   name: '연세대학교 금융기술센터'
  // )
];
