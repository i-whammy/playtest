# POSTリクエストを送信することができる
tags: http-request-test

## URLのみを指定
* URL"/"にPOSTリクエストを送る
* URL"/"にPOSTリクエストが送信された

## ヘッダーを指定
* URL"/"にヘッダー"content-type: application/json"で、POSTリクエストを送る
* API"mockApi"のURL"/"にヘッダー"content-type: application/json"で、POSTリクエストされた

## ヘッダーを複数指定
* URL"/"にヘッダー"content-type: application/json \r\n options: 1111,2222"で、POSTリクエストを送る
* API"mockApi"のURL"/"にヘッダー"content-type: application/json"で、POSTリクエストされた
* API"mockApi"のURL"/"にヘッダー"options: 1111,2222"で、POSTリクエストされた
* API"mockApi"のURL"/"にヘッダー"content-type: application/json \r\n options: 1111,2222"で、POSTリクエストされた
// 不要なヘッダーを付け加えたときには失敗する
API"mockApi"のURL"/"にヘッダー"content-type: application/json \r\n options: 1111,2222 \r\n x-unnecessary: hoge"で、POSTリクエストされた

## ボディとヘッダーを指定
* URL"/"にボディ"{\"test\": \"test\"}"、ヘッダー"content-type: application/json"で、POSTリクエストを送る
* API"mockApi"のURL"/"にボディ"/verifications/postWithHeader.json"JSONファイルの内容、ヘッダー"content-type: application/json"で、POSTリクエストされた
