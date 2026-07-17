/*
  霞ヶ原駐屯地サイト 編集用データ
  基本的にこのファイルだけ編集すれば内容を変更できます。

  GitHub Pages対応:
  画像は ./images/ファイル名 の相対パスで指定してください。
*/

const SITE_DATA = {
  siteName: "霞ヶ原駐屯地",
  siteNameEn: "KASUMIGAHARA GARRISON",

  links: {    
    game: "https://www.roblox.com/ja/games/75771202494832/Kasumigahara-Garrison",
    robloxGroup: "https://www.roblox.com/ja/communities/620046815/Kasumigahara-Garrison#!/about",
    discord: "https://discord.gg/Erzh4HpEeJ"
    rules: "https://docs.google.com/document/d/1ZwdiFtjzcQy6g4g6BqL767H1zCZSCeVZy68FsxrflNg/edit?usp=drivesdk"
  },

  images: {
    logo: "./images/logo.png",
    header: "./images/header.jpg",
    hero: "./images/hero.jpg"
  },

  hero: {
    title: "秩序を守り、<br>任務を遂行する。",
    description:
      "霞ヶ原駐屯地は、規律、連携、役割分担を重視した<br>Roblox上の駐屯地ロールプレイコミュニティです。"
  },

  about: [
    "霞ヶ原駐屯地は、隊員同士の連携と規律ある行動を重視し、訓練・警備・航空運用などの活動を行うRoblox上の駐屯地ロールプレイコミュニティです。",
    "初めて参加する方にも分かりやすい教育体制を整え、役職や所属部隊に応じた任務を通じて、組織として活動する楽しさを体験できる環境を目指しています。"
  ],

  units: [
    {
      name: "警務隊",
      english: "MILITARY POLICE UNIT",
      image: "./images/unit-keimu.jpg",
      description:
        "警務隊は、霞ヶ原駐屯地内の秩序維持を担う専門部隊です。施設警備、巡察、規則違反への対応、事件・事故発生時の初動対応などを行い、隊員が安全かつ規律正しく活動できる環境を維持します。冷静な判断力と公平な対応が求められる部隊です。"
    },
    {
      name: "教育隊",
      english: "TRAINING UNIT",
      image: "./images/unit-kyoiku.jpg",
      description:
        "教育隊は、新規入隊者や候補生に対する基礎教育を担当します。基本教練、服務、敬礼、無線通信、装備の取扱い、部隊行動などを段階的に指導し、任務に必要な知識と規律を身につけた隊員を育成します。駐屯地の将来を支える人材育成の中核となる部隊です。"
    },
    {
      name: "航空隊",
      english: "AVIATION UNIT",
      image: "./images/unit-koku.jpg",
      description:
        "航空隊は、航空機を使用した輸送、偵察、救難支援および部隊展開を担当する専門部隊です。地上部隊や司令部と連携し、上空から任務全体を支援します。安全な航空運用を最優先とし、高い操縦技術と状況判断能力を備えた隊員によって構成されます。"
    },
    {
      name: "統合幕僚司令部",
      english: "JOINT STAFF HEADQUARTERS",
      image: "./images/unit-headquarters.jpg",
      description:
        "統合幕僚司令部は、霞ヶ原駐屯地全体の運営方針を策定し、各部隊を統括する運営機関です。人事、規則整備、昇任管理、訓練計画、イベント運営、広報、開発調整などを担当し、各部隊が円滑に活動できる環境を整備します。公平性と継続性を重視し、駐屯地全体の発展を支えます。"
    }
  ],

  development: [
    {
      title: "駐屯地マップ拡張",
      progress: 65,
      image: "./images/dev-map.png",
      description: "駐屯地内町たちがまだまだ未完成です。"
    },
    {
      title: "航空運用システム",
      progress: 80,
      image: "./images/dev-aircraft.png",
      description: "航空機のシステムを開発しています。"
    },
    {
      title: "UI",
      progress: 80,
      image: "./images/dev-ui.png",
      description: "メニュー画面はチームUIがまだ未完成です。"
    },
    {
      title: "制服・装備更新",
      progress: 70,
      image: "./images/dev-uniform.png",
      description: "所属部隊に合わせた制服、装備、を制作しています。（一部）"
    }
  ],

  announcements: [
    {
      date: "2026-07-17",
      category: "広報",
      title: "webサイトを作るのが大好きなYuuが作りました。"
    },
    {
      date: "2026-07-11~",
      category: "開発",
      title: "駐屯地マップの更新作業を開始しました"
    },
    {
      date: "2026-07-16",
      category: "運営",
      title: "discordの安全対策のためbotを入れました。"
    }
  ],

  topics: [
    {
      date: "2026-07-11",
      category: "開発",
      title: "業務用ストア",
      description: "CQBができるようなストアを作りました。",
      image: "./images/topic-training.png"
    },
    {
      date: "2026-07-16",
      category: "開発",
      title: "試験情報ボード",
      description: "試験情報があるボード追加。",
      image: "./images/topic-aviation.png"
    },
    {
      date: "2026-07-17",
      category: "広報",
      title: "霞ヶ原駐屯地公式サイトを公開",
      description: "活動情報や開発状況を発信する公式サイトを公開しました。",
      image: "./images/topic-website.png"
    }
  ]
};
