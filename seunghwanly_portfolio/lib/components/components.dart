import 'package:flutter/material.dart';
// components
import 'package:seunghwanly_portfolio/components/text.dart';
import 'package:seunghwanly_portfolio/components/typography.dart';
// routes
import 'package:seunghwanly_portfolio/routes.dart';

const Widget divider = Divider(color: Color(0xFFEEEEEE), thickness: 1);

class Footer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      padding: EdgeInsets.symmetric(vertical: 40, horizontal: 20),
      child: Align(
        alignment: Alignment.center,
        child: TextBody(text: "Copyright © 2021 Seunghwanly"),
      ),
    );
  }
}

// ignore: slash_for_doc_comments
/**
 * Menu/Navigation Bar
 *
 * A top menu bar with a text or image logo and
 * navigation links. Navigation links collapse into
 * a hamburger menu on screens smaller than 400px.
 */
class MenuBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.white,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Container(
              margin: EdgeInsets.symmetric(vertical: 20, horizontal: 20),
              // color: Colors.white,
              child: Row(
                children: <Widget>[
                  GestureDetector(
                    onTap: () => Navigator.popUntil(context,
                        ModalRoute.withName(Navigator.defaultRouteName)),
                    child: RichText(
                      text: TextSpan(children: <TextSpan>[
                        TextSpan(
                            text: "SEUNGHWAN LEE", style: headlineTextStyle),
                        TextSpan(text: "\nS/W DEVELOPER", style: bodyTextStyle)
                      ]),
                    ),
                  ),
                  Flexible(
                    child: Container(
                      alignment: Alignment.centerRight,
                      child: Wrap(
                        spacing: 30,
                        children: <Widget>[
                          TextButton(
                              onPressed: () =>
                                  Navigator.pushNamed(context, Routes.aboutme),
                              child: Text(
                                "About Me",
                                style: buttonTextStyle,
                              ),
                              style: ButtonStyle(
                                  overlayColor: MaterialStateColor.resolveWith(
                                      (states) => Colors.transparent))),
                          TextButton(
                              onPressed: () => Navigator.pushNamed(
                                  context, Routes.experience),
                              child: Text(
                                "Experience",
                                style: buttonTextStyle,
                              ),
                              style: ButtonStyle(
                                  overlayColor: MaterialStateColor.resolveWith(
                                      (states) => Colors.transparent))),
                          TextButton(
                              onPressed: () =>
                                  Navigator.pushNamed(context, Routes.project),
                              child: Text(
                                "Project",
                                style: buttonTextStyle,
                              ),
                              style: ButtonStyle(
                                  overlayColor: MaterialStateColor.resolveWith(
                                      (states) => Colors.transparent))),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Container(
                // under line bar
                height: 1,
                // margin: EdgeInsets.only(bottom: 30),
                color: Color(0xFFEEEEEE)),
          ],
        ));
  }
}
