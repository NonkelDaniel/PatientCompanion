'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _airtable = require('airtable');

var _airtable2 = _interopRequireDefault(_airtable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_airtable2.default.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keydhRqtCcp9PY4TB'
});

var base = _airtable2.default.base('appOuyZj0gsBMOWyy');

var app = (0, _express2.default)();
var port = 3000;

app.get('/', function (req, res) {
  return res.send('Hello World!');
});

app.get('/users', function (req, res) {
  var response = {};

  base('Users').select({
    maxRecords: 10,
    view: 'Grid view'
  }).eachPage(function (records, fetchNextPage) {
    var user = void 0;

    records.forEach(function (record, index) {
      console.log('Retrieved', record.get('Name'));

      user = {
        name: record.get('Name'),
        lastName: record.get('LastName'),
        password: record.get('Password'),
        description: record.get('Description'),
        tips: record.get('Tips'),
        connections: record.get('Connections'),
        blogposts: record.get('Blogposts')
      };

      response[index] = user;
    });

    fetchNextPage();
  }, function (err) {
    if (err) console.error(err);
    res.send(response);
  });
});

app.get('/tips', function (req, res) {
  var response = {};

  base('Tips').select({
    maxRecords: 10,
    view: 'Grid view'
  }).eachPage(function (records, fetchNextPage) {
    var tip = void 0;

    records.forEach(function (record, index) {
      console.log('Retrieved', record.get('Title'));

      tip = {
        title: record.get('Title'),
        description: record.get('Description'),
        type: record.get('Type'),
        attachments: record.get('Attachments'),
        users: record.get('Users')
      };

      response[index] = tip;
    });

    fetchNextPage();
  }, function (err) {
    if (err) console.error(err);
    res.send(response);
  });
});

app.get('/blogposts', function (req, res) {
  var response = {};

  base('Blogposts').select({
    maxRecords: 10,
    view: 'Grid view'
  }).eachPage(function (records, fetchNextPage) {
    var post = void 0;

    records.forEach(function (record, index) {
      console.log('Retrieved', record.get('Title'));

      post = {
        title: record.get('Title'),
        text: record.get('Text'),
        dateadded: record.get('DateAdded'),
        author: record.get('Author')
      };

      response[index] = post;
    });

    fetchNextPage();
  }, function (err) {
    if (err) console.error(err);
    res.send(response);
  });
});

app.listen(port, function () {
  return console.log('Server listening at http://localhost:' + port);
});