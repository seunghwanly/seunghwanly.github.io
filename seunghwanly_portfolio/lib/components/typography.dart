import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:seunghwanly_portfolio/components/color.dart';

// Simple
TextStyle headlineTextStyle = GoogleFonts.raleway(
    textStyle: TextStyle(
        fontSize: 26, color: textPrimary, fontWeight: FontWeight.w700));

TextStyle headlineWhiteTextStyle = GoogleFonts.raleway(
    textStyle: TextStyle(
        fontSize: 26,
        color: Colors.white,
        letterSpacing: 1.5,
        fontWeight: FontWeight.w500));

TextStyle headlineSecondaryTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 24,
    color: textPrimary,
    fontWeight: FontWeight.w600,
    letterSpacing: 0.5);

TextStyle headlineSecondaryWhiteTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 24,
    color: Colors.white,
    fontWeight: FontWeight.w600,
    letterSpacing: 0.5);

TextStyle subtitleTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 20,
    color: textSecondary,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.5);

TextStyle subtitleWhiteTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 20,
    color: Colors.white,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.5);

TextStyle bodyTextStyle =
    TextStyle(fontFamily: 'NanumSquare', fontSize: 16, color: textPrimary);
TextStyle bodyWhiteTextStyle =
    TextStyle(fontFamily: 'NanumSquare', fontSize: 16, color: lightWhite);

TextStyle buttonTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 16,
    color: textPrimary,
    letterSpacing: 1);

TextStyle imageTitleWhiteTextStyle = TextStyle(
    fontFamily: 'NanumSquare',
    fontSize: 40,
    color: Colors.white,
    fontWeight: FontWeight.w800);

TextStyle imageDescWhiteTextStyle =
    TextStyle(fontFamily: 'NanumSquare', fontSize: 12, color: Colors.white);

TextStyle awardTitleTextStyle = TextStyle(
  fontFamily: 'NanumSquare',
  fontSize: 18,
  color: textSecondary,
  fontWeight: FontWeight.bold,
);

TextStyle awardPriceTextStyle =TextStyle(
  fontFamily: 'NanumSquare',
  fontSize: 16,
  color: lightBlack,
  fontWeight: FontWeight.bold,
  letterSpacing: 1
);

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
