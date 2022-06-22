# grant-vercel-template

## tutorial

> Refer to examples in https://github.com/simov/grant-vercel.git

## dev

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

then

```
vercel --build-env FIREBASE_PATH=https://ming2-a5776.firebaseio.com --build-env FIREBASE_AUTH=gOOUBr52xVhoeJqFXg49qHkKaxwxnuIEzvZbc --prod
```
