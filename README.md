See link https://github.com/axios/axios/issues/5101

to explain:

```
react-scripts test --transformIgnorePatterns 'node_modules/(?!axios)/'
```

System 1 that was only used to run puppeteer:

[mark@mark react-strapi]$ node -v                                                              
v19.6.0                                                                                        
[mark@mark react-strapi]$ npm -v                                                               
8.19.2 

