# Meeting levensfasen registratieve ruimten - Marcel Rietdijk

**datum**: 2022-07-27

**aanwezig**: Marcel Rietdijk, Pano Maria

---

Vraag 1:
Wat is de bedoeling van de status `Ontwerp` bij registratieve ruimten?


Vraag 2:
Wat is de bedoeling van de status `Ingetrokken`?

**Marcel**:

`Ingetrokken` is de reguliere eindstatus van een registratieve ruimte. Bijvoorbeeld in het geval van een gemeentegebied: Wanneer een gemeente ophoudt te bestaan en het gebied overgaat in een nieuw gevormde gemeente, dan krijgt het gemeentegebied wat ophoudt te bestaan de eindstatus `Ingetrokken`. Deze is dan nog wel te vinden in de registratie.

`Ontwerp` is vooral van belang bij door gemeente vast te stellen objecten, zoals woonplaatsen, verblijfsoobjecten, nummeraanduidingen etc. Het is mogelijk minder relevant voor Bestuurlijke gebieden.

Een voorbeeld is dat een gemeente bij het plannen van een nieuwe woonwijk een huisnummerplan maakt. Daarbij worden al wel nummeraandudingen in ontwerp toegewezen aan verblijfsobjecten. De status ontwerp is bedoeld om bronhouders, zoals gemeeten, te ondersteunen bij voorbereiding van besluiten.

**Pano**: Is het zo dat deze ontwerpen met behulp van een toekomstmutatie worden gepositioneerd in de tijd waarin het ontwerp vermoedelijk gerealiseerd zal zijn? Waardoor je dus feitelijk zou kunnen zien hoe de ontworpen werkelijkheid er in de toekomst uit ziet? Of is het de bedoeling dat deze ontwerp status direct geldig is?

**Marcel**: Nee, het is inderdaad de bedoeling dat dit direct in gaat. Zodat je nu al weet dat er een plan is. Het word heel ingewikkeld om te voorspellen wanneer iets werkelijk gerealiseerd of vastgesteld zal worden.

**Pano**: Dus de status `Ontwerp` lijkt niet toepasbaar voor het fenomeen van voorlopige grenzen bij bestuurlijke gebieden.

**Marcel**: Nee dat lijkt niet toepasbaar. Een object met de status `Ontwerp` bestaat in feite nog niet. Het lijkt me niet mogelijk dat een bestaande, nu geldige, Gemeente een Gemeentegebied kan hebben waarvan op dat moment in de tijd de status `Ontwerp` is. Ik denk dat dit grondwettelijk niet mogelijk is. Er is altijd een fingerend en dus `Vastgesteld` gemeentegebied.

De vraag is dus hoe dit juridisch precies zit. Is zo'n voorlopige grens niet al gelijk aan de grens die bij de wet is bepaald? Of stelt de wet dat deze nog nagerekend moet worden na ingang?
Dat laatste lijkt me onwaarschijnlijk. Dus de vraag is dan of dit niet gewoon een Kadaster intern proces is waarbij het bij een "voorlopige grens" eigenlijk al om een `Vastgesteld` gebied gaat, waarbij mogelijk dan nog een reguliere wijziging, of misschien zelfs correcte met terugwerkend kracht plaatsvindt. Het zou goed zijn om dat duidelijk te krijgen.

Daarnaast nog interessant: Is er een formele basis van een mogelijke wijzigingen van een voorlopige grens naar een formele grens. Ofwel, is er in de wet vastgelegd dat dit mag. Anders is dat misschien iets wat als verbeteradvies meegenomen kan worden bij nieuwe herindelingen. Dus het opnemen dat er nog wijzigingen mogelijk zijn op de (voorlopig) vastgestelde grens, en welke dat dan zijn.

Ook nog interessant voor dat laatste. Wat gebeurt er in het gebruik van deze informatie als er een significante wijzigin is van voorlopige grens naar vastgestelde grens. Stel dat iemand op basis van de voorlopige grens bij gemeente A een omgevingsvergunning aanvraagt, maar dat na vaststelling van de grens blijkt dat de vergunning eigenlijk bij gemeente B aangevraagd had moeten worden? Kan dit voorkomen?

Verder nog over de status `Ontwerp`. Ik kan me wel voorstellen dat het interessant kan zijn om het voortraject van bijvoorbeeld een herindeling wel op te kunnen nemen in de registratie. Dan zou een bestuurlijk gebied de status `Ontwerp` kunnen hebben totdat het daadwerkelijk `Vastgesteld`. Het verdient wel de moeite om uit te zoeken of daar ook behoefte aan is.

---

Dan nog een discussie over de status `Afgevoerd`:

**Marcel**: `Afgevoerd` is in twee situaties interessant:
1. Wanneer je een object hebt met de status `Ontwerp`, maar dat ontwerp uiteindelijk niet gerealiseerd wordt.
2. Wanneer er echt een gegevensfout is gemaakt, kan het object de status `Afgevoerd`.

**Pano**: Wij willen dit onderscheid duidelijker aanbrengen in het model door het splitsen van deze status. Daarbij voorzien we op het niveau van de Registratie van het Informatieobject de statussen:
- Actief
- Afgevoerd

En zouden we als object-einstatus de nieuwe status `Niet gerealiseerd` kunnen introduceren. Deze laatste status kan een object met de status `Ontwerp` krijgen wanneer het uiteindelijk niet gerealiseerd wordt. Dit is dan wel een eindstatus. Dat wil zeggen dat een object met die identificatie niet ook nog `Vastgesteld` kan worden. Wel blijft het mogelijk om een object met status `Ontwerp` te wijzigen, waarbij na de wijziging de status nog steeds `Ontwerp` is.

**Marcel**: Op zich klinkt dit goed. Het is wel van belang om dit goed uit te werken zodat het toepasbaar is voor alle objecttypen en dat alle mogelijke uitvalscenario's ook zijn meegenomen. We moeten voorkomen dat er allerlei complexe administratieve handelingen nodig zijn voor bijvoorbeeld een correctie met terugwerkende kracht.

---

Interessant om te lezen:
[Wet algemene regels herindeling](https://wetten.overheid.nl/BWBR0003718/2021-10-01/0)

En een recent voorbeeld
[Wet herindeling gemeenten Amsterdam en Weesp](https://wetten.overheid.nl/BWBR0045261/2021-09-15/0)
