import 'package:flutter/material.dart';
// components
import 'package:seunghwanly_portfolio/components/color.dart';
import 'package:seunghwanly_portfolio/components/components.dart';
import 'package:seunghwanly_portfolio/components/spacing.dart';
import 'package:seunghwanly_portfolio/components/typography.dart';
// packages
import 'package:flutter_icons/flutter_icons.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:google_fonts/google_fonts.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

/**
 *  ABOUT ME / AWARD / EDUCATION
 */
class _HomePageState extends State<HomePage> {
  ScrollController _controller = new ScrollController();

  // for scroll
  GlobalKey key;

  @override
  void initState() {
    super.initState();
    key = new GlobalKey();
  }

  void scrollTo(double height) {
    RenderBox box = key.currentContext.findRenderObject();
    Offset pos = box.localToGlobal(Offset.zero);
    _controller.animateTo(
        //pos.dy,
        height,
        duration: Duration(milliseconds: 1200),
        curve: Curves.ease);
  }

  @override
  void dispose() {
    super.dispose();
    _controller.dispose();
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
                // Title thumbnail
                title(context, title: 'THINGS ABOUT\nSEUNGHWAN LEE'),
                // ABOUT ME ----------------------------------------------------------
                AboutMe(key: key),
                // AWARD -------------------------------------------------------------
                Awards(),
                // EDUCATION ---------------------------------------------------------
                Education(),
                // FOOTER ------------------------------------------------------------
                Footer()
              ],
            ),
          ),
          Positioned(
              right: 45.0,
              bottom: 45.0,
              child: FloatingActionButton(
                onPressed: () => _controller.animateTo(0,
                    duration: Duration(milliseconds: 1000), curve: Curves.ease),
                child: Icon(Icons.keyboard_arrow_up_rounded,
                    size: 30, color: Colors.white),
                backgroundColor: themeLightOrange,
              )),
          // MENU BAR ----------------------------------------------------------
          MenuBar(),
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
          height: size.height,
          width: double.infinity,
          decoration: BoxDecoration(
              image: DecorationImage(
                  image: AssetImage('assets/title/tech.jpg'),
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
              height: size.height * 0.3,
            ),
            SizedBox(
              height: size.height * 0.3,
            ),
            InkWell(
                onTap: () => scrollTo(size.height),
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

class AboutMe extends StatefulWidget {
  AboutMe({Key key}) : super(key: key);

  @override
  _AboutMeState createState() => _AboutMeState();
}

class _AboutMeState extends State<AboutMe> {
  void launchURL(url) async =>
      await canLaunch(url) ? await launch(url) : print('cannot open');

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
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
                  textAlign: TextAlign.left,
                  text: TextSpan(children: <TextSpan>[
                    TextSpan(
                        text:
                            '??????????????? !\nFront-end ???????????? ????????? ?????????, Seunghwan Lee ?????????.????\n',
                        style: bodyTextStyle),
                    // TextSpan(
                    //     text: '??????',
                    //     style: bodyTextStyleWithBackground(
                    //         text: Colors.black, background: themeLightOrange.withOpacity(0.2))),
                    TextSpan(text: '??????', style: bodyTextStyle),
                    TextSpan(
                        text: ' ??? ???????????? AdobeXD, Figma??? UI/UX ???????????? ???????????????.\n',
                        style: bodyTextStyle),
                    TextSpan(
                        text: 'Cross-platform??? ???????????? ', style: bodyTextStyle),
                    // TextSpan(
                    //     text: '?????????',
                    //     style: bodyTextStyleWithBackground(
                    //         text: Colors.black, background: themeBlue.withOpacity(0.2))),
                    TextSpan(text: '?????????', style: bodyTextStyle),
                    TextSpan(
                        text: '??? ?????? ?????????????????? Flutter??? ?????????????????? ?????? ?????? ?????????????????????.\n',
                        style: bodyTextStyle),
                    TextSpan(
                        text:
                            '???????????? ????????? Github?????? ?????? ?????????, ???????????? ?????? ???????????? velog?????? ??????????????? ????????????.',
                        style: bodyTextStyle),
                  ]),
                )),
          ),
          SizedBox(height: 50),
          Align(
            alignment: Alignment.center,
            child: Container(
              margin: marginHorizontal(size.width),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Expanded(
                      // width: 120,
                      flex: 2,
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
                            size.width > 800
                                ? Text(' Github',
                                    style: GoogleFonts.raleway(
                                        fontSize: 22,
                                        fontWeight: FontWeight.w600,
                                        color: textPrimary))
                                : SizedBox()
                          ],
                        ),
                      )),
                  Expanded(
                      // width: 120,
                      flex: 2,
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
                            size.width > 800
                                ? Text(' velog',
                                    style: GoogleFonts.raleway(
                                        fontSize: 22,
                                        fontWeight: FontWeight.w600,
                                        color: textPrimary))
                                : SizedBox()
                          ],
                        ),
                      )),
                  Expanded(
                      // width: 120,
                      flex: 2,
                      child: TextButton(
                        onPressed: () => launch('https://youtu.be/tgnJY8BZ5-U'),
                        child: Row(
                          children: <Widget>[
                            Icon(
                              Ionicons.logo_youtube,
                              color: Colors.black,
                              size: 35,
                            ),
                            size.width > 800
                                ? Text(' Youtube',
                                    style: GoogleFonts.raleway(
                                        fontSize: 22,
                                        fontWeight: FontWeight.w600,
                                        color: textPrimary))
                                : SizedBox()
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
      'award': 'AI ????????? ????????? ?????? ?????? ????????? ????????? ????????? ???????????? ????????? ??????',
      'year': '2021',
      'price': '??????',
      'from': '??????????????????????????????(KIDICO)'
    },
    {
      'award': '?????????????????? ??????????????????????????? 5G??? AI ????????? ICT?????? ????????? ???????????? ????????????',
      'year': '2021',
      'price': '?????????',
      'from': '??????????????????(KICS)'
    },
    {
      'award': '???????????????????????? ??????????????????',
      'year': '2020',
      'price': '?????????',
      'from': '??????????????? ???????????? ????????? / sbq ???????????? X ????????? CEO'
    },
    {
      'award': '??????????????? ??????????????????????????? ?????? ????????????',
      'year': '2020',
      'price': '????????????',
      'from': '??????????????? ??????????????????'
    },
    {
      'award': '???4??? 2017??? EAS Presentation Competition',
      'year': '2017',
      'price': '????????????',
      'from': '??????????????? ??????'
    },
    {
      'award': '2016 ??????????????? ??????????????? ?????? ??? ?????? ????????????',
      'year': '2016',
      'price': '?????????',
      'from': '??????????????? ????????????'
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
                              Text('???????????????', style: subtitleTextStyle),
                              Text('??????????????????', style: awardPriceTextStyle),
                            ],
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.end,
                            children: <Widget>[
                              Text('2016.02 ~ 2022.02',
                                  style: awardPriceTextStyle),
                              Text('????????????', style: awardDescTextStyle),
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
                              Text('???????????????', style: subtitleTextStyle),
                              Text('??????????????????', style: awardPriceTextStyle),
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
                              Text('????????????', style: awardDescTextStyle),
                            ],
                          )
                        ],
                      )),
          ),
          SizedBox(height: 200),
        ]));
  }
}
