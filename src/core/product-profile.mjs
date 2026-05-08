export const productProfile = {
  "repo": "build-qa-ai-job-worker",
  "title": "ビルド・検証・AIジョブワーカー",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 47,
  "tier": "P2",
  "score": 56,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "PCからPiへ軽い検証、Codexキュー、ローカルLLM実験を投げて結果を見る。",
  "problem": "常時動かしたい小ジョブの置き場がない。",
  "differentiation": "PCは指示、Piは常時実行、Androidは確認に役割分担する。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
