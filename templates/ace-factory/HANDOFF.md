# Handoff Checklist — Ace Factory Design System

> 本ドキュメントは Claude Code へのハンドオフ前の最終チェックリスト。
> 納品物の完成度、残タスク、既知の制約をひとつにまとめる。

---

## 納品物

| # | 項目 | パス | 状態 |
|---|---|---|---|
| 1 | ブランド定義書 | `README.md` | ✅ 完了 |
| 2 | トークン/CSS | `colors_and_type.css` | ✅ 完了 |
| 3 | デザインシステム spec カード | `preview/*.html` (22枚) | ✅ 完了 |
| 4 | UI kit (Top page) | `ui_kits/corporate-site/` | ✅ 完了 |
| 5 | スキル定義 | `SKILL.md` | ✅ 完了 |
| 6 | コンテンツ雛形 | `content/sites/reims.json` | ✅ 完了 |
| 7 | CLUB REIMS フルページプレビュー | `preview/reims-full-page.html` | ✅ 完了 |

---

## ✅ 完了済みタスク

- ブランド概念・語調・ビジュアル基盤のドキュメント化
- モノクロ+アクセントカラーのトークン化 (`--af-*` CSS custom properties)
- Cormorant Garamond / Noto Serif JP / Noto Sans JP の Google Fonts 導入
- 22枚のデザインシステムカード(色・タイポ・余白・コンポーネント)
- Top ページ再現(Nav / Hero / Philosophy / Service / Message / Interview / Recruit / News / Access / Footer)
- 全セクションコンポーネントの汎用 props 化
- `content/sites/reims.json` への既定値の外出し
- 検証エージェントによる Recruit 帯レイアウト修正

---

## ⏳ 残TODO(別タスクで対応)

### 追加ページの実装
- `About` 詳細ページ
- `Service` 詳細ページ(各ベニューの詳細)
- `Interview` 個別ページ(キャスト詳細)
- `Recruit` 応募フォーム
- `News` 一覧 / 個別記事ページ

### データ整備
- 他5ベニュー分の `content/sites/*.json`(a / raise / nils / fujisaki / gclass)
- CLUB REIMS 所属キャスト実データ(現在「進撃のノア」6件の仮置き)
- 各ベニューのニュース実データ
- 代表メッセージの本文最終版(現状ドラフト)

### 画像差し替え
- CLUB REIMS 実キャスト写真(縦3:4、黒背景前提)
- CLUB REIMS 内装ヒーロー写真の高解像度版
- 他ベニューのヒーロー写真統一(現在一部が詳細写真を流用)

### その他
- モバイル(<768px)レイアウト追加(現状デスクトップ1440px設計)
- お問い合わせフォームのバリデーション仕様
- アクセシビリティ(WCAG 2.1 AA)最終確認
- `preview/reims-full-page.html` → 実 JSON fetch 版への切り替え

---

## ⚠️ 既知の制約 / リスク

### アセット起源
- **GitHub `taichiyao333/afactory` リポジトリが 409/空を返した** → UI kit は comp PDF (`uploads/A_Factory_HP_Top_260417.pdf`) + ブリーフのみから再現。公式ソースコードが入手でき次第、トークン値・コンポーネント名の再グラウンド必須。
- **画像は全て PDF からのラスタ抽出** → 以下は低解像度の可能性あり。本番入稿の高解像オリジナルへの差し替えが必要:
  - `assets/venues/*_interior.png`(店舗内装)
  - `assets/people/ceo_takeshi_ayata.png`(代表ポートレート)
  - `assets/people/cast_noa.png`(キャスト — 仮置き素材、1枚のみ)
  - `assets/events/*.png`(イベントポスター)
- **G CLASS ロゴ未取得** → 現状は英字タイプのみで描画。正式ロゴ差し替え必要。

### フォント
- **Google Fonts の Cormorant Garamond / Noto Serif JP / Noto Sans JP を採用中**。Adobe Fonts / Monotype の商用ライセンス版指定があれば `colors_and_type.css` の `@font-face` を差し替え。
- Cormorant Garamond は JP 文字を持たないため、JP は必ず Noto Serif JP または Noto Sans JP にフォールバック。

### 実装上の注意
- **Babel-standalone + JSX** をプレビュー用途で使用中。Claude Code 側で React/Vite/Next.js 等の本番バンドルに移植時、inline `<script type="text/babel">` の分割を単一エントリに集約すること。
- **各コンポーネントは `window.<Name>` でグローバル公開中** → モジュール化時は ES export に変換。
- `preview/reims-full-page.html` は JSON の内容をインラインで埋めている(ブラウザ直開きで CORS エラーを回避するため)。本番は `fetch('/content/sites/reims.json')` + `await r.json()` へ移行。

### ブランドガイドライン上の禁則
- 新しい彩度の高い色を追加しない(モノクロ+`#E8743C` のみ)
- シャドウ・グロー・グラデーションを追加しない(背景グラデは Hero の overlay のみ許容)
- Emoji / Unicode 記号アイコン不可
- CTA に「今すぐ」「限定」「お得」等の煽り文言不可
- 本文 `line-height: 1.9` を下げない(JP の可読性)

---

## 🤝 Claude Code ハンドオフ時に渡すもの

1. 本プロジェクト一式(`present_fs_item_for_download` で zip)
2. 本チェックリスト(`HANDOFF.md`)
3. 実画像入稿フォルダ(別途)
4. 本番環境スタック希望(Next.js / Astro / 純 React 等)の指定

---

最終更新: 2026-04-21
