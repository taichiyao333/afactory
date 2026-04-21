# afactory

**Ace Factory** のサイトテンプレート集。ブランド定義(デザインシステム)と、そこから組み上げる UI キット、コンテンツ雛形を一式で管理するリポジトリです。

## このリポジトリは何か

- **テンプレート**: ブランドガイドラインを CSS トークン / React コンポーネント / コンテンツ JSON にまで落としきった "すぐ使える" 配布形態。
- **実装の土台**: 本番サイト(`apps/`)はこのテンプレを参照して組む。色・タイポ・余白・コンポーネントの出所は常にテンプレ側。
- **運用ルールの置き場**: `CLAUDE.md` にリポジトリ全体の作業規約(ブランド禁則・読むべきファイル・作業方針の共有ルール)を集約。

## ディレクトリ構造

```
afactory/
├── CLAUDE.md                         作業規約(必読)
├── README.md                         このファイル
├── templates/
│   └── ace-factory/                  Ace Factory ブランドのテンプレ一式
│       ├── README.md                 ブランド定義書(声・色・タイポ・ロゴ・イメージ)
│       ├── SKILL.md                  このテンプレでサイトを組む手順
│       ├── HANDOFF.md                残TODO / 既知の制約 / 素材の出所
│       ├── colors_and_type.css       デザイントークン(CSS変数)
│       ├── assets/                   ロゴ・写真素材・アイコン
│       ├── content/
│       │   └── sites/
│       │       └── reims.json        店舗コンテンツ雛形(CLUB REIMS)
│       ├── preview/                  デザインシステムカード(22枚)+ フルページプレビュー
│       │   └── reims/index.html      CLUB REIMS のフルページ実装例
│       └── ui_kits/
│           └── corporate-site/       Top ページを構成する React コンポーネント群
└── apps/
    └── .gitkeep                      本番実装の置き場(現時点では空)
```

## 新店舗ページを追加したいとき

基本フロー:

1. `templates/ace-factory/content/sites/<slug>.json` を新規作成(`reims.json` を雛形としてコピーして差分だけ埋める)
2. `templates/ace-factory/preview/<slug>/index.html` から JSON を読ませる
3. それで意図通りに見えたら `apps/` 側に本番実装を組む

**追加するのは JSON 1ファイルだけ**で済むように設計されています。新しいコンポーネント・新しい色・新しいフォントを足したくなったら、まず既存のテンプレで表現しきれないか確認してください(大抵は JSON で足ります)。

詳しい手順は `templates/ace-factory/SKILL.md` を参照。

## 本番実装を組むとき

`apps/<site-name>/` を新規作成し、`templates/ace-factory/` を参照する形で組みます。以下を守ってください:

- CSS トークンは `templates/ace-factory/colors_and_type.css` を import すること。`apps/` 側で色・余白を再定義しない。
- React コンポーネントは `templates/ace-factory/ui_kits/corporate-site/` から import すること。コピペで分岐させない。
- ブランド禁則(オレンジ限定 / 角丸最小 / シャドウ禁止 等)は `CLAUDE.md` の "ブランド禁則" セクションが正。

## 将来の拡張方針

- **別ブランドを追加**する場合は `templates/<new-brand>/` に並列配置。既存の `ace-factory/` に混ぜない。
- **別業態を追加**する場合(同ブランドで別テンプレ種別が要るとき)も同様に `templates/<new-template>/` として独立させる。
- ルート直下は規約ファイルのみに保つ。実装を直置きしない。

## 最初に読むべきファイル

1. **`CLAUDE.md`** — 作業規約・ブランド禁則・作業方針の共有ルール
2. **`templates/ace-factory/README.md`** — ブランド定義書
3. **`templates/ace-factory/HANDOFF.md`** — 残TODO と既知の制約
4. **`templates/ace-factory/SKILL.md`** — 実装手順
