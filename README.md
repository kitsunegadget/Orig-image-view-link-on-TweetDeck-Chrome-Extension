# Orig image view link on TweetDeck: Chrome Extension

Add original image link in preview window.

Tweetdeck の画像プレビューにオリジナルサイズへのリンクを追加します。

![screenshot](ss.png)

## Note

ベージ読み込み時の Tweetdeck 側の読み込み時間を考慮して、5秒後に実行するようにしています。
ブラウザのコンソールで、```orig image view READY.``` と表示されてれば動きます。

※リンク文字が View Original と Flag media の間にあるので、プレビュー画像の横幅が小さいと重なりますが仕様です。

## Update

2018/09/02 ... 非推奨だったEventListenerにおけるDOM検知を、MurationObserverに変更。

2018/03/03 ... ユーザーの画像付き投稿に対してのリプライに画像付き投稿が含まれる場合、リプライ側のOrigリンクが正しくなかった問題を修正。