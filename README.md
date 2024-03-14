# RemoteSupportApp
## 画像のようにデモアプリを作動させるガイド
1. ルートディレクトリで以下を実行
```
npm install
```
3. Finderを開き、プロジェクトファイルの中にある`iOS/xxx.xcworkspace`をクリックし、Xcodeを開く。
4. Xcodeで、`Product` > `Clean Build Folder` を選択してプロジェクトをクリーンする。
5. ルートディレクトリで以下を実行
```
npx react-native run-ios 
```
