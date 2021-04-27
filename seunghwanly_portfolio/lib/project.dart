import 'package:animations/animations.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:loading_indicator/loading_indicator.dart';
import 'package:seunghwanly_portfolio/components/color.dart';
import 'package:seunghwanly_portfolio/components/components.dart';
import 'package:seunghwanly_portfolio/components/spacing.dart';
import 'package:seunghwanly_portfolio/components/typography.dart';
import 'package:seunghwanly_portfolio/experience.dart';
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
                // // IMAGE BACKGROUND - NAME -------------------------------------------
                // title(context, title: "PROJECTS"),
                TechChart(),
                ProjectList(),
                // FOOTER ------------------------------------------------------------
                Footer()
              ],
            ),
          ),
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
          height: 500,
          width: double.infinity,
          decoration: BoxDecoration(
              image: DecorationImage(
                  image: AssetImage('title/proj.jpg'),
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
                child: Row(
                  children: <Widget>[
                    Icon(
                      Ionicons.ios_pricetags,
                      color: themeLightOrange,
                    ),
                    Text(' Projects', style: headlineSecondaryTextStyle)
                  ],
                )),
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
                        crossAxisCount: size.width > 800
                            ? 3
                            : size.width > 600
                                ? 2
                                : 1,
                        mainAxisSpacing: 10.0,
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
                                onSurface: themeLightOrange,
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20),
                                    side: BorderSide(color: lightWhite)),
                                padding: size.width > 1200
                                    ? paddingH20V40
                                    : size.width > 800
                                        ? paddingH20V20
                                        : paddingH20V10,
                              ),
                              child: Container(
                                child: Column(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceAround,
                                  crossAxisAlignment:
                                      CrossAxisAlignment.stretch,
                                  children: <Widget>[
                                    // pin icon and bigger
                                    Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceBetween,
                                      children: <Widget>[
                                        Icon(Ionicons.ios_pricetag,
                                            size: 24,
                                            color: themeLightOrange
                                                .withOpacity(0.5)),
                                        Text(projectData[index].period,
                                            style: TextStyle(
                                              fontSize: 14,
                                              fontWeight: FontWeight.w300,
                                              color: lightGray,
                                            ))
                                      ],
                                    ),
                                    SizedBox(
                                      height: 5,
                                    ),
                                    // title
                                    Text(projectData[index].name,
                                        style: TextStyle(
                                          fontSize: size.width > 1200 ? 24 : 22,
                                          fontWeight: FontWeight.bold,
                                          color: Colors.black,
                                        )),
                                    SizedBox(
                                      height: 8,
                                    ),
                                    // mainDesc
                                    Text(projectData[index].mainDesc,
                                        style: TextStyle(
                                          fontSize: 14,
                                          color: lightGray,
                                        )),
                                    SizedBox(
                                      height: 2,
                                    ),
                                    Text(projectData[index].subDesc,
                                        style: TextStyle(
                                          fontSize: 12,
                                          color: lightGray,
                                        ),
                                        textAlign: TextAlign.end)
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

    Map<String, String> header = {"Origin": "*"};

    showBottomSheet(
        backgroundColor: Colors.white,
        elevation: 16.0,
        context: context,
        builder: (context) {
          final size = MediaQuery.of(context).size;
          return Container(
            height: size.height,
            child: SingleChildScrollView(
                controller: controller,
                child: Container(
                    color: Colors.white,
                    padding: paddingH2V2(size.width),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        Align(
                          alignment: Alignment.topCenter,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Icon(Icons.label_rounded,
                                  size: 35, color: themeLightOrange),
                              IconButton(
                                onPressed: () => Navigator.pop(context),
                                icon: Icon(
                                  Icons.close_rounded,
                                  color: Colors.black87,
                                  size: 35,
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
                            style: bottomSheetBodyTextStyle,
                          ),
                        ),
                        Align(
                          alignment: Alignment.centerRight,
                          child:
                              Text(data.type, style: bottomSheetBodyTextStyle),
                        ),
                        SizedBox(height: 20),
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            data.mainDesc,
                            style: bottomSheetH2TextStyle,
                          ),
                        ),
                        SizedBox(height: 20),
                        Align(
                          alignment: Alignment.centerLeft,
                          child:
                              Text(data.subDesc, style: bottomSheetH3TextStyle),
                        ),
                        SizedBox(
                          height: 25,
                          child: divider,
                        ),
                        Align(
                            alignment: Alignment.centerLeft,
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Expanded(
                                  flex: 1,
                                  child: Icon(Icons.description_rounded,
                                      size: 24, color: lightGray),
                                ),
                                SizedBox(width: 5),
                                Expanded(
                                  flex: 9,
                                  child: Text(
                                    data.aboutProject,
                                    style: bottomSheetBodyTextStyle,
                                  ),
                                ),
                              ],
                            )),
                        SizedBox(
                          height: 25,
                          child: divider,
                        ),
                        Align(
                          alignment: Alignment.centerLeft,
                          child: size.width > 800
                              ? Row(
                                  children: <Widget>[
                                    Expanded(
                                        flex: 4,
                                        child: ListView.builder(
                                          physics:
                                              NeverScrollableScrollPhysics(),
                                          shrinkWrap: true,
                                          itemCount: data.myJob.length,
                                          itemBuilder: (context, index) =>
                                              Container(
                                                  padding: paddingH20V10,
                                                  child: Row(
                                                      crossAxisAlignment:
                                                          CrossAxisAlignment
                                                              .start,
                                                      children: <Widget>[
                                                        Expanded(
                                                          flex: 1,
                                                          child: Icon(
                                                              Ionicons
                                                                  .ios_checkmark_circle,
                                                              color:
                                                                  Colors.green,
                                                              size: 30),
                                                        ),
                                                        SizedBox(
                                                          width: 10,
                                                        ),
                                                        Expanded(
                                                          flex: 9,
                                                          child: Text(
                                                              data.myJob[index],
                                                              style:
                                                                  bodyTextStyle),
                                                        )
                                                      ])),
                                        )),
                                    Expanded(
                                        flex: 6,
                                        child: Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceEvenly,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.center,
                                          children: <Widget>[
                                            Expanded(
                                                flex: 4,
                                                child: Image(
                                                  image: new CachedNetworkImageProvider(
                                                      'https://cors.bridged.cc/' +
                                                          data.imageURL[0],
                                                      headers: header,
                                                      imageRenderMethodForWeb:
                                                          ImageRenderMethodForWeb
                                                              .HtmlImage),
                                                  fit: BoxFit.contain,
                                                  height: 600,
                                                )),
                                            Expanded(
                                              flex: 1,
                                              child: SizedBox(),
                                            ),
                                            Expanded(
                                                flex: 4,
                                                child: Image(
                                                  image:
                                                      new CachedNetworkImageProvider(
                                                    'https://cors.bridged.cc/' +
                                                        data.imageURL[1],
                                                    headers: header,
                                                  ),
                                                  fit: BoxFit.contain,
                                                  height: 600,
                                                )),
                                          ],
                                        ))
                                  ],
                                )
                              : Column(
                                  children: <Widget>[
                                    ListView.builder(
                                      physics: NeverScrollableScrollPhysics(),
                                      shrinkWrap: true,
                                      itemCount: data.myJob.length,
                                      itemBuilder: (context, index) =>
                                          Container(
                                              margin: marginBottom12,
                                              child: Row(
                                                  crossAxisAlignment:
                                                      CrossAxisAlignment.start,
                                                  children: <Widget>[
                                                    Expanded(
                                                      flex: 1,
                                                      child: Icon(
                                                          Ionicons
                                                              .ios_checkmark_circle,
                                                          color: Colors.green,
                                                          size: 30),
                                                    ),
                                                    SizedBox(
                                                      width: 10,
                                                    ),
                                                    Expanded(
                                                      flex: 9,
                                                      child: Text(
                                                          data.myJob[index],
                                                          style:
                                                              bottomSheetBodyTextStyle),
                                                    )
                                                  ])),
                                    ),
                                    SizedBox(
                                      height: 20,
                                    ),
                                    size.width > 800
                                        ? Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.spaceEvenly,
                                            crossAxisAlignment:
                                                CrossAxisAlignment.center,
                                            children: <Widget>[
                                              Expanded(
                                                  flex: 4,
                                                  child: Image(
                                                    image:
                                                        new CachedNetworkImageProvider(
                                                      data.imageURL[0],
                                                      headers: header,
                                                    ),
                                                    fit: BoxFit.contain,
                                                    height: 600,
                                                  )),
                                              Expanded(
                                                flex: 1,
                                                child: SizedBox(),
                                              ),
                                              Expanded(
                                                  flex: 4,
                                                  child: Image(
                                                    image:
                                                        new CachedNetworkImageProvider(
                                                      data.imageURL[1],
                                                      headers: header,
                                                    ),
                                                    fit: BoxFit.contain,
                                                    height: 600,
                                                  )),
                                            ],
                                          )
                                        : Column(
                                            children: <Widget>[
                                              Image(
                                                image:
                                                    new CachedNetworkImageProvider(
                                                  data.imageURL[0],
                                                  headers: header,
                                                ),
                                                fit: BoxFit.contain,
                                                width: size.width * 0.8,
                                              ),
                                              SizedBox(height: 20),
                                              Image(
                                                image:
                                                    new CachedNetworkImageProvider(
                                                  data.imageURL[1],
                                                  headers: header,
                                                ),
                                                fit: BoxFit.contain,
                                                width: size.width * 0.8,
                                              )
                                            ],
                                          )
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
                                        width: size.width > 800 ? 160 : 50,
                                        child: TextButton(
                                          onPressed: () =>
                                              launchURL(data.store[0]),
                                          child: Row(
                                            children: <Widget>[
                                              Icon(
                                                FontAwesome5Brands.android,
                                                size: 40,
                                                color: Color.fromRGBO(
                                                    50, 222, 132, 1.0),
                                              ),
                                              size.width > 800
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
                                        width: size.width > 800 ? 160 : 50,
                                        child: TextButton(
                                          onPressed: () =>
                                              launchURL(data.store[1]),
                                          child: Row(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.center,
                                            children: <Widget>[
                                              Icon(
                                                Ionicons.ios_appstore,
                                                size: 40,
                                                color: Color.fromRGBO(
                                                    30, 160, 248, 1.0),
                                              ),
                                              size.width > 800
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
                                    width: size.width > 800 ? 120 : 50,
                                    child: TextButton(
                                      onPressed: () => launchURL(data.url),
                                      child: Row(
                                        children: <Widget>[
                                          Icon(Ionicons.logo_github,
                                              size: 40,
                                              color: Color.fromRGBO(
                                                  111, 66, 193, 0.76)),
                                          size.width > 800
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
