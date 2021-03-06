import 'package:flutter/painting.dart';

// Margin
const EdgeInsets marginBottom12 = EdgeInsets.only(bottom: 12);
const EdgeInsets marginBottom24 = EdgeInsets.only(bottom: 24);
const EdgeInsets marginBottom40 = EdgeInsets.only(bottom: 40);
const EdgeInsets marginHorizontal300 = EdgeInsets.symmetric(horizontal: 300);
EdgeInsets marginHorizontal(double width) {
  return EdgeInsets.symmetric(horizontal: width * 0.2);
}
EdgeInsets marginH3V2(double width) {
  return EdgeInsets.symmetric(horizontal: width * 0.3, vertical: width * 0.2);
}


// Padding
const EdgeInsets paddingBottom24 = EdgeInsets.only(bottom: 24);
const EdgeInsets paddingTop100 = EdgeInsets.only(top: 100);
const EdgeInsets paddingHorizontal20 = EdgeInsets.symmetric(horizontal: 20);
const EdgeInsets paddingVertical20 = EdgeInsets.symmetric(horizontal: 20);
const EdgeInsets paddingH20V20 = EdgeInsets.symmetric(horizontal: 20, vertical: 20);
const EdgeInsets paddingH20V40 = EdgeInsets.symmetric(horizontal: 20, vertical: 40);
const EdgeInsets paddingH20V10 = EdgeInsets.symmetric(horizontal: 20, vertical: 10);
EdgeInsets paddingH2V2(double width) {
  return EdgeInsets.symmetric(horizontal: width * 0.2, vertical: width * 0.2);
}
EdgeInsets paddingH2(double width) {
  return EdgeInsets.symmetric(horizontal: width * 0.2);
}
EdgeInsets paddingH2V60(double width) {
  return EdgeInsets.symmetric(horizontal: width * 0.2, vertical: 60);
}
