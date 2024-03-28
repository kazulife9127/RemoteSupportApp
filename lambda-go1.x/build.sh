#!/bin/bash

# getEmailQuery関数のビルドとアーカイブ
cd getEmailQuery
GOOS=linux GOARCH=amd64 go build -o bootstrap
zip getEmailQuery.zip bootstrap
mv getEmailQuery.zip ../ # ZIPファイルを上のディレクトリに移動
mv bootstrap ../
cd ..

# putUserInfo関数のビルドとアーカイブ
cd putUserInfo
GOOS=linux GOARCH=amd64 go build -o bootstrap
zip putUserInfo.zip bootstrap
mv putUserInfo.zip ../ # ZIPファイルを上のディレクトリに移動
mv bootstrap ../
cd ..

echo "ビルドとアーカイブが完了しました"