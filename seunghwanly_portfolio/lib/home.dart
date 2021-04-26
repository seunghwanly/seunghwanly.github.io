import 'package:flutter/material.dart';
// components
import 'package:seunghwanly_portfolio/components/color.dart';
import 'package:seunghwanly_portfolio/components/components.dart';
import 'package:seunghwanly_portfolio/components/spacing.dart';
import 'package:seunghwanly_portfolio/components/typography.dart';
// packages
import 'package:flutter_icons/flutter_icons.dart';
import 'package:seunghwanly_portfolio/experience.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:google_fonts/google_fonts.dart';

GlobalKey key = new GlobalKey();

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

/**
 *  ABOUT ME / AWARD / EDUCATION
 */
class _HomePageState extends State<HomePage> {
  ScrollController _controller = new ScrollController();

  void scrollTo() {
    RenderBox box = key.currentContext.findRenderObject();
    Offset pos = box.localToGlobal(Offset.zero);
    _controller.animateTo(pos.dy,
        duration: Duration(milliseconds: 1000), curve: Curves.ease);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          SingleChildScrollView(
            controller: _controller,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                // MENU BAR ----------------------------------------------------------
                MenuBar(),
                // Title thumbnail
                title(context, title: 'THINGS ABOUT\nSEUNGHWAN LEE'),
                // ABOUT ME ----------------------------------------------------------
                AboutMe(),
                // AWARD -------------------------------------------------------------
                Awards(),
                // EDUCATION ---------------------------------------------------------
                Education(),
                // FOOTER ------------------------------------------------------------
                Footer()
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget title(BuildContext context, {title}) {
    final size = MediaQuery.of(context).size;
    return Stack(
      alignment: AlignmentDirectional.center,
      children: <Widget>[
        Container(
          height: 600,
          width: double.infinity,
          decoration: BoxDecoration(
              image: DecorationImage(
                  image: AssetImage('title/typing.gif'),
                  colorFilter: ColorFilter.mode(
                      Colors.black.withOpacity(0.5), BlendMode.darken),
                  fit: BoxFit.cover)),
        ),
        Container(
          margin: marginHorizontal(size.width),
          child: Text(
            title,
            style: imageTitleWhiteTextStyle,
            textAlign: TextAlign.center,
          ),
        ),
        Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            SizedBox(
              height: 200,
            ),
            SizedBox(
              height: 200,
            ),
            InkWell(
                onTap: () => scrollTo(),
                child: Container(
                  height: 80,
                  width: double.infinity,
                  alignment: Alignment.bottomCenter,
                  padding: EdgeInsets.only(bottom: 20),
                  child: Icon(
                    Icons.keyboard_arrow_down_rounded,
                    size: 60,
                    color: Colors.white,
                  ),
                ))
          ],
        ),
      ],
    );
  }
}

class AboutMe extends StatelessWidget {
  void launchURL(url) async =>
      await canLaunch(url) ? await launch(url) : print('cannot open');

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
      key: key,
      color: Colors.white,
      child: Column(
        children: <Widget>[
          SizedBox(height: 200),
          Align(
            alignment: Alignment.topLeft,
            child: Container(
                margin: marginHorizontal(size.width),
                child: Text('About Me', style: headlineSecondaryTextStyle)),
          ),
          SizedBox(height: 50),
          Align(
            alignment: Alignment.center,
            child: Container(
                margin: marginHorizontal(size.width),
                child: RichText(
                  textAlign: TextAlign.center,
                  text: TextSpan(children: <TextSpan>[
                    TextSpan(
                        text: '안녕하세요 !\n현재 동국대학교 컴퓨터공학과에서 재학 중인 ',
                        style: bodyTextStyle),
                    TextSpan(text: ' 그림🎨', style: subtitleTextStyle),
                    TextSpan(text: ' 과 ', style: bodyTextStyle),
                    TextSpan(text: '앱 개발👨‍💻', style: subtitleTextStyle),
                    TextSpan(text: '을 좋아하는\n', style: bodyTextStyle),
                    TextSpan(
                        text: '이승환, Seunghwan Lee', style: subtitleTextStyle),
                    TextSpan(text: ' 이라고 합니다.\n', style: bodyTextStyle),
                    TextSpan(
                        text:
                            '프로젝트 관리는 Github에서 하고 있으며, 공유하고 싶은 내용들은 velog.io에서 포스팅하고 있습니다.',
                        style: bodyTextStyle),
                  ]),
                )),
          ),
          SizedBox(height: 50),
          Align(
            alignment: Alignment.center,
            child: Container(
              margin: marginHorizontal(size.width * 0.8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Container(
                      width: 120,
                      child: TextButton(
                        onPressed: () =>
                            launchURL('https://github.com/seunghwanly'),
                        child: Row(
                          children: <Widget>[
                            Icon(
                              Ionicons.logo_github,
                              size: 35,
                              color: Colors.black,
                            ),
                            Text(' Github',
                                style: GoogleFonts.raleway(
                                    fontSize: 22,
                                    fontWeight: FontWeight.w600,
                                    color: textPrimary))
                          ],
                        ),
                      )),
                  Container(
                      width: 120,
                      child: TextButton(
                        onPressed: () =>
                            launch('https://velog.io/@seunghwanly'),
                        child: Row(
                          children: <Widget>[
                            Icon(
                              Ionicons.logo_vimeo,
                              color: Colors.black,
                              size: 35,
                            ),
                            Text(' velog',
                                style: GoogleFonts.raleway(
                                    fontSize: 22,
                                    fontWeight: FontWeight.w600,
                                    color: textPrimary))
                          ],
                        ),
                      ))
                ],
              ),
            ),
          ),
          SizedBox(height: 200),
        ],
      ),
    );
  }
}

