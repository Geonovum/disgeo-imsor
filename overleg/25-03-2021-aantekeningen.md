# Verslag 8e expertgroepbijeenkomst 
25 maart 2021

## Agenda: 
- Informatief: nieuwe consultatieronde Eisen aan de inhoud SOR incl. begrippenkader
- Procesafspraak over hoe we tussen de meetings door discussiëren met elkaar.
- Vervolg modellering levensloop. 
  - Lennart licht toe hoe dit in DSO is gedaan en geeft zijn analyse daarvan. 
  - Pano presenteert hoe SOR levensloop gemodelleerd zou kunnen worden


Aanwezig: Paul, Lennart, Michel, Gabriella, Dick, Niels, Pano, Jan, Annemiek, Rik, en Linda

# Gedetailleerde aantekeningen van het gesprek
-	Er is een nieuwe [consultatieronde voor EMSO]( https://docs.geostandaarden.nl/disgeo/cv-al-emso-20210317/), en een [begrippenkader]( https://begrippen.geostandaarden.nl/sor/nl/) – voorlopig bedoeld als aanvulling op de inhoudelijke hoofdstukken van dit document. 
-	We gaan [github discussies]( https://github.com/Geonovum/disgeo-imsor/discussions) gebruiken 
-	Lennart licht DSO case toe / 2 levensfasen tegelijk. Functioneel hetzelfde ding, maar ene met status ontwerp, andere status vastgesteld. Deze hebben dezelfde identificatie, maar het ontwerp object heeft daarnaast nog een extra identificatie. Samen zijn ze uniek. 
-	Voordeel: je kan meerdere planobjecten tegelijk hebben, met eigen levensloop, die allemaal gecorreleerd zijn met het gerealiseerd object. Het blijft duidelijk over welk object je het hebt. Het planobject is een apart iets, het staat los van het gerealiseerde object. 
-	Nadeel: je moet de identificatie interpreteren als een semantisch iets zodat je ermee kunt werken. Je zou er een expliciete semantische relatie aan kunnen toevoegen.
-	Lennart: In EMSO is de levensfase in elkaar geschoven, wat ook weer voordelen heeft. Probleem is alleen als je 2 gelijktijdige levensfasen hebt, dan moet je weer uitzonderingen maken. Maar in de DSO is dit meestal niet het geval.
-	Annemiek: Maar in de SOR zie je het wel vaker (voorbeeld: agrarisch object dat wordt gesloopt/herbouwd).  
-	Jan v Gelder: [In de SOR] mag identificatie niet veranderen in de levensloop omdat dit de sleutel is waarmee je alle plannen aan elkaar kan verbinden. Er zijn veel parallellen met de asset lifecycle management – daar nog eens naar kijken. 
-	Paul: En je moet wel soepel kunnen omgaan met identificatie – soms is het weer een samenstelling van andere identificaties. In de NEN3610 Identificatie is ‘versie’ hiervoor bedoeld. Lijkt dus erg veel op de status ID van de DSO methode.
-	Nadeel: er zit dan wel een logica in de identificatie, je moet weten hoe je dit moet interpreteren / gebruiken in je software (daarom is het leggen van een expliciete semantische relatie ook belangrijk).
-	Michel: Om deze reden hebben we in de NEN2660 een relatie tussen gepland en gerealiseerd (namelijk: ‘gerealiseerdDoor’).
-	Discussie over identificatie van object in de werkelijkheid of informatieobject. Paul zit op het laatste maar gaat mee met de meerderheid die ids aan objecten wil geven.
-	In NEN 2660 / NTA discussie gehad over voor-nadelen van geplande objecten en werkelijke objecten uit elkaar halen of als 1 object zien (met aparte ID + semantische relatie). Uiteindelijk kan allebei. De vraag is alsnog: wat doe je wanneer je een object hebt dat tegelijkertijd gepland en gerealiseerd is? 
-	Rik: [In eigen ervaring] is scheiden van de levensfase van objecten toch nodig, omdat de processen hierachter ook anders/apart verlopen – het gaat om aparte ingangen die informatie aan elkaar lenen, dus alles moet ook apart gemodelleerd worden. 
-	Lennart: In de DSO dus ook, het kan niet hetzelfde zijn - daar heb je niks aan in je tijdsreisvragen. Je moet dingen dan niet historisch in elkaar schuiven, je moet ze scheiden. Ik ken geen registraties die dit kunnen (=zelfde ID, fasen in elkaar schuiven). Maar volgens mij zag Ruud het ook zo, want als je 2 fasen tegelijkertijd hebt, moet je wel scheiden [volgens EMSO].
-	De vraag is eigenlijk: ga je een uitzondering maken in het model, of ga je het altijd scheiden?
-	Pano: [toch terugkijkend naar de discussie over Ids]: bij informatie objecten wissel je informatie uit die betrekking heeft op iets in de werkelijkheid, bij non-information objecten is dit niet zo. Als je dingen wil linken, moet dat dus op het niveau van informatie objecten. En ik denk dat de levensfasen issue wel sterk gekoppeld is aan de identificatie. 
-	Michel: Dit heeft ook te maken met de open vs closed world assumption: bij een open world kun je niet een universele ID toekennen aan iets in de werkelijkheid (dit kun je alleen in een closed world, mits je de autoriteit hebt). 
-	Niels: En eigenlijk registreer je [bij planobjecten] een voornemen voor het uitgeven van iets (bv: bouwvergunning verlenen voor de bouw).
Pano presenteert SOR levensloop alternatieven

**Oplossing 1: Levensloop in zelfde object**

-	Lennart: [Over oplossing 1] Hoe ga je om met geplande datums? Want als het een functioneel veld is, heb je het over een gepland object of een bestaand object in de toekomst?
-	Rik: Volgens mij is er ook verwarring over de zogenaamde ''plan objecten'': eigenlijk zijn dit plannen die betrekking hebben op gerealiseerde objecten, die dan kunnen veranderen wanneer de plannen worden uitgevoerd. 
-	Pano: Levensloop statussen zijn direct overgenomen uit EMSO.

**Oplossing 2: Planobjecten apart met relatie**

-	Dit maakt wel duidelijk dat de ''planobjecten'' eigenlijk informatie objecten zijn die betrekking hebben op echte documenten, en de andere objecten zijn informatieobjecten over fysieke dingen in de werkelijkheid; je hebt dan een fysieke registratie en een document registratie - dan is het logisch om deze twee te scheiden. Ex: Een verhardingsplan heeft niks te maken met de verharding in de werkelijkheid (want dat plan beschrijft een gepland verhardingsobject, niet het bestaande verhardingsobject zoals in de registratie opgenomen). Met verhardingsplan wordt dus eigenlijk geplande verharding bedoeld. 
-	Nadeel: Dit maakt het gebruik niet makkelijker
-	Pano: We moeten wel oppassen dat [de gekozen oplossing] niet tegen de ontwerpprincipes in gaat - er staat namelijk dat er 1 identificatie moet zijn gedurende de hele levensloop van een object.
-	We kunnen ook interpreteren dat hiermee bedoeld wordt dat je 1 object gedurende zijn levensloop op eenduidige manier moet kunnen volgen.

**Oplossing 3: Planobjecten apart met relatie (+ meerdere alternatieve plannen voor objecten)**

-	Pano: In deze variant [op oplossing 2] geef je met een registratiecontext aan of iets over een plan gaat of niet - ook meer gerelateerd aan de linked data manier van denken. Het wel of niet zijn van een plan wordt eigenlijk een soort context afbakening (bij het aanleveren/uitleveren van informatie). 
-	Lennart: Deze is wel complex, historie loopt meer door elkaar. Eigenlijk zijn het nu alsnog 2 objecten, in het model lijkt het alleen op 1. 
-	Pano: Klopt, je neemt het wel/niet zijn van een ding (van een plan) op in een context. In je bevraging moet je bv meegeven of je geïnteresseerd bent in geplande dingen/of niet. Dit lijkt meer op natuurlijke taal - je moet dan van te voren vastleggen of je het over geplande/gerealiseerde objecten hebt, maar je spreekt altijd over bv een verharding. 
-	Paul: wel heb je meer restricties nodig (je kunt niet een gebouw gepland hebben met plan=true bv)
-	Pano: De belangrijkste vraag: zou je plannen semantisch los willen modelleren; of heb je het over dezelfde objecten?
-	Rik: Uiteindelijk kun je het atomair opbreken: de tweede oplossing doet dit, breekt het op; de laatste maakt een soort aggregatie op semantisch niveau, door gebruik te maken van de context. 
-	Paul: Maar dat is ook gevaarlijk [derde oplossing)], want dan moet je beperkingen opleggen. Binnen je context werkt het, buiten je context niet meer - dan mis je ook standaardisatie.
