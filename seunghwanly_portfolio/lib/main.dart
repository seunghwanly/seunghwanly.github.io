import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';
// page
import 'package:seunghwanly_portfolio/experience.dart';
import 'package:seunghwanly_portfolio/home.dart';
import 'package:seunghwanly_portfolio/project.dart';
// routes
import 'package:seunghwanly_portfolio/routes.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      builder: (context, widget) => ResponsiveWrapper.builder(
          BouncingScrollWrapper.builder(context, widget),
          maxWidth: double.infinity,
          minWidth: 450,
          defaultScale: true,
          breakpoints: [
            ResponsiveBreakpoint.resize(450, name: MOBILE),
            ResponsiveBreakpoint.autoScale(800, name: TABLET),
            ResponsiveBreakpoint.autoScale(1000, name: TABLET),
            ResponsiveBreakpoint.resize(1200, name: DESKTOP),
            ResponsiveBreakpoint.autoScale(2460, name: "4K"),
          ],
          background: Container(color: Colors.white)),
          initialRoute: Routes.aboutme,
      onGenerateRoute: (RouteSettings settings) {
        return Routes.fadeThrough(settings, (context) {
          switch (settings.name) {
            case Routes.aboutme:
              return HomePage();
            case Routes.experience:
              return ExperiencePage();
            case Routes.project:
              return ProjectPage();
            default:
              return SizedBox.shrink();
          }
        });
      },
      debugShowCheckedModeBanner: false,
    );
  }
}
