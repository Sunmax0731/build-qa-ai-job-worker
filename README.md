# build-qa-ai-job-worker

ビルド・検証・AIジョブワーカー の closed alpha prototype。PCからPiへ軽い検証、Codexキュー、ローカルLLM実験を投げて結果を見る。

## Status

- Version: 0.1.0-alpha.1
- Rank: 47 / P2 / Score 56
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
