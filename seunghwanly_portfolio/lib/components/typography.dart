import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:seunghwanly_portfolio/components/color.dart';

// Simple
TextStyle headlineTextStyle = GoogleFonts.raleway(
    textStyle: TextStyle(
        fontSize: 33, color: textPrimary, fontWeight: FontWeight.w700));

TextStyle headlineWhiteTextStyle = GoogleFonts.raleway(
    textStyle: TextStyle(
        fontSize: 33,
        color: Colors.white,
        letterSpacing: 1.5,
        fontWeight: FontWeight.w500));

TextStyle headlineSecondaryTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 30,
    color: textPrimary,
    fontWeight: FontWeight.w600,
    letterSpacing: 0.5);

TextStyle headlineSecondaryWhiteTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 30,
    color: Colors.white,
    fontWeight: FontWeight.w600,
    letterSpacing: 0.5);

TextStyle subtitleTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 28,
    color: textSecondary,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.5);

TextStyle subtitleWhiteTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 28,
    color: Colors.white,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.5);

TextStyle bodyTextStyle =
    TextStyle(fontFamily: 'NanumSquare', fontSize: 22, color: textPrimary, height: 1.5);
TextStyle bodyWhiteTextStyle =
    TextStyle(fontFamily: 'NanumSquare', fontSize: 22, color: lightWhite);
  

TextStyle bottomSheetBodyTextStyle = TextStyle(
  fontFamily: 'NanumSquare', fontSize: 18, color: lightBlack, height: 1.25
);
TextStyle bottomSheetH3TextStyle = TextStyle(
  fontFamily: 'NanumSquare', fontSize: 22, color: lightBlack, height: 1.25
);
TextStyle bottomSheetH2TextStyle = TextStyle(
  fontFamily: 'NanumSquare', fontSize: 22, color: lightBlack, height: 1.25, fontWeight: FontWeight.bold
);


TextStyle buttonTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 18,
    color: textPrimary,
    letterSpacing: 1);

TextStyle imageTitleWhiteTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 42,
    color: Colors.white,
    fontWeight: FontWeight.w800);

TextStyle imageDescWhiteTextStyle =
    TextStyle(fontFamily: 'NanumSquare', fontSize: 16, color: Colors.white);

TextStyle awardTitleTextStyle = TextStyle(
  fontFamily: 'NanumSquare',
  fontSize: 20,
  color: textSecondary,
  fontWeight: FontWeight.bold,
);

TextStyle awardPriceTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 16,
    color: lightBlack,
    fontWeight: FontWeight.bold,
    letterSpacing: 1);

TextStyle awardDescTextStyle = TextStyle(
  fontFamily: 'NanumSquare',
  fontSize: 14,
  color: themeGrayText,
);

// Advanced
TextStyle articleContentTextStyle({Color color}) {
  return TextStyle(
    fontSize: 22,
    color: color != null ? color : lightGray,
  );
}

TextStyle bodyTextStyleWithBackground({Color background, Color text}) =>
    TextStyle(
      fontSize: 24,
      color: text,
      backgroundColor: background,
    );
