See link https://github.com/axios/axios/issues/5101

to explain:

```
react-scripts test --transformIgnorePatterns 'node_modules/(?!axios)/'
```
to render using puppeteer:

```bash
node fetchRenderedHtml.js
```

Node and npm that was only used to run puppeteer code and all tests:

[mark@mark react-strapi]$ node -v                                                              
v19.6.0
                                                                           
[mark@mark react-strapi]$ npm -v                                                               
8.19.2 