// ignore: must_be_immutable
class Awards extends StatelessWidget {
  var list = [
    {
      'award': 'AI 학습용 한국인 두피 상태 이미지 데이터 온라인 아이디어 해커톤 대회',
      'year': '2021',
      'price': '대상',
      'from': '한국디지털융합진흥원(KIDICO)'
    },
    {
      'award': '한국통신학회 동계종합학술발표회 5G와 AI 기반의 ICT융합 서비스 아이디어 경진대회',
      'year': '2021',
      'price': '장려상',
      'from': '한국통신학회(KICS)'
    },
    {
      'award': '창업캡스톤디자인 창업경진대회',
      'year': '2020',
      'price': '장려상',
      'from': '동국대학교 스타트업 캠퍼스 / sbq 아카데미 X 캠퍼스 CEO'
    },
    {
      'award': '동국대학교 소프트웨어공학개론 수업 프로젝트',
      'year': '2020',
      'price': '최우수상',
      'from': '동국대학교 컴퓨터공학과'
    },
    {
      'award': '제4회 2017년 EAS Presentation Competition',
      'year': '2017',
      'price': '최우수상',
      'from': '동국대학교 총장'
    },
    {
      'award': '2016 공과대학생 기술보고서 작성 및 발표 경연대회',
      'year': '2016',
      'price': '장려상',
      'from': '동국대학교 공과대학'
    },
  ];

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
        color: themeLightOrange.withOpacity(0.3),
        child: Column(children: <Widget>[
          SizedBox(height: 200),
          Align(
            alignment: Alignment.topLeft,
            child: Container(
                margin: marginHorizontal(size.width),
                child: Text('Awards', style: headlineSecondaryTextStyle)),
          ),
          SizedBox(height: 50),
          Container(
            width: double.infinity,
            height: 300,
            margin: marginHorizontal(size.width * 0.4),
            alignment: Alignment.center,
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: list.length,
              shrinkWrap: true,
              itemBuilder: (context, index) {
                return Container(
                  width: 300,
                  height: 100,
                  decoration: BoxDecoration(
                      color: Colors.white,
                      border: Border.all(color: lightWhite),
                      borderRadius: BorderRadius.circular(20),
                      boxShadow: [BoxShadow(color: Color(0xFFEEEEEE))]),
                  padding: EdgeInsets.symmetric(horizontal: 20, vertical: 40),
                  margin: EdgeInsets.symmetric(horizontal: 10),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      // icon and year
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Icon(
                            Ionicons.ios_trophy,
                            size: 24,
                            color: themeLightOrange,
                          ),
                          Text(list[index]['year'], style: awardPriceTextStyle)
                        ],
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      // name
                      Text(list[index]['award'], style: awardTitleTextStyle),
                      SizedBox(
                        height: 10,
                      ),
                      // price and from
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Text(list[index]['price'],
                            style: awardPriceTextStyle),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      Align(
                        alignment: Alignment.centerRight,
                        child: Text(list[index]['from'],
                            style: awardDescTextStyle,
                            textAlign: TextAlign.end),
                      )
                    ],
                  ),
                );
              },
            ),
          ),
          SizedBox(height: 200),
        ]));
  }
}

class Education extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
        color: Colors.white,
        child: Column(children: <Widget>[
          SizedBox(height: 200),
          Align(
            alignment: Alignment.topLeft,
            child: Container(
                margin: marginHorizontal(size.width),
                child: Text('Education', style: headlineSecondaryTextStyle)),
          ),
          SizedBox(height: 50),
          Align(
            alignment: Alignment.center,
            child: Container(
                margin: marginHorizontal(size.width),
                child: size.width > 600
                    ? Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              Text('동국대학교', style: subtitleTextStyle),
                              Text('컴퓨터공학과', style: awardPriceTextStyle),
                            ],
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.end,
                            children: <Widget>[
                              Text('2016.02 ~ 2022.02',
                                  style: awardPriceTextStyle),
                              Text('졸업예정', style: awardDescTextStyle),
                            ],
                          )
                        ],
                      )
                    : Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              Text('동국대학교', style: subtitleTextStyle),
                              Text('컴퓨터공학과', style: awardPriceTextStyle),
                            ],
                          ),
                          SizedBox(
                            height: 10,
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.end,
                            children: <Widget>[
                              Text('2016.02 ~ 2022.02',
                                  style: awardPriceTextStyle),
                              Text('졸업예정', style: awardDescTextStyle),
                            ],
                          )
                        ],
                      )),
          ),
          SizedBox(height: 200),
        ]));
  }
}
