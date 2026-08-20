export const languages = {
  ba: "BiH / Hr / Srb",
  de: "Deutsch",
  sl: "Slovenščina",
} as const;

export const defaultLang = "sl" as const;

export type Lang = keyof typeof languages;

export const ui = {
  sl: {
    "nav.home": "Domov",
    "nav.services": "Storitve",
    "nav.careers": "Kariera",
    "nav.contact": "Kontakt",

    "home.hero.title": "Električne inštalacije, ki jim lahko zaupate",
    "home.hero.subtitle":
      "Od načrtovanja do izvedbe — strokovne električne rešitve za stanovanjske, poslovne in industrijske objekte.",
    "home.hero.ctaPrimary": "Kontaktirajte nas",
    "home.hero.ctaSecondary": "Naše storitve",

    "home.intro.title": "O podjetju",
    "home.intro.body":
      "Smo slovensko podjetje, specializirano za električne inštalacije. Naša ekipa združuje izkušene elektroinštalaterje, projektante in nadzornike, ki skrbno izvajajo vsak projekt — od enostavnih popravil do kompleksnih industrijskih sistemov.",

    "home.values.title": "Zakaj nas izbrati",
    "home.values.quality.title": "Kakovost",
    "home.values.quality.body":
      "Uporabljamo certificirano opremo in materiale, vsa dela pa izvajamo v skladu z veljavnimi standardi.",
    "home.values.safety.title": "Varnost",
    "home.values.safety.body":
      "Varnost na delovišču in dolgoročna varnost vaših inštalacij sta na prvem mestu.",
    "home.values.speed.title": "Hitrost odziva",
    "home.values.speed.body":
      "Hitro pripravimo ponudbo in jasno določimo termine — brez presenečenj.",

    "services.title": "Naše storitve",
    "services.subtitle": "Pokrivamo celoten obseg električnih del.",
    "services.list.residential.title": "Stanovanjske inštalacije",
    "services.list.residential.body":
      "Inštalacije v novogradnjah, prenove, dograditve in popravila v stanovanjih in hišah.",
    "services.list.commercial.title": "Poslovni objekti",
    "services.list.commercial.body":
      "Inštalacije v pisarnah, trgovinah in skladiščih, vključno s strukturiranim ožičenjem.",
    "services.list.industrial.title": "Industrijske inštalacije",
    "services.list.industrial.body":
      "Močnostne instalacije, razdelilne omare, krmilne sisteme in vzdrževanje proizvodnih linij.",
    "services.list.smart.title": "Pametni dom",
    "services.list.smart.body":
      "Rešitve za pametno razsvetljavo, senčenje, ogrevanje in nadzor dostopa.",
    "services.list.maintenance.title": "Servis in vzdrževanje",
    "services.list.maintenance.body":
      "Periodični pregledi, meritve in odprava napak — z dokumentacijo, ki ustreza zahtevam zavarovalnic.",

    "careers.title": "Kariera",
    "careers.subtitle":
      "Iščemo kolege, ki delajo natančno in radi rešujejo izzive.",
    "careers.empty":
      "Trenutno nimamo objavljenih prostih delovnih mest, vendar zmeraj sprejemamo ponudbe za sodelovanje — pošljite nam svojo prijavo.",
    "careers.openPositions": "Prosta delovna mesta",
    "careers.applyFor": "Prijavi se",
    "careers.applyTitle": "Prijava na delovno mesto",
    "careers.applyIntro":
      "Izpolnite spodnji obrazec in pripnite svoj življenjepis. Odgovor pošljemo običajno v nekaj delovnih dneh.",
    "careers.form.name": "Ime in priimek",
    "careers.form.email": "E-pošta",
    "careers.form.phone": "Telefon",
    "careers.form.position": "Delovno mesto",
    "careers.form.position.placeholder": "Izberite delovno mesto",
    "careers.form.experience": "Delovne izkušnje",
    "careers.form.message": "Sporočilo",
    "careers.form.consent":
      "Soglašam z obdelavo osebnih podatkov za potrebe izbirnega postopka.",
    "careers.form.submit": "Pošlji prijavo",

    "contact.title": "Kontakt",
    "contact.subtitle": "Z veseljem se pogovorimo o vašem projektu.",
    "contact.address.label": "Naslov",
    "contact.phone.label": "Telefon",
    "contact.email.label": "E-pošta",
    "contact.hours.label": "Delovni čas",
    "contact.hours.value": "pon – pet, 8:00 – 16:00",
    "contact.form.title": "Pišite nam",
    "contact.form.name": "Ime in priimek",
    "contact.form.email": "E-pošta",
    "contact.form.subject": "Zadeva",
    "contact.form.message": "Sporočilo",
    "contact.form.submit": "Pošlji sporočilo",

    "form.success.title": "Hvala!",
    "form.success.body":
      "Vaše sporočilo smo prejeli in se vam bomo kmalu oglasili.",
    "form.required": "obvezno",

    "footer.tagline": "Električne inštalacije · Pametne rešitve · Avtomatizacija",
    "footer.rights": "Vse pravice pridržane.",
    "footer.privacyPolicy": "Politika zasebnosti",
    "footer.cookiesPolicy": "Politika piškotkov",
    "footer.termsOfUse": "Pogoji uporabe",

    "cookies.message":
      "Ta stran uporablja le nujno potrebne piškotke. Več o tem si preberite v naši",
    "cookies.linkLabel": "politiki piškotkov",
    "cookies.accept": "Sprejmi",
    "cookies.reject": "Zavrni",
  },

  de: {
    "nav.home": "Start",
    "nav.services": "Leistungen",
    "nav.careers": "Karriere",
    "nav.contact": "Kontakt",

    "home.hero.title": "Elektroinstallationen, auf die Sie sich verlassen können",
    "home.hero.subtitle":
      "Von der Planung bis zur Ausführung — professionelle Elektrolösungen für Wohn-, Gewerbe- und Industrieprojekte.",
    "home.hero.ctaPrimary": "Kontaktieren Sie uns",
    "home.hero.ctaSecondary": "Unsere Leistungen",

    "home.intro.title": "Über uns",
    "home.intro.body":
      "Wir sind ein slowenisches Unternehmen mit Spezialisierung auf Elektroinstallationen. Unser Team aus erfahrenen Elektrikern, Planern und Bauleitern bearbeitet jeden Auftrag mit Sorgfalt — von einfachen Reparaturen bis hin zu komplexen Industrieanlagen.",

    "home.values.title": "Warum wir",
    "home.values.quality.title": "Qualität",
    "home.values.quality.body":
      "Wir verwenden zertifizierte Geräte und Materialien und arbeiten nach geltenden Normen.",
    "home.values.safety.title": "Sicherheit",
    "home.values.safety.body":
      "Baustellensicherheit und die langfristige Sicherheit Ihrer Anlage stehen an erster Stelle.",
    "home.values.speed.title": "Schnelle Reaktion",
    "home.values.speed.body":
      "Schnelle Angebote und klare Termine — ohne Überraschungen.",

    "services.title": "Unsere Leistungen",
    "services.subtitle": "Wir decken das gesamte Spektrum elektrotechnischer Arbeiten ab.",
    "services.list.residential.title": "Wohninstallationen",
    "services.list.residential.body":
      "Neubau, Sanierung, Erweiterungen und Reparaturen in Wohnungen und Häusern.",
    "services.list.commercial.title": "Gewerbeobjekte",
    "services.list.commercial.body":
      "Installationen in Büros, Geschäften und Lagern, einschließlich strukturierter Verkabelung.",
    "services.list.industrial.title": "Industrieinstallationen",
    "services.list.industrial.body":
      "Starkstrominstallationen, Schaltschränke, Steuerungssysteme und Wartung von Produktionslinien.",
    "services.list.smart.title": "Smart Home",
    "services.list.smart.body":
      "Lösungen für intelligente Beleuchtung, Beschattung, Heizungssteuerung und Zutrittskontrolle.",
    "services.list.maintenance.title": "Service & Wartung",
    "services.list.maintenance.body":
      "Periodische Prüfungen, Messungen und Fehlerbehebung — mit Dokumentation gemäß den Anforderungen von Versicherern.",

    "careers.title": "Karriere",
    "careers.subtitle":
      "Wir suchen Kolleginnen und Kollegen, die sorgfältig arbeiten und gerne Probleme lösen.",
    "careers.empty":
      "Aktuell haben wir keine offenen Stellen, freuen uns jedoch jederzeit über Initiativbewerbungen.",
    "careers.openPositions": "Offene Stellen",
    "careers.applyFor": "Bewerben",
    "careers.applyTitle": "Bewerbung",
    "careers.applyIntro":
      "Füllen Sie das Formular aus und fügen Sie Ihren Lebenslauf bei. Wir antworten in der Regel innerhalb weniger Werktage.",
    "careers.form.name": "Vor- und Nachname",
    "careers.form.email": "E-Mail",
    "careers.form.phone": "Telefon",
    "careers.form.position": "Position",
    "careers.form.position.placeholder": "Position auswählen",
    "careers.form.experience": "Berufserfahrung",
    "careers.form.message": "Nachricht",
    "careers.form.consent":
      "Ich willige in die Verarbeitung meiner personenbezogenen Daten zum Zweck des Auswahlverfahrens ein.",
    "careers.form.submit": "Bewerbung senden",

    "contact.title": "Kontakt",
    "contact.subtitle": "Wir sprechen gerne über Ihr Projekt.",
    "contact.address.label": "Adresse",
    "contact.phone.label": "Telefon",
    "contact.email.label": "E-Mail",
    "contact.hours.label": "Öffnungszeiten",
    "contact.hours.value": "Mo – Fr, 8:00 – 16:00",
    "contact.form.title": "Schreiben Sie uns",
    "contact.form.name": "Vor- und Nachname",
    "contact.form.email": "E-Mail",
    "contact.form.subject": "Betreff",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht senden",

    "form.success.title": "Vielen Dank!",
    "form.success.body":
      "Wir haben Ihre Nachricht erhalten und melden uns in Kürze.",
    "form.required": "Pflichtfeld",

    "footer.tagline": "Elektro · Smart-Lösungen · Automatisierung",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacyPolicy": "Datenschutzerklärung",
    "footer.cookiesPolicy": "Cookie-Richtlinie",
    "footer.termsOfUse": "Nutzungsbedingungen",

    "cookies.message":
      "Diese Website verwendet nur unbedingt erforderliche Cookies. Mehr dazu in unserer",
    "cookies.linkLabel": "Cookie-Richtlinie",
    "cookies.accept": "Akzeptieren",
    "cookies.reject": "Ablehnen",
  },

  ba: {
    "nav.home": "Početna",
    "nav.services": "Usluge",
    "nav.careers": "Karijera",
    "nav.contact": "Kontakt",

    "home.hero.title": "Električne instalacije na koje se možete osloniti",
    "home.hero.subtitle":
      "Od projektiranja do izvedbe — profesionalna električna rješenja za stambene, poslovne i industrijske objekte.",
    "home.hero.ctaPrimary": "Kontaktirajte nas",
    "home.hero.ctaSecondary": "Naše usluge",

    "home.intro.title": "O nama",
    "home.intro.body":
      "Slovensko smo poduzeće specijalizirano za električne instalacije. Naš tim okuplja iskusne elektroinstalatere, projektante i nadzornike koji svaki posao izvode pažljivo — od jednostavnih popravaka do složenih industrijskih sustava.",

    "home.values.title": "Zašto baš mi",
    "home.values.quality.title": "Kvaliteta",
    "home.values.quality.body":
      "Koristimo certificiranu opremu i materijale te radimo prema važećim standardima.",
    "home.values.safety.title": "Sigurnost",
    "home.values.safety.body":
      "Sigurnost na gradilištu i dugoročna sigurnost vaše instalacije na prvom su mjestu.",
    "home.values.speed.title": "Brz odziv",
    "home.values.speed.body":
      "Brze ponude i jasni rokovi — bez iznenađenja u tijeku radova.",

    "services.title": "Naše usluge",
    "services.subtitle": "Pokrivamo cijeli spektar elektroinstalaterskih radova.",
    "services.list.residential.title": "Stambene instalacije",
    "services.list.residential.body":
      "Novogradnja, obnove, dogradnje i popravci u stanovima i kućama.",
    "services.list.commercial.title": "Poslovni objekti",
    "services.list.commercial.body":
      "Instalacije u uredima, trgovinama i skladištima, uključujući strukturno kabliranje.",
    "services.list.industrial.title": "Industrijske instalacije",
    "services.list.industrial.body":
      "Energetske instalacije, razvodni ormari, upravljački sustavi i održavanje proizvodnih linija.",
    "services.list.smart.title": "Pametna kuća",
    "services.list.smart.body":
      "Rješenja za pametnu rasvjetu, sjenila, grijanje i kontrolu pristupa.",
    "services.list.maintenance.title": "Servis i održavanje",
    "services.list.maintenance.body":
      "Periodični pregledi, mjerenja i otklanjanje kvarova — s dokumentacijom prema zahtjevima osiguratelja.",

    "careers.title": "Karijera",
    "careers.subtitle":
      "Tražimo kolege koji rade pažljivo i vole rješavati izazove.",
    "careers.empty":
      "Trenutno nemamo otvorenih radnih mjesta, ali uvijek primamo otvorene prijave — pošaljite nam svoju.",
    "careers.openPositions": "Otvorena radna mjesta",
    "careers.applyFor": "Prijavi se",
    "careers.applyTitle": "Prijava za posao",
    "careers.applyIntro":
      "Ispunite obrazac i priložite životopis. Obično odgovaramo u roku nekoliko radnih dana.",
    "careers.form.name": "Ime i prezime",
    "careers.form.email": "E-pošta",
    "careers.form.phone": "Telefon",
    "careers.form.position": "Radno mjesto",
    "careers.form.position.placeholder": "Odaberite radno mjesto",
    "careers.form.experience": "Radno iskustvo",
    "careers.form.message": "Poruka",
    "careers.form.consent":
      "Pristajem na obradu osobnih podataka u svrhu provedbe postupka odabira.",
    "careers.form.submit": "Pošalji prijavu",

    "contact.title": "Kontakt",
    "contact.subtitle": "Rado ćemo razgovarati o vašem projektu.",
    "contact.address.label": "Adresa",
    "contact.phone.label": "Telefon",
    "contact.email.label": "E-pošta",
    "contact.hours.label": "Radno vrijeme",
    "contact.hours.value": "pon – pet, 8:00 – 16:00",
    "contact.form.title": "Pišite nam",
    "contact.form.name": "Ime i prezime",
    "contact.form.email": "E-pošta",
    "contact.form.subject": "Predmet",
    "contact.form.message": "Poruka",
    "contact.form.submit": "Pošalji poruku",

    "form.success.title": "Hvala!",
    "form.success.body":
      "Vašu poruku smo zaprimili. Javit ćemo vam se uskoro.",
    "form.required": "obavezno",

    "footer.tagline": "Električne instalacije · Pametna rješenja · Automatizacija",
    "footer.rights": "Sva prava pridržana.",
    "footer.privacyPolicy": "Politika privatnosti",
    "footer.cookiesPolicy": "Politika kolačića",
    "footer.termsOfUse": "Uvjeti korištenja",

    "cookies.message":
      "Ova stranica koristi samo nužno potrebne kolačiće. Više o tome pročitajte u našoj",
    "cookies.linkLabel": "politici kolačića",
    "cookies.accept": "Prihvati",
    "cookies.reject": "Odbij",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
