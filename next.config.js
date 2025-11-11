const isDev = process.env.NODE_ENV !== 'production';
const headers=[{
  key:'Content-Security-Policy',
  value:[
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' ${isDev?"'unsafe-eval'":""}`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https:",
    "font-src 'self' https://fonts.gstatic.com data:",
    "media-src 'self'",
    `connect-src 'self' ${isDev?'ws:':''}`,
    "base-uri 'self'","form-action 'self'","frame-ancestors 'self'"
  ].join('; ')
}];
module.exports={ async headers(){ return [{source:'/(.*)',headers}] } };
