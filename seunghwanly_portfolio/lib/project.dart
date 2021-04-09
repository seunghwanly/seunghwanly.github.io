import 'package:animations/animations.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:seunghwanly_portfolio/components/color.dart';
import 'package:seunghwanly_portfolio/components/components.dart';
import 'package:seunghwanly_portfolio/components/spacing.dart';
import 'package:seunghwanly_portfolio/components/typography.dart';
import 'package:seunghwanly_portfolio/project_data.dart';
import 'package:url_launcher/url_launcher.dart';
import 'components/network_image.dart';

class ProjectPage extends StatefulWidget {
  @override
  _ProjectPageState createState() => _ProjectPageState();
}

/**
 *  PROJECTS
 */
class _ProjectPageState extends State<ProjectPage> {
  ScrollController _controller = new ScrollController();

  void scrollTo() {
    _controller.animateTo(600,
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
                // IMAGE BACKGROUND - NAME -------------------------------------------
                title(context, title: "PROJECTS"),
                ProjectList(),
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
          height: 500,
          width: double.infinity,
          decoration: BoxDecoration(
              image: DecorationImage(
                  image: AssetImage('images/title/proj.jpg'),
                  colorFilter: ColorFilter.mode(
                      Colors.black.withOpacity(0.5), BlendMode.darken),
                  fit: BoxFit.cover)),
        ),
        Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            SizedBox(
              height: 150,
            ),
            Container(
              margin: marginHorizontal(size.width),
              child: Text(
                title,
                style: imageTitleWhiteTextStyle,
                textAlign: TextAlign.center,
              ),
            ),
            SizedBox(
              height: 150,
            ),
            GestureDetector(
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
        )
      ],
    );
  }
}

class ProjectList extends StatefulWidget {
  @override
  _ProjectListState createState() => _ProjectListState();
}

class _ProjectListState extends State<ProjectList> {
  Color backgroundColor = Colors.white;
  double x = 0.0;
  double y = 0.0;
  int _enterCounter = 0;
  int _exitCounter = 0;

  void _incrementEnter(PointerEvent details) {
    setState(() {
      _enterCounter++;
    });
  }

  void _incrementExit(PointerEvent details) {
    setState(() {
      backgroundColor = Colors.white;
      _exitCounter++;
    });
  }

