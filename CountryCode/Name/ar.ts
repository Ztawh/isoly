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
		AF: " أفغانستان",
		AL: " ألبانيا",
		DZ: " الجزائر",
		AS: " ساموا الأمريكية",
		AD: " أندورا",
		AO: " أنغولا",
		AI: " أنغويلا",
		AQ: " القارة القطبية الجنوبية",
		AG: " أنتيغوا وباربودا",
		AR: " الأرجنتين",
		AM: " أرمينيا",
		AW: " أروبا",
		AU: " أستراليا",
		AT: " النمسا",
		AZ: " أذربيجان",
		BS: " باهاماس",
		BH: " البحرين",
		BD: " بنغلاديش",
		BB: " باربادوس",
		BY: " روسيا البيضاء",
		BE: " بلجيكا",
		BZ: " بليز",
		BJ: " بنين",
		BM: " برمودا",
		BT: " بوتان",
		BO: " بوليفيا",
		BA: " البوسنة والهرسك",
		BW: " بوتسوانا",
		BV: " جزيرة بوفيه",
		BR: " البرازيل",
		IO: " إقليم المحيط الهندي البريطاني",
		BN: " بروناي",
		BG: " بلغاريا",
		BF: " بوركينا فاسو",
		BI: " بوروندي",
		KH: " كمبوديا",
		CM: " الكاميرون",
		CA: " كندا",
		CV: " الرأس الأخضر",
		KY: " جزر كايمان",
		CF: " جمهورية أفريقيا الوسطى",
		TD: " تشاد",
		CL: " تشيلي",
		CN: " الصين",
		CX: " جزيرة عيد الميلاد",
		CC: " جزر كوكوس",
		CO: " كولومبيا",
		KM: " جزر القمر",
		CG: " جمهورية الكونغو",
		CD: " جمهورية الكونغو الديمقراطية",
		CK: " جزر كوك",
		CR: " كوستاريكا",
		CI: " ساحل العاج",
		HR: " كرواتيا",
		CU: " كوبا",
		CY: " قبرص",
		CZ: " جمهورية التشيك",
		DK: " الدنمارك",
		DJ: " جيبوتي",
		DM: " دومينيكا",
		DO: " جمهورية الدومينيكان",
		EC: " الإكوادور",
		EG: " مصر",
		SV: " السلفادور",
		GQ: " غينيا الاستوائية",
		ER: " إريتريا",
		EE: " إستونيا",
		ET: " إثيوبيا",
		FK: " جزر فوكلاند",
		FO: " جزر فارو",
		FJ: " فيجي",
		FI: " فنلندا",
		FR: " فرنسا",
		GF: " غويانا الفرنسية",
		PF: " بولينزيا الفرنسية",
		TF: " أراض فرنسية جنوبية وأنتارتيكية",
		GA: " الغابون",
		GM: " غامبيا",
		GE: " جورجيا",
		DE: " ألمانيا",
		GH: " غانا",
		GI: " جبل طارق",
		GR: " اليونان",
		GL: " جرينلاند",
		GD: " غرينادا",
		GP: " غوادلوب",
		GU: " غوام",
		GT: " غواتيمالا",
		GN: " غينيا",
		GW: " غينيا بيساو",
		GY: " غيانا",
		HT: " هايتي",
		HM: " جزيرة هيرد وجزر ماكدونالد",
		VA: "  الفاتيكان",
		HN: " هندوراس",
		HK: " هونغ كونغ",
		HU: " المجر",
		IS: " آيسلندا",
		IN: " الهند",
		ID: " إندونيسيا",
		IR: " إيران",
		IQ: " العراق",
		IE: " أيرلندا",
		IL: " إسرائيل",
		IT: " إيطاليا",
		JM: " جامايكا",
		JP: " اليابان",
		JO: " الأردن",
		KZ: " كازاخستان",
		KE: " كينيا",
		KI: " كيريباتي",
		KP: " كوريا الشمالية",
		KR: " كوريا الجنوبية",
		KW: " الكويت",
		KG: " قيرغيزستان",
		LA: " لاوس",
		LV: " لاتفيا",
		LB: " لبنان",
		LS: " ليسوتو",
		LR: " ليبيريا",
		LY: " ليبيا",
		LI: " ليختنشتاين",
		LT: " ليتوانيا",
		LU: " لوكسمبورغ",
		MO: " ماكاو",
		MK: " مقدونيا",
		MG: " مدغشقر",
		MW: " مالاوي",
		MY: " ماليزيا",
		MV: " جزر المالديف",
		ML: " مالي",
		MT: " مالطا",
		MH: " جزر مارشال",
		MQ: " مارتينيك",
		MR: " موريتانيا",
		MU: " موريشيوس",
		YT: " مايوت",
		MX: " المكسيك",
		FM: " ولايات ميكرونيسيا المتحدة",
		MD: " مولدوفا",
		MC: " موناكو",
		MN: " منغوليا",
		MS: " مونتسرات",
		MA: " المغرب",
		MZ: " موزمبيق",
		MM: " بورما",
		NA: " ناميبيا",
		NR: " ناورو",
		NP: " نيبال",
		NL: " هولندا",
		NC: " كاليدونيا الجديدة",
		NZ: " نيوزيلندا",
		NI: " نيكاراغوا",
		NE: " النيجر",
		NG: " نيجيريا",
		NU: " نييوي",
		NF: " جزيرة نورفولك",
		MP: " جزر ماريانا الشمالية",
		NO: " النرويج",
		OM: " عمان",
		PK: " باكستان",
		PW: " بالاو",
		PS: " فلسطين",
		PA: " بنما",
		PG: " بابوا غينيا الجديدة",
		PY: " باراغواي",
		PE: " بيرو",
		PH: " الفلبين",
		PN: " جزر بيتكيرن",
		PL: " بولندا",
		PT: " البرتغال",
		PR: " بورتوريكو",
		QA: " قطر",
		RE: " لا ريونيون",
		RO: " رومانيا",
		RU: " روسيا",
		RW: " رواندا",
		SH: " سانت هيلينا وأسينشين وتريستان دا كونا",
		KN: " سانت كيتس ونيفيس",
		LC: " سانت لوسيا",
		PM: " سان بيير وميكلون",
		VC: " سانت فينسنت والغرينادين",
		WS: " ساموا",
		SM: " سان مارينو",
		ST: " ساو تومي وبرينسيب",
		SA: " السعودية",
		SN: " السنغال",
		SC: " سيشل",
		SL: " سيراليون",
		SG: " سنغافورة",
		SK: " سلوفاكيا",
		SI: " سلوفينيا",
		SB: " جزر سليمان",
		SO: " الصومال",
		ZA: " جنوب أفريقيا",
		GS: " جورجيا الجنوبية وجزر ساندويتش الجنوبية",
		ES: " إسبانيا",
		LK: " سريلانكا",
		SD: " السودان",
		SR: " سورينام",
		SJ: " سفالبارد ويان ماين",
		SZ: " سوازيلاند",
		SE: " السويد",
		CH: " سويسرا",
		SY: " سوريا",
		TW: " تايوان",
		TJ: " طاجيكستان",
		TZ: " تانزانيا",
		TH: " تايلاند",
		TL: " تيمور الشرقية",
		TG: " توغو",
		TK: " توكيلاو",
		TO: " تونغا",
		TT: "ترينيداد وتوباغو",
		TN: " تونس",
		TR: " تركيا",
		TM: " تركمانستان",
		TC: " جزر توركس وكايكوس",
		TV: " توفالو",
		UG: " أوغندا",
		UA: " أوكرانيا",
		AE: " الإمارات العربية المتحدة",
		GB: " المملكة المتحدة",
		US: " الولايات المتحدة",
		UM: " جزر الولايات المتحدة",
		UY: " الأوروغواي",
		UZ: " أوزبكستان",
		VU: " فانواتو",
		VE: " فنزويلا",
		VN: " فيتنام",
		VG: " جزر العذراء البريطانية",
		VI: " جزر العذراء الأمريكية",
		WF: " والس وفوتونا",
		EH: " الصحراء الغربية",
		YE: " اليمن",
		ZM: " زامبيا",
		ZW: " زيمبابوي",
		AX: " جزر أولاند",
		BQ: " الجزر الكاريبية الهولندية",
		CW: " كوراساو",
		GG: " غيرنزي",
		IM: " جزيرة مان",
		JE: " جيرزي",
		ME: " الجبل الأسود",
		BL: " سان بارتيلمي",
		MF: " سانت مارتن (الجزء الفرنسي)",
		RS: " صربيا",
		SX: " سانت مارتن (الجزء الهولندي)",
		SS: " جنوب السودان",
		XK: " كوسوفو",
}
