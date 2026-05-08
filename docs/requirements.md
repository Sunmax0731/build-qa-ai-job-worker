# 要件定義

- Repo: `build-qa-ai-job-worker`
- Domain: IoT
- Rank: 47 / P2 / Score 56
- Idea No: 11
- アイデア名: ビルド・検証・AIジョブワーカー
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
PCからPiへ軽い検証、Codexキュー、ローカルLLM実験を投げて結果を見る。

## 課題
常時動かしたい小ジョブの置き場がない。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
