module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  
  // renovate.json5 があれば、そちらの設定も利用する
  // https://docs.renovatebot.com/self-hosted-configuration/#requireconfig
  requireConfig: "optional",
  
  // Git設定
  gitAuthor: "Renovate Bot <renovate@example.com>",
  
  // Bundler用の環境変数設定
  env: {
    BUNDLE_GITHUB__COM: process.env.BUNDLE_GITHUB__COM,
  },
};