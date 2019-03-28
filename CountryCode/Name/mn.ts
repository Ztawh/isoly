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
		AD: "Андорра",
		AE: "Арабын Нэгдсэн Эмират",
		AF: "Афганистан",
		AG: "Антигуа ба Барбуда",
		AI: "Ангила",
		AL: "Албани",
		AM: "Армени",
		AO: "Ангол",
		AQ: "Антарктик",
		AR: "Аргентин",
		AS: "Америкийн Самоа",
		AT: "Австри",
		AU: "Австрали",
		AW: "Аруба",
		AX: "Аландын Арлууд",
		AZ: "Азербайжан",
		BA: "Босни Герцеговин",
		BB: "Барбадос",
		BD: "Бангладеш",
		BE: "Белги",
		BF: "Буркина фасо",
		BG: "Болгар",
		BH: "Бахрейн",
		BI: "Бурунди",
		BJ: "Бенин",
		BL: "Сент Бартельми",
		BM: "Бермуд",
		BN: "Бруней",
		BO: "Боливи",
		BQ: "Карибын Нидерланд",
		BR: "Бразил",
		BS: "Багам",
		BT: "Бутан",
		BV: "Буветын арлууд",
		BW: "Ботсвана",
		BY: "Беларусь",
		BZ: "Белиз",
		CA: "Канад",
		CC: "Кокос (Кийлинг) арлууд",
		CD: "Конго-Киншаса",
		CF: "Төв Африкийн Бүгд Найрамдах Улс",
		CG: "Конго Браззавиль",
		CH: "Швейцари",
		CI: "Кот д’Ивуар",
		CK: "Күүкийн арлууд",
		CL: "Чили",
		CM: "Камерун",
		CN: "Хятад",
		CO: "Колумб",
		CR: "Коста Рика",
		CU: "Куба",
		CV: "Капе Верде",
		CW: "Куракао",
		CX: "Зул сарын арал",
		CY: "Кипр",
		CZ: "Чех",
		DE: "Герман",
		DJ: "Джибути",
		DK: "Дани",
		DM: "Доминик",
		DO: "Бүгд Найрамдах Доминикан Улс",
		DZ: "Алжир",
		EC: "Эквадор",
		EE: "Эстони",
		EG: "Египет",
		EH: "Баруун Сахар",
		ER: "Эритри",
		ES: "Испани",
		ET: "Этиоп",
		FI: "Финланд",
		FJ: "Фижи",
		FK: "Фолькландын Арлууд",
		FM: "Микронези",
		FO: "Фароэ Арлууд",
		FR: "Франц",
		GA: "Габон",
		GB: "Их Британи",
		GD: "Гренада",
		GE: "Гүрж",
		GF: "Францын Гайана",
		GG: "Гернси",
		GH: "Гана",
		GI: "Гибралтар",
		GL: "Гренланд",
		GM: "Гамби",
		GN: "Гвиней",
		GP: "Гваделуп",
		GQ: "Экваторын Гвиней",
		GR: "Грек",
		GS: "Өмнөд Жоржиа ба Өмнөд Сэндвичийн Арлууд",
		GT: "Гватемал",
		GU: "Гуам",
		GW: "Гвиней-Бисау",
		GY: "Гайана",
		HK: "Хонг Конг",
		HM: "Хэрд болон Макдоналд арлууд",
		HN: "Гондурас",
		HR: "Хорват",
		HT: "Гаити",
		HU: "Унгар",
		ID: "Индонези",
		IE: "Ирланд",
		IL: "Израиль",
		IM: "Мэн Арал",
		IN: "Энэтхэг",
		IO: "Британийн харьяа Энэтхэгийн далай дахь нутаг дэвсгэрүүд",
		IQ: "Ирак",
		IR: "Иран",
		IS: "Исланд",
		IT: "Итали",
		JE: "Жерси",
		JM: "Ямайк",
		JO: "Йордан",
		JP: "Япон",
		KE: "Кени",
		KG: "Кыргызстан",
		KH: "Камбож",
		KI: "Кирибати",
		KM: "Коморос",
		KN: "Сент-Киттс ба Невис",
		KP: "Хойд Солонгос",
		KR: "Өмнөд Солонгос",
		KW: "Кувейт",
		KY: "Кайманы Арлууд",
		KZ: "Казахстан",
		LA: "Лаос",
		LB: "Ливан",
		LC: "Сент Люсиа",
		LI: "Лихтенштейн",
		LK: "Шри Ланка",
		LR: "Либери",
		LS: "Лесото",
		LT: "Литва",
		LU: "Люксембург",
		LV: "Латви",
		LY: "Ливи",
		MA: "Марокко",
		MC: "Монако",
		MD: "Молдав",
		ME: "Монтенегро",
		MF: "Сент-Мартин",
		MG: "Мадагаскар",
		MH: "Маршаллын арлууд",
		MK: "Македон",
		ML: "Мали",
		MM: "Мьянмар (Бурма)",
		MN: "Монгол",
		MO: "Макао",
		MP: "Хойд Марианы арлууд",
		MQ: "Мартиник",
		MR: "Мавритани",
		MS: "Монтсеррат",
		MT: "Мальта",
		MU: "Мавритус",
		MV: "Мальдив",
		MW: "Малави",
		MX: "Мексик",
		MY: "Малайз",
		MZ: "Мозамбик",
		NA: "Намиби",
		NC: "Шинэ Каледони",
		NE: "Нигер",
		NF: "Норфолк арлууд",
		NG: "Нигери",
		NI: "Никарагуа",
		NL: "Нидерланд",
		NO: "Норвеги",
		NP: "Балба",
		NR: "Науру",
		NU: "Ниуэ",
		NZ: "Шинэ Зеланд",
		OM: "Оман",
		PA: "Панам",
		PE: "Перу",
		PF: "Францын Полинез",
		PG: "Папуа Шинэ Гвиней",
		PH: "Филиппин",
		PK: "Пакистан",
		PL: "Польш",
		PM: "Сэнт Пьер ба Микелон",
		PN: "Питкэрн арлууд",
		PR: "Пуэрто Рико",
		PS: "Палестины нутаг дэвсгэрүүд",
		PT: "Португаль",
		PW: "Палау",
		PY: "Парагвай",
		QA: "Катар",
		RE: "Реюньон",
		RO: "Румын",
		RS: "Серби",
		RU: "Орос",
		RW: "Руанда",
		SA: "Саудын Араб",
		SB: "Соломоны Арлууд",
		SC: "Сейшел",
		SD: "Судан",
		SE: "Швед",
		SG: "Сингапур",
		SH: "Сент Хелена",
		SI: "Словени",
		SJ: "Свалбард ба Ян Майен",
		SK: "Словак",
		SL: "Сьерра-Леоне",
		SM: "Сан-Марино",
		SN: "Сенегал",
		SO: "Сомали",
		SR: "Суринам",
		SS: "Өмнөд Судан",
		ST: "Сан-Томе ба Принсипи",
		SV: "Эль Сальвадор",
		SX: "Синт Мартен",
		SY: "Сири",
		SZ: "Свазиланд",
		TC: "Турк ба Кайкосын Арлууд",
		TD: "Чад",
		TF: "Францын өмнөд газар нутаг",
		TG: "Того",
		TH: "Тайланд",
		TJ: "Тажикистан",
		TK: "Токелау",
		TL: "Тимор-Лесте",
		TM: "Туркменистан",
		TN: "Тунис",
		TO: "Тонга",
		TR: "Турк",
		TT: "Тринидад Тобаго",
		TV: "Тувалу",
		TW: "Тайвань",
		TZ: "Танзани",
		UA: "Украин",
		UG: "Уганда",
		UM: "АНУ-ын тойрсон арлууд",
		US: "Америкийн Нэгдсэн Улс",
		UY: "Уругвай",
		UZ: "Узбекистан",
		VA: "Ватикан хот улс",
		VC: "Сэнт Винсэнт ба Гренадин",
		VE: "Венесуэл",
		VG: "Британийн Виржиний Арлууд",
		VI: "АНУ-ын Виржиний Арлууд",
		VN: "Вьетнам",
		VU: "Вануату",
		WF: "Уоллис ба Футуна",
		WS: "Самоа",
		XK: "Косово",
		YE: "Йемен",
		YT: "Майотте",
		ZA: "Өмнөд Африк тив",
		ZM: "Замби",
		ZW: "Зимбабв",
}
