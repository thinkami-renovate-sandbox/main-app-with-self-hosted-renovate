module.exports = {
  // Renovateの基本設定
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  
  // GitHub Actionsで実行する際の必須設定
  platform: "github",
  token: process.env.RENOVATE_TOKEN,
  
  // リポジトリの設定（RENOVATE_REPOSITORIESから取得）
  repositories: process.env.RENOVATE_REPOSITORIES ? [process.env.RENOVATE_REPOSITORIES] : ["owner/repo"],
  
  // すべて実行する
  mode: "full",

  // ベース設定を継承
  extends: [
    "config:recommended"
  ],

  // automergeを無効化
  automerge: false,
  
  // パッケージルール
  packageRules: [
    {
      // すべてのパッケージに対して
      matchPackageNames: ["*"],
      
      // メジャーアップデートを無効化
      matchUpdateTypes: ["major"],
      enabled: false
    },
    {
      // すべてのパッケージに対して
      matchPackageNames: ["*"],
      
      // マイナー・パッチアップデートのみ有効
      matchUpdateTypes: ["minor", "patch"],
      enabled: true
    }
  ],
  
  // プルリクエストの設定
  prConcurrentLimit: 4,
  prHourlyLimit: 4,
  
  // タイムゾーン設定（日本時間）
  timezone: "Asia/Tokyo",
  
  // Self-hosted runner用の追加設定
  onboarding: true,
  requireConfig: "optional",
  
  // ログレベル（renovate.ymlのinputから取得）
  logLevel: process.env.LOG_LEVEL || "info",
  
  // ドライラン設定（renovate.ymlのinputから取得）
  dryRun: process.env.RENOVATE_DRY_RUN === 'true' ? 'full' : null,
  
  // Git設定
  gitAuthor: "Renovate Bot <renovate@example.com>",
  
  // セキュリティ設定
  allowedPostUpgradeCommands: [],
  allowCustomCrateRegistries: false,
  allowScripts: false,
  
  // キャッシュ設定
  cacheDir: "/tmp/renovate-cache",
  
  // ホストルール設定（renovate.ymlのREVONATE_HOST_RULESから）
  hostRules: process.env.RENOVATE_HOST_RULES ? 
    JSON.parse(process.env.RENOVATE_HOST_RULES) : 
    [
      {
        matchHost: "github.com",
        hostType: "github",
        token: process.env.RENOVATE_TOKEN
      }
    ],
  
  // Bundler用の環境変数設定
  env: {
    BUNDLE_GITHUB__COM: process.env.BUNDLE_GITHUB__COM || process.env.RENOVATE_BUNDLE_GITHUB__COM,
  },
  
  // BundlerがGit認証を使用できるようにする（renovate.json5から）
  // gitUrl: "auth"
};