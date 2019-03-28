import { Alpha2 } from "../Alpha2"
import { Alpha3 } from "../Alpha3"
import { Numeric } from "../Numeric"
export function from(country: Alpha2 | Alpha3 | Numeric): string {
	return names[country] || from(Alpha2.from(country as Alpha3 | Numeric))
}
export function parse(country: string): Alpha2 | undefined {
	const result = Object.entries(names).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase())
	return result && result[0] as Alpha2
}

const names: { [country: string]: string | undefined } = {
		AF: "アフガニスタン",
		AL: "アルバニア",
		DZ: "アルジェリア",
		AS: "アメリカ領サモア",
		AD: "アンドラ",
		AO: "アンゴラ",
		AI: "アンギラ",
		AQ: "南極",
		AG: "アンティグア・バーブーダ",
		AR: "アルゼンチン",
		AM: "アルメニア",
		AW: "アルバ",
		AU: "オーストラリア",
		AT: "オーストリア",
		AZ: "アゼルバイジャン",
		BS: "バハマ",
		BH: "バーレーン",
		BD: "バングラデシュ",
		BB: "バルバドス",
		BY: "ベラルーシ",
		BE: "ベルギー",
		BZ: "ベリーズ",
		BJ: "ベナン",
		BM: "バミューダ",
		BT: "ブータン",
		BO: "ボリビア多民族国",
		BA: "ボスニア・ヘルツェゴビナ",
		BW: "ボツワナ",
		BV: "ブーベ島",
		BR: "ブラジル",
		IO: "イギリス領インド洋地域",
		BN: "ブルネイ・ダルサラーム",
		BG: "ブルガリア",
		BF: "ブルキナファソ",
		BI: "ブルンジ",
		KH: "カンボジア",
		CM: "カメルーン",
		CA: "カナダ",
		CV: "カーボベルデ",
		KY: "ケイマン諸島",
		CF: "中央アフリカ共和国",
		TD: "チャド",
		CL: "チリ",
		CN: "中華人民共和国",
		CX: "クリスマス島",
		CC: "ココス（キーリング）諸島",
		CO: "コロンビア",
		KM: "小諸",
		CG: "コンゴ共和国",
		CD: "コンゴ民主共和国",
		CK: "クック諸島",
		CR: "コスタリカ",
		CI: "コートジボワール",
		HR: "クロアチア",
		CU: "キューバ",
		CY: "キプロス",
		CZ: "チェコ",
		DK: "デンマーク",
		DJ: "ジブチ",
		DM: "ドミニカ国",
		DO: "ドミニカ共和国",
		EC: "エクアドル",
		EG: "エジプト",
		SV: "エルサルバドル",
		GQ: "赤道ギニア",
		ER: "エリトリア",
		EE: "エストニア",
		ET: "エチオピア",
		FK: "フォークランド（マルビナス）諸島",
		FO: "フェロー諸島",
		FJ: "フィジー",
		FI: "フィンランド",
		FR: "フランス",
		GF: "フランス領ギアナ",
		PF: "フランス領ポリネシア",
		TF: "フランス領南方・南極地域",
		GA: "ガボン",
		GM: "ガンビア",
		GE: "ジョージア",
		DE: "ドイツ",
		GH: "ガーナ",
		GI: "ジブラルタル",
		GR: "ギリシャ",
		GL: "グリーンランド",
		GD: "グレナダ",
		GP: "グアドループ",
		GU: "グアム",
		GT: "グアテマラ",
		GN: "ギニア",
		GW: "ギニアビサウ",
		GY: "ガイアナ",
		HT: "ハイチ",
		HM: "ハード島とマクドナルド諸島",
		VA: "バチカン市国",
		HN: "ホンジュラス",
		HK: "香港",
		HU: "ハンガリー",
		IS: "アイスランド",
		IN: "インド",
		ID: "インドネシア",
		IR: "イラン・イスラム共和国",
		IQ: "イラク",
		IE: "アイルランド",
		IL: "イスラエル",
		IT: "イタリア",
		JM: "ジャマイカ",
		JP: "日本",
		JO: "ヨルダン",
		KZ: "カザフスタン",
		KE: "ケニア",
		KI: "キリバス",
		KP: "朝鮮民主主義人民共和国",
		KR: "大韓民国",
		KW: "クウェート",
		KG: "キルギス",
		LA: "ラオス人民民主共和国",
		LV: "ラトビア",
		LB: "レバノン",
		LS: "レソト",
		LR: "リベリア",
		LY: "リビア",
		LI: "リヒテンシュタイン",
		LT: "リトアニア",
		LU: "ルクセンブルク",
		MO: "マカオ",
		MK: "マケドニア旧ユーゴスラビア共和国",
		MG: "マダガスカル",
		MW: "マラウイ",
		MY: "マレーシア",
		MV: "モルディブ",
		ML: "マリ",
		MT: "マルタ",
		MH: "マーシャル諸島",
		MQ: "マルティニーク",
		MR: "モーリタニア",
		MU: "モーリシャス",
		YT: "マヨット",
		MX: "メキシコ",
		FM: "ミクロネシア連邦",
		MD: "モルドバ共和国",
		MC: "モナコ",
		MN: "モンゴル",
		MS: "モントセラト",
		MA: "モロッコ",
		MZ: "モザンビーク",
		MM: "ミャンマー",
		NA: "ナミビア",
		NR: "ナウル",
		NP: "ネパール",
		NL: "オランダ",
		NC: "ニューカレドニア",
		NZ: "ニュージーランド",
		NI: "ニカラグア",
		NE: "ニジェール",
		NG: "ナイジェリア",
		NU: "ニウエ",
		NF: "ノーフォーク島",
		MP: "北マリアナ諸島",
		NO: "ノルウェー",
		OM: "オマーン",
		PK: "パキスタン",
		PW: "パラオ",
		PS: "パレスチナ",
		PA: "パナマ",
		PG: "パプアニューギニア",
		PY: "パラグアイ",
		PE: "ペルー",
		PH: "フィリピン",
		PN: "ピトケアン",
		PL: "ポーランド",
		PT: "ポルトガル",
		PR: "プエルトリコ",
		QA: "カタール",
		RE: "レユニオン",
		RO: "ルーマニア",
		RU: "ロシア連邦",
		RW: "ルワンダ",
		SH: "セントヘレナ・アセンションおよびトリスタンダクーニャ",
		KN: "セントクリストファー・ネイビス",
		LC: "セントルシア",
		PM: "サンピエール島・ミクロン島",
		VC: "セントビンセントおよびグレナディーン諸島",
		WS: "サモア",
		SM: "サンマリノ",
		ST: "サントメ・プリンシペ",
		SA: "サウジアラビア",
		SN: "セネガル",
		SC: "セーシェル",
		SL: "シエラレオネ",
		SG: "シンガポール",
		SK: "スロバキア",
		SI: "スロベニア",
		SB: "ソロモン諸島",
		SO: "ソマリア",
		ZA: "南アフリカ",
		GS: "サウスジョージア・サウスサンドウィッチ諸島",
		ES: "スペイン",
		LK: "スリランカ",
		SD: "スーダン",
		SR: "スリナム",
		SJ: "スヴァールバル諸島およびヤンマイエン島",
		SZ: "スワジランド",
		SE: "スウェーデン",
		CH: "スイス",
		SY: "シリア・アラブ共和国",
		TW: "台湾",
		TJ: "タジキスタン",
		TZ: "タンザニア",
		TH: "タイ",
		TL: "東ティモール",
		TG: "トーゴ",
		TK: "トケラウ",
		TO: "トンガ",
		TT: "トリニダード・トバゴ",
		TN: "チュニジア",
		TR: "トルコ",
		TM: "トルクメニスタン",
		TC: "タークス・カイコス諸島",
		TV: "ツバル",
		UG: "ウガンダ",
		UA: "ウクライナ",
		AE: "アラブ首長国連邦",
		GB: "イギリス",
		US: "アメリカ合衆国",
		UM: "合衆国領有小離島",
		UY: "ウルグアイ",
		UZ: "ウズベキスタン",
		VU: "バヌアツ",
		VE: "ベネズエラ・ボリバル共和国",
		VN: "ベトナム",
		VG: "イギリス領ヴァージン諸島",
		VI: "アメリカ領ヴァージン諸島",
		WF: "ウォリス・フツナ",
		EH: "西サハラ",
		YE: "イエメン",
		ZM: "ザンビア",
		ZW: "ジンバブエ",
		AX: "オーランド諸島",
		BQ: "ボネール、シント・ユースタティウスおよびサバ",
		CW: "キュラソー",
		GG: "ガーンジー",
		IM: "マン島",
		JE: "ジャージー",
		ME: "モンテネグロ",
		BL: "サン・バルテルミー",
		MF: "サン・マルタン（フランス領）",
		RS: "セルビア",
		SX: "シント・マールテン（オランダ領）",
		SS: "南スーダン",
		XK: "コソ",
}
