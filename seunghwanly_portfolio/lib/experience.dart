import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:seunghwanly_portfolio/components/color.dart';
import 'package:seunghwanly_portfolio/components/components.dart';
import 'package:seunghwanly_portfolio/components/spacing.dart';
import 'package:seunghwanly_portfolio/components/typography.dart';
import 'package:syncfusion_flutter_charts/charts.dart';

class ExperiencePage extends StatefulWidget {
  @override
  _ExperiencePageState createState() => _ExperiencePageState();
}

/**
 *  TECHS / EXPERIENCE
 */
class _ExperiencePageState extends State<ExperiencePage> {
  ScrollController _controller = new ScrollController();

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
                // TECHS -------------------------------------------
                TechChart(),
                // FOOTER ------------------------------------------------------------
                Footer()
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class ChartData {
  final String name;
  final int percentage;

  ChartData({this.name, this.percentage});
}

class TechChart extends StatelessWidget {
  final List<ChartData> plChartData = [
    ChartData(name: 'JavaScript', percentage: 40),
    ChartData(name: 'Dart', percentage: 28),
    ChartData(name: 'C++', percentage: 16),
    ChartData(name: 'Python', percentage: 16)
  ];

  final List<ChartData> fwChartData = [
    ChartData(name: 'React-Native', percentage: 11),
    ChartData(name: 'Flutter', percentage: 57),
    ChartData(name: 'Vue.js', percentage: 11),
    ChartData(name: 'Node.js', percentage: 33),
  ];

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
      color: themeBlue,
      child: Column(
        children: <Widget>[
          SizedBox(height: 100),
          Align(
            alignment: Alignment.topLeft,
            child: Container(
                margin: marginHorizontal(size.width),
                child: Text("WHAT I'M PASSIONATE ABOUT", style: imageTitleWhiteTextStyle)),
          ),
          SizedBox(height: 50),
          Align(
            alignment: Alignment.center,
            child: size.width > 600
                ? Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                        Container(
                            width: size.width * 0.4,
                            height: size.width * 0.48,
                            child: SfCircularChart(
                              annotations: <CircularChartAnnotation>[
                                CircularChartAnnotation(
                                  widget: Container(
                                      child: Text("Programming\nLanguage",
                                          textAlign: TextAlign.center,
                                          style: GoogleFonts.raleway(
                                              fontWeight: FontWeight.bold,
                                              fontSize: size.width * 0.02,
                                              color: Colors.white))),
                                )
                              ],
                              series: <CircularSeries>[
                                DoughnutSeries<ChartData, dynamic>(
                                    dataSource: plChartData,
                                    xValueMapper: (ChartData data, _) =>
                                        data.name,
                                    yValueMapper: (ChartData data, _) =>
                                        data.percentage,
                                    cornerStyle: CornerStyle.bothCurve,
                                    strokeWidth: 40,
                                    innerRadius: '60%',
                                    dataLabelMapper: (ChartData data, _) =>
                                        data.name,
                                    dataLabelSettings: DataLabelSettings(
                                        textStyle: TextStyle(
                                            color: Colors.white,
                                            fontWeight: FontWeight.bold),
                                        isVisible: true,
                                        labelPosition:
                                            ChartDataLabelPosition.inside,
                                        // Renders background rectangle and fills it with series color
                                        useSeriesColor: true)),
                              ],
                            )),
                        Container(
                            width: size.width * 0.4,
                            height: size.width * 0.48,
                            child: SfCircularChart(
                              annotations: <CircularChartAnnotation>[
                                CircularChartAnnotation(
                                  widget: Container(
                                      child: Text("Framework",
                                          textAlign: TextAlign.center,
                                          style: GoogleFonts.raleway(
                                              fontWeight: FontWeight.bold,
                                              fontSize: size.width * 0.02,
                                              color: Colors.white))),
                                )
                              ],
                              series: <CircularSeries>[
                                DoughnutSeries<ChartData, dynamic>(
                                    dataSource: fwChartData,
                                    xValueMapper: (ChartData data, _) =>
                                        data.name,
                                    yValueMapper: (ChartData data, _) =>
                                        data.percentage,
                                    cornerStyle: CornerStyle.bothCurve,
                                    strokeWidth: 40,
                                    innerRadius: '60%',
                                    dataLabelMapper: (ChartData data, _) =>
                                        data.name,
                                    dataLabelSettings: DataLabelSettings(
                                        textStyle: TextStyle(
                                            color: Colors.white,
                                            fontWeight: FontWeight.bold),
                                        isVisible: true,
                                        labelPosition:
                                            ChartDataLabelPosition.inside,
                                        // Renders background rectangle and fills it with series color
                                        useSeriesColor: true)),
                              ],
                            ))
                      ])
                : Column(
                    children: <Widget>[
                      Container(
                          width: size.width * 0.4,
                          height: size.width * 0.48,
                          child: SfCircularChart(
                            annotations: <CircularChartAnnotation>[
                              CircularChartAnnotation(
                                widget: Container(
                                    child: Text("Programming\nLanguage",
                                        textAlign: TextAlign.center,
                                        style: GoogleFonts.raleway(
                                            fontWeight: FontWeight.bold,
                                            fontSize: size.width * 0.02,
                                            color: Colors.white))),
                              )
                            ],
                            series: <CircularSeries>[
                              DoughnutSeries<ChartData, dynamic>(
                                  dataSource: plChartData,
                                  xValueMapper: (ChartData data, _) =>
                                      data.name,
                                  yValueMapper: (ChartData data, _) =>
                                      data.percentage,
                                  cornerStyle: CornerStyle.bothCurve,
                                  strokeWidth: 40,
                                  innerRadius: '60%',
                                  dataLabelMapper: (ChartData data, _) =>
                                      data.name,
                                  dataLabelSettings: DataLabelSettings(
                                      textStyle: TextStyle(
                                          color: Colors.white,
                                          fontWeight: FontWeight.bold),
                                      isVisible: true,
                                      labelPosition:
                                          ChartDataLabelPosition.inside,
                                      // Renders background rectangle and fills it with series color
                                      useSeriesColor: true)),
                            ],
                          )),
                      Container(
                          width: size.width * 0.4,
                          height: size.width * 0.48,
                          child: SfCircularChart(
                            annotations: <CircularChartAnnotation>[
                              CircularChartAnnotation(
                                widget: Container(
                                    child: Text("Framework",
                                        textAlign: TextAlign.center,
                                        style: GoogleFonts.raleway(
                                            fontWeight: FontWeight.bold,
                                            fontSize: size.width * 0.02,
                                            color: Colors.white))),
                              )
                            ],
                            series: <CircularSeries>[
                              DoughnutSeries<ChartData, dynamic>(
                                  dataSource: fwChartData,
                                  xValueMapper: (ChartData data, _) =>
                                      data.name,
                                  yValueMapper: (ChartData data, _) =>
                                      data.percentage,
                                  cornerStyle: CornerStyle.bothCurve,
                                  strokeWidth: 40,
                                  innerRadius: '60%',
                                  dataLabelMapper: (ChartData data, _) =>
                                      data.name,
                                  dataLabelSettings: DataLabelSettings(
                                      textStyle: TextStyle(
                                          color: Colors.white,
                                          fontWeight: FontWeight.bold),
                                      isVisible: true,
                                      labelPosition:
                                          ChartDataLabelPosition.inside,
                                      // Renders background rectangle and fills it with series color
                                      useSeriesColor: true)),
                            ],
                          ))
                    ],
                  ),
          ),
          SizedBox(height: 100),
        ],
      ),
    );
  }
}
