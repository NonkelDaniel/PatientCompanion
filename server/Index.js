import express from 'express';
import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keydhRqtCcp9PY4TB',
});

const base = Airtable.base('appOuyZj0gsBMOWyy');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', (req, res) => {
  const response = {};

  base('Users').select({
    maxRecords: 10,
    view: 'Grid view',
  }).eachPage((records, fetchNextPage) => {
    let user;

    records.forEach((record, index) => {
      console.log('Retrieved', record.get('Name'));

      user = {
        name: record.get('Name'),
        lastName: record.get('LastName'),
        password: record.get('Password'),
        description: record.get('Description'),
        tips: record.get('Tips'),
        connections: record.get('Connections'),
        blogposts: record.get('Blogposts'),
      };

      response[index] = user;
    });

    fetchNextPage();
  }, (err) => {
    if (err) console.error(err);
    res.send(response);
  });
});

app.get('/tips', (req, res) => {
  const response = {};

  base('Tips').select({
    maxRecords: 10,
    view: 'Grid view',
  }).eachPage((records, fetchNextPage) => {
    let tip;

    records.forEach((record, index) => {
      console.log('Retrieved', record.get('Title'));

      tip = {
        title: record.get('Title'),
        description: record.get('Description'),
        type: record.get('Type'),
        attachments: record.get('Attachments'),
        users: record.get('Users'),
      };

      response[index] = tip;
    });

    fetchNextPage();
  }, (err) => {
    if (err) console.error(err);
    res.send(response);
  });
});

app.get('/blogposts', (req, res) => {
  const response = {};

  base('Blogposts').select({
    maxRecords: 10,
    view: 'Grid view',
  }).eachPage((records, fetchNextPage) => {
    let post;

    records.forEach((record, index) => {
      console.log('Retrieved', record.get('Title'));

      post = {
        title: record.get('Title'),
        text: record.get('Text'),
        dateadded: record.get('DateAdded'),
        author: record.get('Author'),
      };

      response[index] = post;
    });

    fetchNextPage();
  }, (err) => {
    if (err) console.error(err);
    res.send(response);
  });
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
