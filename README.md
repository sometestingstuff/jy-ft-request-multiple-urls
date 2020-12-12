# Overview

A simple NPM module that given an array of URLs will return their content via a Promise.

##Usage

```javascript
const requestMultipleUrls = require('jy-ft-request-multiple-urls') ();

. . . .

const responses = await requestMultipleUrls.get( urls );
```

# Installation

```bash
npm install jy-ft-request-multiple-urls --save
```

# Example

```javascript
const urls = [
    'https://url1.com',
    'https://url2.com',
    'https://url3.com',
    'https://url4.com'
];

const responses = await app.get( urls );

```
```responses``` will contain the result from each URL in the order of the array position.  
