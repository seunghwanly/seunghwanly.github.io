import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class GetNetworkImage extends StatefulWidget {
  GetNetworkImage({this.src});

  final String src;

  @override
  _GetNetworkImageState createState() => _GetNetworkImageState();
}

class _GetNetworkImageState extends State<GetNetworkImage> {
  Uint8List _bytes;

  @override
  void initState() {
    super.initState();
    _fetchData();
  }

  void _fetchData() async {
    _bytes = (await http.get(new Uri(scheme: 'https://cors.bridged.cc/' + widget.src))).bodyBytes;

    if (mounted) {
      setState(() {});
    }
  }

  @override
  Widget build(BuildContext context) {
    return _bytes != null
        ? Image.memory(
            _bytes,
            width: 300,
            fit: BoxFit.cover
          )
        : Container(
            child: Icon(Icons.refresh, size: 30),
          );
  }
}
