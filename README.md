# grant-vercel-template

## tutorial

> Refer to examples in https://github.com/simov/grant-vercel.git

## dev

To copy api/config.json.example to api/config.json and update key and secret with your own google key and secret

```
  "google": {
    "key": "406103877817-7mvsac2gv7s3iq3oi0ngl4.apps.googleusercontent.com",
    "secret": "GOCSPX-g8kKVoCiutKP1km3_A"
  },

```

then

```
vercel dev
```

## deploy

To update api/config.json file from

```
{
  "defaults": {
    "origin": "http://localhost:3000",
    ...
```

to

```
{
  "defaults": {
    "origin": "https://connect-google.muzamint.com",
    ...
```

and then

```
vercel --build-env FIREBASE_PATH=https://ming2-a5776.firebaseio.com --build-env FIREBASE_AUTH=gOOUBr52xVhoeJqFXg49qHkKaxwxnuIEzvZbc --prod
```
