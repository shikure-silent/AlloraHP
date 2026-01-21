export const siteData = {
  company: {
    name: "株式会社Allora",
    nameEn: "Allora Inc.",
    address: "東京都渋谷区（市区町村まで公開）",
    phone: "03-0000-0000",
    email: "allora.company@gmail.com",
  },
  hero: {
    headline: "温かみのあるデザインと確かな実装で、心地よい体験をつくる。",
    subhead:
      "Web制作からWebアプリ、iOSアプリまで。シンプルで伝わる設計と、長く使える実装を丁寧に届けます。",
    lead: "Design & Development Studio",
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
      title: "iOSアプリ開発",
      description: "要件整理から開発まで、利用体験を重視したプロダクトづくり。",
      points: ["UI設計/導線設計", "SwiftUI開発", "MVP検証サポート"],
    },
  ],
  works: {
    title: "無理なく貯金ができる家計簿アプリ",
    status: "開発中",
    description:
      "日々の支出を自然に振り返り、無理なく貯金できる体験を目指した家計簿アプリ。",
    roles: ["UI/UX設計", "フロントエンド実装", "iOSアプリ開発"],
    tech: ["SwiftUI", "Next.js", "TypeScript", "Supabase"],
    note: "公開URLは準備中です。",
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
  footer: {
    message: "丁寧な設計と、美しい実装を。",
  },
} as const;
