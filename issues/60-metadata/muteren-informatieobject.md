# Uitwerking over het muteren van informatieobjecten
Door Lennart via mail verstuurd, ter referentie hier opgeslagen. 

Aanleiding: overleg 17 over de metadata registratiegegevens, 

Vraag: als bronhouder wil ik weten wanneer een informatieobject muteert. Deze muteert uiteraard als een object muteert, maar in welke andere situaties muteert een informatieobject ook?

Denk aan: 

- Als een relatie tussen een object A naar metadata van A loopt (het object kent zijn eigen metadata) 
- Als een relatie tussen een metadata van A naar object A naar loopt (de metadata weet over welk object de metadata gaat) 
- Als een relatie tussen twee objecten van A naar B loopt en ook andersom van B naar A loopt om semantiek beide kanten op te beschrijven. Dit laatste is ook relevant voor het meeleveren van registratie gegevens bij het uitleveren van informatieobjecten (bij A of bij B zitten geen registatie gegevens in het informatieobject) 

Muteert het informatieobject dan? Zo ja, willen we dit wel. 

Alsmede, hoe kan een bronhouder weten wat wel en niet muteert, oftewel moet leiden tot nieuwe uitwisseling van informatie naar een registatie of LV toe. Hoe kan je dit herkennen/zien in de IMSOR specificatie.  

## Toelichting waarom dit uit te zoeken

Vraag: als bronhouder wil ik weten wanneer een informatieobject muteert. Deze muteert uiteraard als een object muteert, maar in welke andere situaties muteert een informatieobject ook?

- In het bijzonder wanneer het andere metadata betreft dan de metadata die altijd 1 op 1 mee muteert wanneer een kenmerk van een object muteert. Want als het wel 1 op 1 is, ontstaan geen implementatie issues. 
- Anders gezegd, kunnen de registratie gegevens los van de objectgegevens muteren en ken het dus eigen historie. Dit is het geval wanneer metadata registratie gegevens meer gegevens bevat dan alleen tijd-informatie. Zoals bv. een relatie naar bronhouder. De relatie naar bronhouder, mag deze wijzigen als het object zelf niet wijzigt.  

Achterliggende aanleiding: 

- Ik denk dat de informatiemodellering geoptimaliseerd kan worden zodanig dat het informatiemodel en het registratie model dichter bij elkaar blijven liggen. Dit is een andere insteek dan informatie modelleren vooral voor gebruik. 
- Ik denk dat het muteren van metadata niet zou moeten leiden tot een nieuwe versie van een informatie object. Dat registratie dus geen gegevens zou mogen hebben die kunnen muteren (als criterium). 

(een informatie object is een object + zijn registratie gegevens (metadata)).

We bevestigen: 
- Het informatiemodel voor informatie uitwisseling betreft zowel aanleveren als uitleveren. 
- Het informatiemodel voor informatie uitwisseling is wat anders dan een intern (in the black box) registratie model. Deze is buiten scope. Met de vraag wordt expliciet niet het interne model van de registatie bedoeld. 
- Met de vraag wordt bedoeld een registratie model wat de leidraad is voor bronhouders bij het muteren van gegevens van objecten. 

Verzoek: om het volgende uit te werken om te verifiëren of IMSOR voldoende informatie bevat om te kunnen bepalen wanneer een bronhouder de registratie moet wijzigen oftewel informatie gaat uitwisselen van bronhouder richting een basis registratie of een LV. 
