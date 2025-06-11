module.exports = {
  // Renovateの基本設定
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  
  // GitHub Actionsで実行する際の必須設定
  platform: "github",
  // renovate.ymlではtokenはwithセクションで指定されているため、環境変数は不要
  
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
  
  // Bundler用の環境変数設定
  env: {
    BUNDLE_GITHUB__COM: process.env.BUNDLE_GITHUB__COM,
  },
  
  // BundlerがGit認証を使用できるようにする（renovate.json5から）
  // gitUrl: "auth"
};