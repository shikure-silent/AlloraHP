export const siteData = {
  company: {
    name: "株式会社Allora",
    nameEn: "Allora Inc.",
    address: "東京都小平市学園東町448-3 セシリア202",
    phone: "080-3707-5169",
    email: "allora.office.info@gmail.com",
  },
  hero: {
    headline: "アイディア × AI × 実装",
    subhead:
      "ひらめきを、AIとエンジニアリングでプロダクトに変える。チームワークを強みに、丁寧かつ短納期で開発。フルリモートで対応。",
    lead: "AI Engineering & Product Build",
    ctaPrimary: "お問い合わせ",
    ctaSecondary: "採用を見る",
    highlights: [
      "リモート中心で柔軟な体制",
      "要件整理からUI設計まで一気通貫",
      "小さなチームでスピード重視",
    ],
  },
  services: [
    {
      title: "Web制作",
      description: "コーポレート/LP/採用サイトなど、目的を明確にした情報設計。",
      points: ["ブランドの世界観整理", "UI/UX設計", "更新性の高い構成"],
    },
    {
      title: "Webアプリ開発",
      description: "フロントエンド中心に、要件に応じた実装をサポート。",
      points: ["設計とプロトタイピング", "React/Next.js実装", "運用までの改善"],
    },
    {
      title: "iOSアプリ対応",
      description:
        "Web資産を活かしながら、iOS向けに最適化したハイブリッド実装を支援。",
      points: [
        "Capacitorを用いたiOSアプリ化対応",
        "WebアプリをiOS向けに最適化・App Store公開支援",
        "ハイブリッド構成でのiOS実装（Capacitor）",
      ],
    },
  ],
  works: {
    note: "デモ環境のため内容は変更される場合があります。",
    projects: [
      {
        id: "kakeibo-app",
        title: "無理なく貯金ができる家計簿アプリ",
        status: "開発中",
        description:
          "日々の支出を自然に振り返り、無理なく貯金できる体験を目指した家計簿アプリ。",
        url: "https://murikake.com",
        urlLabel: "アプリを見る",
        roles: [
          "Webフロント開発",
          "モバイルアプリ対応",
          "認証・アカウント管理",
          "クラウド同期・バックアップ復元",
          "通知機能",
          "外部データ連携（e-Stat API）",
        ],
        tech: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Capacitor",
          "Supabase",
        ],
      },
    ],
  },
  recruit: {
    headline: "基本リモートの小さなチーム",
    description:
      "プロジェクトごとに最適な体制を組み、距離よりもコミュニケーションの質を大切にしています。",
    roles: ["エンジニア", "デザイナー", "PM", "その他（相談）"],
    employment: "業務委託 / 正社員（相談可）",
    style: ["柔軟な稼働", "カジュアル面談歓迎", "プロダクト志向"],
  },
  contact: {
    workTypes: ["Web制作", "Webアプリ", "iOSアプリ", "その他"],
    recruitRoles: ["エンジニア", "デザイナー", "PM", "その他"],
    responseNote: "原則2営業日以内にご連絡します。",
  },
} as const;
