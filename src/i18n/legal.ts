import type { Lang } from "./ui";

export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalPage = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export type LegalPageId = "privacy" | "cookies" | "terms";

const updated: Record<Lang, string> = {
  sl: "Zadnja posodobitev: 20. avgust 2026",
  de: "Zuletzt aktualisiert: 20. August 2026",
  ba: "Zadnje ažurirano: 20. avgust 2026",
};

export const legalPages: Record<LegalPageId, Record<Lang, LegalPage>> = {
  privacy: {
    sl: {
      title: "Politika zasebnosti",
      updated: updated.sl,
      intro:
        "V Dalka Systems d.o.o. spoštujemo zasebnost obiskovalcev naše spletne strani. Ta politika pojasnjuje, katere osebne podatke zbiramo, zakaj jih obdelujemo in kakšne pravice imate v zvezi z njimi.",
      sections: [
        {
          heading: "1. Upravljavec podatkov",
          body: [
            "Upravljavec osebnih podatkov je Dalka Systems d.o.o., Dunajska cesta 136, 1000 Ljubljana, Slovenija. Za vsa vprašanja v zvezi z zasebnostjo nas lahko kontaktirate na info@dalkasystems.com.",
          ],
        },
        {
          heading: "2. Kateri podatki se zbirajo",
          body: [
            "Ko izpolnite kontaktni obrazec, zbiramo ime in priimek, e-poštni naslov, zadevo in vsebino sporočila.",
            "Ko izpolnite prijavo na delovno mesto, poleg navedenega zbiramo tudi telefonsko številko, izbrano delovno mesto, delovne izkušnje in priložene dokumente (npr. življenjepis).",
          ],
        },
        {
          heading: "3. Namen in pravna podlaga obdelave",
          body: [
            "Podatke iz kontaktnega obrazca obdelujemo z namenom odgovora na vaše povpraševanje, na podlagi vašega soglasja oziroma za izvedbo ukrepov pred sklenitvijo pogodbe (6. člen (1)(b) in (a) GDPR).",
            "Podatke iz prijave na delovno mesto obdelujemo z namenom izvedbe kadrovskega postopka, na podlagi vaše izrecne privolitve, ki jo podate ob oddaji prijave.",
          ],
        },
        {
          heading: "4. Obdelovalci in prejemniki podatkov",
          body: [
            "Za sprejem in posredovanje obrazcev na našo e-pošto uporabljamo storitev Formspree (Formspree, Inc.), ki deluje kot naš obdelovalec podatkov. Podatki se ne uporabljajo za oglaševanje in se ne prodajajo tretjim osebam.",
          ],
        },
        {
          heading: "5. Hramba podatkov",
          body: [
            "Podatke iz povpraševanj hranimo toliko časa, kolikor je potrebno za obravnavo vašega povpraševanja, nato pa jih izbrišemo, razen če zakon zahteva daljšo hrambo. Podatke prijav na delovna mesta hranimo do zaključka kadrovskega postopka oziroma dokler ne prekličete privolitve.",
          ],
        },
        {
          heading: "6. Vaše pravice",
          body: [
            "V skladu z GDPR imate pravico do dostopa, popravka, izbrisa in omejitve obdelave svojih podatkov, pravico do ugovora ter pravico do prenosljivosti podatkov. Privolitev lahko kadarkoli prekličete, ne da bi to vplivalo na zakonitost predhodne obdelave.",
            "Če menite, da vaši podatki niso obdelani skladno z zakonodajo, imate pravico do pritožbe pri Informacijskem pooblaščencu Republike Slovenije.",
          ],
        },
        {
          heading: "7. Kontakt",
          body: ["Za vsa vprašanja v zvezi s to politiko nas kontaktirajte na info@dalkasystems.com."],
        },
      ],
    },
    de: {
      title: "Datenschutzerklärung",
      updated: updated.de,
      intro:
        "Dalka Systems d.o.o. respektiert die Privatsphäre der Besucher unserer Website. Diese Erklärung beschreibt, welche personenbezogenen Daten wir erheben, zu welchem Zweck wir sie verarbeiten und welche Rechte Ihnen zustehen.",
      sections: [
        {
          heading: "1. Verantwortlicher",
          body: [
            "Verantwortlicher für die Verarbeitung personenbezogener Daten ist Dalka Systems d.o.o., Dunajska cesta 136, 1000 Ljubljana, Slowenien. Bei Fragen zum Datenschutz erreichen Sie uns unter info@dalkasystems.com.",
          ],
        },
        {
          heading: "2. Welche Daten wir erheben",
          body: [
            "Beim Ausfüllen des Kontaktformulars erheben wir Vor- und Nachname, E-Mail-Adresse, Betreff und Nachrichteninhalt.",
            "Bei einer Bewerbung erheben wir zusätzlich Telefonnummer, die gewählte Position, Berufserfahrung sowie beigefügte Dokumente (z. B. Lebenslauf).",
          ],
        },
        {
          heading: "3. Zweck und Rechtsgrundlage der Verarbeitung",
          body: [
            "Daten aus dem Kontaktformular verarbeiten wir zur Beantwortung Ihrer Anfrage, auf Grundlage Ihrer Einwilligung bzw. zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. a und b DSGVO).",
            "Bewerbungsdaten verarbeiten wir zur Durchführung des Auswahlverfahrens, auf Grundlage Ihrer ausdrücklichen Einwilligung bei Absenden der Bewerbung.",
          ],
        },
        {
          heading: "4. Auftragsverarbeiter und Empfänger",
          body: [
            "Für den Empfang und die Weiterleitung der Formulare an unsere E-Mail nutzen wir den Dienst Formspree (Formspree, Inc.) als Auftragsverarbeiter. Die Daten werden nicht zu Werbezwecken genutzt und nicht an Dritte verkauft.",
          ],
        },
        {
          heading: "5. Speicherdauer",
          body: [
            "Anfragedaten speichern wir so lange, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist, danach löschen wir sie, sofern keine gesetzliche Aufbewahrungspflicht besteht. Bewerbungsdaten speichern wir bis zum Abschluss des Auswahlverfahrens oder bis zum Widerruf Ihrer Einwilligung.",
          ],
        },
        {
          heading: "6. Ihre Rechte",
          body: [
            "Gemäß DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie ein Widerspruchs- und Datenübertragbarkeitsrecht. Eine erteilte Einwilligung können Sie jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung berührt wird.",
            "Sollten Sie der Ansicht sein, dass Ihre Daten nicht rechtmäßig verarbeitet werden, haben Sie das Recht auf Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde.",
          ],
        },
        {
          heading: "7. Kontakt",
          body: ["Bei Fragen zu dieser Datenschutzerklärung erreichen Sie uns unter info@dalkasystems.com."],
        },
      ],
    },
    ba: {
      title: "Politika privatnosti",
      updated: updated.ba,
      intro:
        "Dalka Systems d.o.o. poštuje privatnost posjetitelja naše web stranice. Ova politika objašnjava koje osobne podatke prikupljamo, u koju svrhu ih obrađujemo i koja prava imate u vezi s njima.",
      sections: [
        {
          heading: "1. Voditelj obrade podataka",
          body: [
            "Voditelj obrade osobnih podataka je Dalka Systems d.o.o., Dunajska cesta 136, 1000 Ljubljana, Slovenija. Za sva pitanja u vezi s privatnošću kontaktirajte nas na info@dalkasystems.com.",
          ],
        },
        {
          heading: "2. Koji se podaci prikupljaju",
          body: [
            "Prilikom popunjavanja kontakt obrasca prikupljamo ime i prezime, e-mail adresu, predmet i sadržaj poruke.",
            "Prilikom prijave za posao dodatno prikupljamo broj telefona, odabrano radno mjesto, radno iskustvo i priložene dokumente (npr. životopis).",
          ],
        },
        {
          heading: "3. Svrha i pravna osnova obrade",
          body: [
            "Podatke iz kontakt obrasca obrađujemo radi odgovora na vaš upit, na temelju vašeg pristanka odnosno radi poduzimanja radnji prije sklapanja ugovora (čl. 6 st. 1 (a) i (b) GDPR-a).",
            "Podatke iz prijave za posao obrađujemo radi provedbe postupka odabira kandidata, na temelju vaše izričite privole koju dajete prilikom slanja prijave.",
          ],
        },
        {
          heading: "4. Izvršitelji obrade i primatelji podataka",
          body: [
            "Za zaprimanje i prosljeđivanje obrazaca na našu e-poštu koristimo uslugu Formspree (Formspree, Inc.), koja djeluje kao naš izvršitelj obrade. Podaci se ne koriste u marketinške svrhe i ne prodaju trećim stranama.",
          ],
        },
        {
          heading: "5. Rok čuvanja podataka",
          body: [
            "Podatke iz upita čuvamo onoliko dugo koliko je potrebno za rješavanje vašeg upita, nakon čega ih brišemo, osim ako je zakonom propisano duže čuvanje. Podatke iz prijava za posao čuvamo do završetka postupka odabira ili do opoziva vaše privole.",
          ],
        },
        {
          heading: "6. Vaša prava",
          body: [
            "Sukladno GDPR-u imate pravo na pristup, ispravak, brisanje i ograničenje obrade svojih podataka, pravo na prigovor te pravo na prenosivost podataka. Privolu možete opozvati u bilo kojem trenutku, bez utjecaja na zakonitost obrade prije opoziva.",
            "Ako smatrate da se vaši podaci ne obrađuju u skladu sa zakonom, imate pravo podnijeti pritužbu nadležnom tijelu za zaštitu osobnih podataka.",
          ],
        },
        {
          heading: "7. Kontakt",
          body: ["Za sva pitanja u vezi s ovom politikom kontaktirajte nas na info@dalkasystems.com."],
        },
      ],
    },
  },
  cookies: {
    sl: {
      title: "Politika piškotkov",
      updated: updated.sl,
      intro:
        "Ta stran pojasnjuje, kako spletna stran dalkasystems.com uporablja piškotke in podobne tehnologije.",
      sections: [
        {
          heading: "1. Kaj so piškotki",
          body: [
            "Piškotki so majhne besedilne datoteke, ki jih spletna stran shrani v vaš brskalnik in omogočajo, da si stran zapomni informacije o vašem obisku.",
          ],
        },
        {
          heading: "2. Piškotki, ki jih uporabljamo",
          body: [
            "Naša spletna stran sama po sebi ne uporablja lastnih analitičnih ali oglaševalskih piškotkov.",
            "Kontaktni obrazec in obrazec za prijavo na delovno mesto obdeluje zunanji ponudnik Formspree, ki lahko za delovanje obrazca in zaščito pred zlorabo (npr. neželeno pošto) uporabi nujno potrebne piškotke tretjih oseb, ko oddate obrazec.",
          ],
        },
        {
          heading: "3. Upravljanje piškotkov",
          body: [
            "Piškotke lahko kadarkoli izbrišete ali onemogočite v nastavitvah svojega brskalnika. Upoštevajte, da lahko onemogočanje nujnih piškotkov vpliva na delovanje obrazcev na strani.",
          ],
        },
        {
          heading: "4. Kontakt",
          body: ["Za vprašanja o piškotkih nas kontaktirajte na info@dalkasystems.com."],
        },
      ],
    },
    de: {
      title: "Cookie-Richtlinie",
      updated: updated.de,
      intro:
        "Diese Seite erklärt, wie die Website dalkasystems.com Cookies und ähnliche Technologien einsetzt.",
      sections: [
        {
          heading: "1. Was sind Cookies",
          body: [
            "Cookies sind kleine Textdateien, die von einer Website in Ihrem Browser gespeichert werden und es der Seite ermöglichen, sich Informationen über Ihren Besuch zu merken.",
          ],
        },
        {
          heading: "2. Von uns verwendete Cookies",
          body: [
            "Unsere Website selbst verwendet keine eigenen Analyse- oder Werbe-Cookies.",
            "Das Kontakt- und das Bewerbungsformular werden vom externen Anbieter Formspree verarbeitet, der beim Absenden des Formulars unbedingt erforderliche Cookies von Drittanbietern zum Betrieb und Missbrauchsschutz (z. B. Spam) einsetzen kann.",
          ],
        },
        {
          heading: "3. Verwaltung von Cookies",
          body: [
            "Sie können Cookies jederzeit in den Einstellungen Ihres Browsers löschen oder deaktivieren. Bitte beachten Sie, dass die Deaktivierung notwendiger Cookies die Funktion der Formulare auf dieser Seite beeinträchtigen kann.",
          ],
        },
        {
          heading: "4. Kontakt",
          body: ["Bei Fragen zu Cookies erreichen Sie uns unter info@dalkasystems.com."],
        },
      ],
    },
    ba: {
      title: "Politika kolačića",
      updated: updated.ba,
      intro:
        "Ova stranica objašnjava kako web stranica dalkasystems.com koristi kolačiće i slične tehnologije.",
      sections: [
        {
          heading: "1. Što su kolačići",
          body: [
            "Kolačići su male tekstualne datoteke koje web stranica pohranjuje u vaš preglednik i omogućuju stranici da zapamti informacije o vašem posjetu.",
          ],
        },
        {
          heading: "2. Kolačići koje koristimo",
          body: [
            "Naša web stranica sama po sebi ne koristi vlastite analitičke ili oglašivačke kolačiće.",
            "Kontakt obrazac i obrazac za prijavu za posao obrađuje vanjski pružatelj usluge Formspree, koji prilikom slanja obrasca može koristiti nužne kolačiće trećih strana radi funkcioniranja obrasca i zaštite od zlouporabe (npr. neželjena pošta).",
          ],
        },
        {
          heading: "3. Upravljanje kolačićima",
          body: [
            "Kolačiće možete u bilo kojem trenutku izbrisati ili onemogućiti u postavkama svog preglednika. Imajte na umu da onemogućavanje nužnih kolačića može utjecati na rad obrazaca na stranici.",
          ],
        },
        {
          heading: "4. Kontakt",
          body: ["Za pitanja o kolačićima kontaktirajte nas na info@dalkasystems.com."],
        },
      ],
    },
  },
  terms: {
    sl: {
      title: "Pogoji uporabe",
      updated: updated.sl,
      intro:
        "Ti pogoji urejajo uporabo spletne strani dalkasystems.com. Z uporabo strani se strinjate s temi pogoji.",
      sections: [
        {
          heading: "1. Vsebina strani",
          body: [
            "Vse besedilo, slike, logotipi in druga vsebina na tej strani so last podjetja Dalka Systems d.o.o. ali njegovih licencodajalcev in so zaščiteni z avtorskimi in drugimi pravicami intelektualne lastnine. Vsebine ni dovoljeno razmnoževati ali distribuirati brez našega predhodnega pisnega soglasja.",
          ],
        },
        {
          heading: "2. Namen informacij",
          body: [
            "Informacije na tej strani so zgolj informativne narave in ne pomenijo zavezujoče ponudbe. Za konkretno ponudbo ali dogovor o storitvah nas kontaktirajte prek kontaktnega obrazca ali navedenih kontaktnih podatkov.",
            "Trudimo se, da so informacije na strani točne in ažurne, vendar ne jamčimo za popolnost ali brezhibnost vsebine.",
          ],
        },
        {
          heading: "3. Omejitev odgovornosti",
          body: [
            "Dalka Systems d.o.o. ne odgovarja za morebitno škodo, ki bi nastala zaradi uporabe ali nezmožnosti uporabe te spletne strani, v obsegu, kot to dopušča veljavna zakonodaja.",
          ],
        },
        {
          heading: "4. Povezave do drugih strani",
          body: [
            "Stran lahko vsebuje povezave do zunanjih spletnih strani. Za vsebino in delovanje teh strani ne odgovarjamo.",
          ],
        },
        {
          heading: "5. Veljavno pravo",
          body: [
            "Za te pogoje uporabe velja pravo Republike Slovenije. Morebitne spore rešuje pristojno sodišče v Ljubljani.",
          ],
        },
        {
          heading: "6. Spremembe pogojev",
          body: ["Te pogoje lahko kadarkoli spremenimo. Veljavna različica je vedno objavljena na tej strani."],
        },
        {
          heading: "7. Kontakt",
          body: ["Za vprašanja o teh pogojih nas kontaktirajte na info@dalkasystems.com."],
        },
      ],
    },
    de: {
      title: "Nutzungsbedingungen",
      updated: updated.de,
      intro:
        "Diese Bedingungen regeln die Nutzung der Website dalkasystems.com. Durch die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.",
      sections: [
        {
          heading: "1. Inhalte der Website",
          body: [
            "Sämtliche Texte, Bilder, Logos und sonstigen Inhalte dieser Website sind Eigentum von Dalka Systems d.o.o. oder ihrer Lizenzgeber und urheber- sowie immaterialgüterrechtlich geschützt. Eine Vervielfältigung oder Verbreitung ohne unsere vorherige schriftliche Zustimmung ist nicht gestattet.",
          ],
        },
        {
          heading: "2. Zweck der Informationen",
          body: [
            "Die Informationen auf dieser Website dienen ausschließlich der allgemeinen Information und stellen kein verbindliches Angebot dar. Für ein konkretes Angebot oder eine Leistungsvereinbarung kontaktieren Sie uns bitte über das Kontaktformular oder die angegebenen Kontaktdaten.",
            "Wir bemühen uns um Richtigkeit und Aktualität der Inhalte, übernehmen jedoch keine Gewähr für deren Vollständigkeit oder Fehlerfreiheit.",
          ],
        },
        {
          heading: "3. Haftungsbeschränkung",
          body: [
            "Dalka Systems d.o.o. haftet, soweit gesetzlich zulässig, nicht für Schäden, die aus der Nutzung oder Nichtnutzbarkeit dieser Website entstehen.",
          ],
        },
        {
          heading: "4. Links zu anderen Websites",
          body: [
            "Diese Website kann Links zu externen Websites enthalten. Für die Inhalte und Funktionsweise dieser Seiten übernehmen wir keine Verantwortung.",
          ],
        },
        {
          heading: "5. Anwendbares Recht",
          body: [
            "Für diese Nutzungsbedingungen gilt das Recht der Republik Slowenien. Für etwaige Streitigkeiten ist das zuständige Gericht in Ljubljana zuständig.",
          ],
        },
        {
          heading: "6. Änderungen der Bedingungen",
          body: ["Wir können diese Bedingungen jederzeit ändern. Die jeweils gültige Fassung ist stets auf dieser Seite veröffentlicht."],
        },
        {
          heading: "7. Kontakt",
          body: ["Bei Fragen zu diesen Bedingungen erreichen Sie uns unter info@dalkasystems.com."],
        },
      ],
    },
    ba: {
      title: "Uvjeti korištenja",
      updated: updated.ba,
      intro:
        "Ovi uvjeti uređuju korištenje web stranice dalkasystems.com. Korištenjem stranice prihvaćate ove uvjete.",
      sections: [
        {
          heading: "1. Sadržaj stranice",
          body: [
            "Svi tekstovi, slike, logotipi i drugi sadržaji na ovoj stranici vlasništvo su tvrtke Dalka Systems d.o.o. ili njezinih davatelja licence i zaštićeni su autorskim i drugim pravima intelektualnog vlasništva. Sadržaj se ne smije umnožavati ili distribuirati bez našeg prethodnog pisanog pristanka.",
          ],
        },
        {
          heading: "2. Svrha informacija",
          body: [
            "Informacije na ovoj stranici isključivo su informativne prirode i ne predstavljaju obvezujuću ponudu. Za konkretnu ponudu ili dogovor o uslugama kontaktirajte nas putem kontakt obrasca ili navedenih kontakt podataka.",
            "Nastojimo da su informacije na stranici točne i ažurne, no ne jamčimo potpunost ili besprijekornost sadržaja.",
          ],
        },
        {
          heading: "3. Ograničenje odgovornosti",
          body: [
            "Dalka Systems d.o.o. ne odgovara za eventualnu štetu nastalu korištenjem ili nemogućnošću korištenja ove web stranice, u mjeri u kojoj to dopušta važeći zakon.",
          ],
        },
        {
          heading: "4. Poveznice na druge stranice",
          body: [
            "Stranica može sadržavati poveznice na vanjske web stranice. Ne odgovaramo za sadržaj i funkcioniranje tih stranica.",
          ],
        },
        {
          heading: "5. Mjerodavno pravo",
          body: [
            "Na ove uvjete korištenja primjenjuje se pravo Republike Slovenije. Eventualne sporove rješava nadležni sud u Ljubljani.",
          ],
        },
        {
          heading: "6. Izmjene uvjeta",
          body: ["Ove uvjete možemo izmijeniti u bilo kojem trenutku. Važeća verzija uvijek je objavljena na ovoj stranici."],
        },
        {
          heading: "7. Kontakt",
          body: ["Za pitanja o ovim uvjetima kontaktirajte nas na info@dalkasystems.com."],
        },
      ],
    },
  },
};