  void _updateLocation(PointerEvent details) {
    setState(() {
      backgroundColor = themeBlue;
      x = details.position.dx;
      y = details.position.dy;
    });
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
      color: Colors.white,
      child: Column(
        children: <Widget>[
          SizedBox(
            height: 100,
          ),
          Align(
            alignment: Alignment.topLeft,
            child: Container(
                margin: marginHorizontal(size.width),
                child: Text('Projects', style: headlineSecondaryTextStyle)),
          ),
          SizedBox(height: 50),
          Align(
              alignment: Alignment.center,
              child: Container(
                  margin: marginHorizontal(size.width),
                  child: GridView.builder(
                    itemCount: projectData.length,
                    shrinkWrap: true,
                    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: size.width > 700 ? 2 : 1,
                        mainAxisSpacing: 20.0,
                        crossAxisSpacing: 10.0),
                    itemBuilder: (context, index) {
                      return MouseRegion(
                          onEnter: _incrementEnter,
                          onHover: _updateLocation,
                          onExit: _incrementExit,
                          child: TextButton(
                              onPressed: () =>
                                  _showModal(data: projectData[index]),
                              style: TextButton.styleFrom(
                                primary: backgroundColor,
                                onSurface: themeDeepBlue,
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20),
                                    side: BorderSide(color: lightWhite)),
                                padding: paddingH20V40,
                              ),
                              child: Container(
                                alignment: Alignment.center,
                                child: Column(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: <Widget>[
                                    // pin icon and bigger
                                    Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceBetween,
                                      children: <Widget>[
                                        Icon(Icons.push_pin_rounded,
                                            size: 24, color: ligthGray),
                                        Text(projectData[index].period,
                                            style: buttonTextStyle)
                                      ],
                                    ),
                                    // title
                                    Text(projectData[index].name,
                                        style: subtitleTextStyle),
                                    // mainDesc
                                    Text(projectData[index].mainDesc,
                                        style: GoogleFonts.nanumGothicCoding(
                                            fontWeight: FontWeight.w500,
                                            color: ligthGray,
                                            fontSize:
                                                size.width > 700 ? 14 : 12))
                                  ],
                                ),
                              )));
                    },
                  ))),
          SizedBox(
            height: 100,
          ),
        ],
      ),
    );
  }

  _showModal({data}) {
    void launchURL(url) async =>
        await canLaunch(url) ? await launch(url) : print('cannot open');
    ScrollController controller = new ScrollController();
    showModal(
        context: context,
        builder: (context) {
          final size = MediaQuery.of(context).size;
          return Dialog(
            backgroundColor: Colors.transparent,
            elevation: 16.0,
            child: SingleChildScrollView(
                controller: controller,
                child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      color: Colors.white,
                    ),
                    padding: paddingH20V20,
                    child: Column(
                      children: <Widget>[
                        Align(
                          alignment: Alignment.topCenter,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Icon(Icons.label_rounded,
                                  size: 30, color: themeLightOrange),
                              IconButton(
                                onPressed: () => Navigator.pop(context),
                                icon: Icon(
                                  Icons.close_rounded,
                                  color: Colors.black87,
                                  size: 30,
                                ),
                              )
                            ],
                          ),
                        ),
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            data.name,
                            style: headlineTextStyle,
                          ),
                        ),
                        SizedBox(height: 20),
                        Align(
                          alignment: Alignment.centerRight,
                          child: Text(
                            data.period,
                            style: buttonTextStyle,
                          ),
                        ),
                        Align(
                          alignment: Alignment.centerRight,
                          child: Text(data.type, style: buttonTextStyle),
                        ),
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            data.mainDesc,
                            style: bodyTextStyle,
                          ),
                        ),
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Text(data.subDesc, style: awardTitleTextStyle),
                        ),
                        SizedBox(
                          height: 25,
                          child: divider,
                        ),
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            data.aboutProject,
                            style: buttonTextStyle,
                          ),
                        ),
                        SizedBox(
                          height: 25,
                          child: divider,
                        ),
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Row(
                            children: <Widget>[
                              Expanded(
                                  flex: 5,
                                  child: ListView.builder(
                                    physics: NeverScrollableScrollPhysics(),
                                    shrinkWrap: true,
                                    itemCount: data.myJob.length,
                                    itemBuilder: (context, index) =>
                                        Text('+ ' + data.myJob[index]),
                                  )),
                              Expanded(
                                  flex: 5,
                                  child: size.width > 800
                                      ? Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceAround,
                                          children: <Widget>[
                                            Image.network(
                                              'https://cors.bridged.cc/' +
                                                  data.imageURL[0],
                                              width: size.width * 0.15,
                                              fit: BoxFit.cover,
                                            ),
                                            Image.network(
                                                'https://cors.bridged.cc/' +
                                                    data.imageURL[1],
                                                width: size.width * 0.15,
                                                fit: BoxFit.cover),
                                            // GetNetworkImage(src: data.imageURL[0]),
                                            // GetNetworkImage(src: data.imageURL[1]),
                                          ],
                                        )
                                      : Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceAround,
                                          children: <Widget>[
                                            Image.network(
                                              'https://cors.bridged.cc/' +
                                                  data.imageURL[0],
                                              width: 200,
                                              fit: BoxFit.cover,
                                            ),
                                            Image.network(
                                                'https://cors.bridged.cc/' +
                                                    data.imageURL[1],
                                                width: 200,
                                                fit: BoxFit.cover),
                                            // GetNetworkImage(src: data.imageURL[0]),
                                            // GetNetworkImage(src: data.imageURL[1]),
                                          ],
                                        ))
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 25,
                          child: divider,
                        ),
                        Align(
                            alignment: Alignment.center,
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: <Widget>[
                                data.store.length > 0
                                    ? Container(
                                        width: size.width > 600 ? 160 : 50,
                                        child: TextButton(
                                          onPressed: () =>
                                              launchURL(data.store[0]),
                                          child: Row(
                                            children: <Widget>[
                                              SvgPicture.asset(
                                                'images/icon/logo-google-playstore.svg',
                                                fit: BoxFit.cover,
                                                height: 35,
                                                width: 35,
                                              ),
                                              size.width > 600
                                                  ? Text(' PlayStore',
                                                      style:
                                                          GoogleFonts.raleway(
                                                              fontSize: 22,
                                                              fontWeight:
                                                                  FontWeight
                                                                      .w600,
                                                              color:
                                                                  textPrimary))
                                                  : SizedBox()
                                            ],
                                          ),
                                        ))
                                    : SizedBox(),
                                data.store.length > 1
                                    ? Container(
                                        width: size.width > 600 ? 160 : 50,
                                        child: TextButton(
                                          onPressed: () =>
                                              launchURL(data.store[1]),
                                          child: Row(
                                            children: <Widget>[
                                              SvgPicture.asset(
                                                'images/icon/logo-apple.svg',
                                                fit: BoxFit.cover,
                                                height: 35,
                                                width: 35,
                                              ),
                                              size.width > 600
                                                  ? Text(' AppStore',
                                                      style:
                                                          GoogleFonts.raleway(
                                                              fontSize: 22,
                                                              fontWeight:
                                                                  FontWeight
                                                                      .w600,
                                                              color:
                                                                  textPrimary))
                                                  : SizedBox()
                                            ],
                                          ),
                                        ))
                                    : SizedBox(),
                                Container(
                                    width: size.width > 600 ? 120 : 50,
                                    child: TextButton(
                                      onPressed: () => launchURL(data.url),
                                      child: Row(
                                        children: <Widget>[
                                          SvgPicture.asset(
                                            'images/icon/logo-github.svg',
                                            fit: BoxFit.cover,
                                            height: 35,
                                            width: 35,
                                          ),
                                          size.width > 600
                                              ? Text(' Github',
                                                  style: GoogleFonts.raleway(
                                                      fontSize: 22,
                                                      fontWeight:
                                                          FontWeight.w600,
                                                      color: textPrimary))
                                              : SizedBox()
                                        ],
                                      ),
                                    )),
                              ],
                            )),
                      ],
                    ))),
          );
        });
  }
}
