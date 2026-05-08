# テスト計画

- Repo: `build-qa-ai-job-worker`
- Domain: IoT
- Rank: 47 / P2 / Score 56
- Idea No: 11
- アイデア名: ビルド・検証・AIジョブワーカー
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\build-qa-ai-job-worker`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/build-qa-ai-job-worker-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
