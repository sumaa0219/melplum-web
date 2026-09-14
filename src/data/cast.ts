export type CastMember = {
  id: number;
  name: string;
  twitter: string;
  role?: string;
  generation: 1 | 2;
  likes: string;
  message: string;
  image?: string;
  color: string;
};

export const castMembers: CastMember[] = [
  /* ── 1期生 ────────────────────────────────────────── */
  {
    id: 1,  name: "ないちぃ",        twitter: "@naitimonst",      role: "店長・主催",
    generation: 1, color: "#FFB3CC",
    likes:   "パチスロとカードゲームやフレンドのインスタンスでのんびりする！",
    message: "ちょっぴり天然らしい？店長に会いに来てね！ご来店お待ちしております！！",
    image:   "/assets/casts/01_naitii.jpg",
  },
  {
    id: 2,  name: "澄々すぅ",        twitter: "@Su_Sumizumi",     role: "副主催",
    generation: 1, color: "#D8B4F8",
    likes:   "FPS",
    message: "キャストもスタッフも全員が楽しめるイベントにしていきます！",
    image:   "/assets/casts/02_sumizumusuu.jpg",
  },
  {
    id: 3,  name: "まひるま3",       twitter: "@mahiruma006",     role: "カフェ副店長",
    generation: 1, color: "#FFD4B3",
    likes:   "人とお話すること！紅茶も好き！",
    message: "キミの心を撃ち抜くサイレントスナイパー！バーチャルエンジェルのまひるだよ♡",
    image:   "/assets/casts/03_mahiruma.jpg",
  },
  {
    id: 4,  name: "きりゆめ",        twitter: "@kiriyume_VRC",
    generation: 1, color: "#FFB3CC",
    likes:   "FPS、サンドボックス等…",
    message: "初めてのキャストで緊張していますが、会いに来てくれると嬉しいです！",
    image:   "/assets/casts/04_kiriyume.jpg",
  },
  {
    id: 5,  name: "夜叉白雪",        twitter: "@yasyasira0506",
    generation: 1, color: "#B8E4FF",
    likes:   "写真撮影、ワールド巡り",
    message: "一緒に楽しいひとときを過ごしましょう❄️✨",
    image:   "/assets/casts/05_yasyasira.jpg",
  },
  {
    id: 6,  name: "大将_HH",         twitter: "@Taisyou_Yuzu",
    generation: 1, color: "#FFD4B3",
    likes:   "SlashCo VR",
    message: "キャスト未経験ですが精一杯頑張りますのでよろしくお願いします！！",
    image:   "/assets/casts/06_taisyou.jpg",
  },
  {
    id: 7,  name: "M446‐Mashiro‐",  twitter: "@MashiroMasshir0",
    generation: 1, color: "#B8FFD4",
    likes:   "FPS、LOL",
    message: "一緒にイベント楽しもうね～！",
    image:   "/assets/casts/07_m446.jpg",
  },
  {
    id: 8,  name: "すとーぶ",        twitter: "@028_A_brbr",
    generation: 1, color: "#FFB3CC",
    likes:   "雑談/睡眠/散歩",
    message: "ゆるっとしてるけど、意外としゃべるタイプ……かも？",
    image:   "/assets/casts/08_stove.jpg",
  },
  {
    id: 9,  name: "ねこになっちゃった", twitter: "@nyan190131",
    generation: 1, color: "#FFE4B3",
    likes:   "ご飯を食べること！おしゃべりすること！",
    message: "まだまだ未熟ですが、楽しい時間を過ごしてもらえるよう頑張ります",
    image:   "/assets/casts/09_neko.jpg",
  },
  {
    id: 10, name: "おに太郎",        twitter: "@onitarou_00",
    generation: 1, color: "#B8FFD4",
    likes:   "ダンス・甘ーいお菓子",
    message: "青い服着たまろ眉の子がいたら私もどっかにいるかも！探してみてね！",
    image:   "/assets/casts/10_onitarou.jpg",
  },
  {
    id: 11, name: "pitoru",          twitter: "@pitoru_vr",       role: "Bar副店長",
    generation: 1, color: "#D8B4F8",
    likes:   "温泉（玉川・草津・寸又峡）",
    message: "バイク乗りよわよわWebフロント。旅の話題お待ちしてます！",
    image:   "/assets/casts/11_pitoru.jpg",
  },
  {
    id: 12, name: "じょ〜",          twitter: "@jo11727",
    generation: 1, color: "#FFB3CC",
    likes:   "たのしいこと！！音楽！！",
    message: "初キャストですが、みんなと楽しくお喋りできるよう頑張ります！！",
    image:   "/assets/casts/12_jo.jpg",
  },
  {
    id: 13, name: "ニャンツァー",    twitter: "@nyanzervrc",
    generation: 1, color: "#FFD4B3",
    likes:   "写真を撮るのが好き！！！！",
    message: "自由気ままに遊んでます、めるぷらむで一緒に楽しも～？",
    image:   "/assets/casts/13_nyantzer.jpg",
  },
  {
    id: 14, name: "ぷらむ",          twitter: "@PlumVRC",
    generation: 1, color: "#D8B4F8",
    likes:   "おしゃべり、ゲーム",
    message: "人見知りだけどおしゃべりは好き！って方も100%楽しめるように頑張ります！",
    image:   "/assets/casts/14_plum.jpg",
  },
  {
    id: 15, name: "zaki8854",        twitter: "@VRCqkde",
    generation: 1, color: "#B8E4FF",
    likes:   "ゲーム・VRChat",
    message: "動画で紹介させていただきました！ぜひ見てください🎬",
    image:   undefined,
  },
  {
    id: 16, name: "こいも",          twitter: "@koimo_VRC",
    generation: 1, color: "#FFB3CC",
    likes:   "おしゃべり・旅",
    message: "居心地のいい場所を提供できたらなと思います。色んな話題お待ちしております！",
    image:   "/assets/casts/16_koimo.jpg",
  },
  {
    id: 17, name: "furukendesu",     twitter: "@KentaNamasaya",
    generation: 1, color: "#FFE4B3",
    likes:   "FPS、ピアノ、スノボ",
    message: "来てよかった！と思ってもらえるように頑張ります！スプーン持って一口もらいに行くね！！",
    image:   "/assets/casts/17_furuken.jpg",
  },
  {
    id: 18, name: "comet007",        twitter: "@comet__007",
    generation: 1, color: "#FFD4B3",
    likes:   "ゲーム、おいしいものを食べること！",
    message: "楽しくおしゃべりしましょうね！",
    image:   "/assets/casts/18_comet.jpg",
  },
  {
    id: 19, name: "おさゆ",          twitter: "@osayu57w",
    generation: 1, color: "#FFB3CC",
    likes:   "おでかけ、あまいおかし、おひるね！",
    message: "たくさんかわいいをお届け！ご主人様達とたのしく過ごしたいな〜！",
    image:   "/assets/casts/19_osayu.jpg",
  },
  {
    id: 20, name: "あめみん",        twitter: "@4mc_vrc",
    generation: 1, color: "#D8B4F8",
    likes:   "甘いものとホラー！",
    message: "フェイトラなのでお顔が動きます！お顔見に来てね！",
    image:   "/assets/casts/20_amemin.jpg",
  },
  {
    id: 21, name: "motizakisena",    twitter: "@motizakisena",
    generation: 1, color: "#FFB3CC",
    likes:   "人と話す事と外郎と瓦そば",
    message: "「せな」って呼んでください！話しかけてくれたらめっちゃ沢山話します！！",
    image:   "/assets/casts/21_sena.jpg",
  },

  /* ── 2期生 ────────────────────────────────────────── */
  {
    id: 22, name: "真野まのこ",      twitter: "@VRC_manoko",
    generation: 2, color: "#FFB3CC",
    likes:   "写真撮影・チルワでおしゃべり・ホラワ",
    message: "初キャストですが、来てくれたみんなが楽しんでもらえるよう精一杯頑張ります！！",
    image:   "/assets/casts/22_manoko.jpg",
  },
  {
    id: 23, name: "こなちゃ。",      twitter: "@57ch__",
    generation: 2, color: "#D8B4F8",
    likes:   "写真撮影とお酒を飲むこと",
    message: "いっぱいおしゃべりして楽しい時間を！乾杯してくれると喜びます！",
    image:   "/assets/casts/23_konachan.jpg",
  },
  {
    id: 24, name: "flamchang",       twitter: "@Flam_sl",
    generation: 2, color: "#FFE4B3",
    likes:   "写真撮影とお話すること！",
    message: "みなさんといっぱいおはなしできたらな～！精一杯がんばります！",
    image:   "/assets/casts/24_flam.jpg",
  },
  {
    id: 25, name: "ばななけーきぃ",  twitter: "@bananacakeee877",
    generation: 2, color: "#FFD4B3",
    likes:   "ゲームとスイーツ！！",
    message: "スウィートラブリーなばななけーきぃだぞっ！みんなとたくさんおしゃべりして楽しい時間を！",
    image:   "/assets/casts/25_bananacake.jpg",
  },
  {
    id: 26, name: "ましら（mashira）", twitter: "@mashira_vr",
    generation: 2, color: "#B8E4FF",
    likes:   "写真撮影・ごはん・ギャンブル",
    message: "初めてのキャストで緊張していますが、精一杯おもてなししていきます！",
    image:   "/assets/casts/26_mashira.jpg",
  },
  {
    id: 27, name: "しじみ1374",      twitter: "@sijimi1374",
    generation: 2, color: "#FFB3CC",
    likes:   "おはなし！改変！カフェ/温泉ワールド巡り！写真！",
    message: "おはなし大好き！動くの大好き！元気いっぱいおもてなしします！",
    image:   "/assets/casts/27_shijimi.jpg",
  },
  {
    id: 28, name: "結咲甘音",        twitter: "@Amaneyui_VRC",
    generation: 2, color: "#D8B4F8",
    likes:   "お写真やお話、ゲームとお昼寝",
    message: "ご主人のおかえりをお待ちしていますね🎶✨会えるのを楽しみにしています！",
    image:   "/assets/casts/28_amaneyui.jpg",
  },
  {
    id: 29, name: "-natume-",        twitter: "@_natume_0808",
    generation: 2, color: "#FFB3CC",
    likes:   "お写真とお話！",
    message: "みんなと一緒に楽しい時間を過ごせたらいいなって思います！！",
    image:   "/assets/casts/29_natume.jpg",
  },
  {
    id: 30, name: "Yamazakura_xasa", twitter: "@Yamazakura_xasa",
    generation: 2, color: "#FFE4B3",
    likes:   "おはなし・バイク・旅行",
    message: "みんなと楽しい時間を過ごせるように頑張って接客するのでぜひ遊びに来てね...!!",
    image:   "/assets/casts/30_yamazakura.jpg",
  },
  {
    id: 31, name: "さくら輝石",      twitter: "@jadeite5438",
    generation: 2, color: "#FFB3CC",
    likes:   "改変・写真撮影・いたずらすること！",
    message: "プラムちゃんの魅力をいっぱい伝えられるよう、精一杯がんばります！",
    image:   "/assets/casts/31_jadeite.jpg",
  },
  {
    id: 32, name: "ougre",           twitter: "@Ougre_VRC",
    generation: 2, color: "#B8FFD4",
    likes:   "VRChat・ゲーム",
    message: "動画で紹介させていただきました！ぜひ見てください🎬",
    image:   undefined,
  },
  {
    id: 33, name: "gvnya",           twitter: "@gunyairo",
    generation: 2, color: "#D8B4F8",
    likes:   "おさけ",
    message: "ぐぶにゃじゃないよ！ぐにゃだよ！いっぱい遊びに来てね～",
    image:   "/assets/casts/32_gvnya.jpg",
  },
  {
    id: 34, name: "shun127",         twitter: "@Nekodayo127",
    generation: 2, color: "#FFB3CC",
    likes:   "！！ねること！！",
    message: "ねこでもしゅんでもお好きな方で呼んでねっ！みんな来てねっ！",
    image:   "/assets/casts/33_shun127.jpg",
  },
  {
    id: 35, name: "りっく_",         twitter: "@vrikumelow",
    generation: 2, color: "#FFE4B3",
    likes:   "げーむとねること！",
    message: "りくです！みんなといっぱいおしゃべりして楽しんでいただけるよう頑張ります！！",
    image:   "/assets/casts/34_rikku.jpg",
  },
  {
    id: 36, name: "なんこつ",        twitter: "@nucotsu",
    generation: 2, color: "#FFD4B3",
    likes:   "睡眠、写真",
    message: "みなさんと楽しい時間を過ごせるようにがんばります！",
    image:   "/assets/casts/35_nankotsuu.jpg",
  },
];


