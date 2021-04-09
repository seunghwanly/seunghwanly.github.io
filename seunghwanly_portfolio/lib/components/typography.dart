import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:seunghwanly_portfolio/components/color.dart';

// Simple
TextStyle headlineTextStyle = GoogleFonts.raleway(
    textStyle: TextStyle(
        fontSize: 26,
        color: textPrimary,
        fontWeight: FontWeight.w700));

TextStyle headlineWhiteTextStyle = GoogleFonts.raleway(
    textStyle: TextStyle(
        fontSize: 26,
        color: Colors.white,
        letterSpacing: 1.5,
        fontWeight: FontWeight.w500));

TextStyle headlineSecondaryTextStyle = GoogleFonts.raleway(
    textStyle: TextStyle(
        fontSize: 20, color: textPrimary, fontWeight: FontWeight.w600));

TextStyle subtitleTextStyle = GoogleFonts.raleway(
    textStyle: TextStyle(fontSize: 18, color: textSecondary, letterSpacing: 1, fontWeight: FontWeight.w600));

TextStyle subtitleWhiteTextStyle = GoogleFonts.sourceCodePro(
    textStyle: TextStyle(
        fontSize: 16,
        color: Colors.white,
        letterSpacing: 1,
        fontWeight: FontWeight.bold));

TextStyle bodyTextStyle = GoogleFonts.nanumGothicCoding(
    textStyle: TextStyle(fontSize: 18, color: textPrimary));

TextStyle bodyWhiteTextStyle =
    GoogleFonts.raleway(textStyle: TextStyle(fontSize: 16, color: lightWhite));

TextStyle buttonTextStyle = GoogleFonts.raleway(
    textStyle: TextStyle(fontSize: 14, color: textPrimary, letterSpacing: 1));

TextStyle imageTitleWhiteTextStyle = GoogleFonts.nanumGothicCoding(
    textStyle: TextStyle(fontSize: 40, color: Colors.white, fontWeight: FontWeight.bold, letterSpacing: 1.0));

TextStyle imageDescWhiteTextStyle = GoogleFonts.nanumGothicCoding(
    textStyle: TextStyle(fontSize: 12, color: Colors.white));
TextStyle awardTitleTextStyle = GoogleFonts.nanumGothicCoding(
    textStyle: TextStyle(fontSize: 18, color: textSecondary, fontWeight: FontWeight.bold));
TextStyle awardPriceTextStyle = GoogleFonts.nanumGothicCoding(
    textStyle: TextStyle(fontSize: 16, color: ligthBlack, fontWeight: FontWeight.bold, letterSpacing: 1));
TextStyle awardDescTextStyle = GoogleFonts.nanumGothicCoding(
    textStyle: TextStyle(fontSize: 12, color: themeGrayText));

// Advanced
TextStyle articleContentTextStyle({Color color}) {
  return TextStyle(
    fontSize: 22,
    color: color != null ? color : ligthGray,
  );
}
