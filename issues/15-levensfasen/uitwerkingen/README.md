# Uitwerkingen modellering levensfasen

In deze sub-map worden alternatieve uitwerkingen van de modellering van levensfasen van objecten gemaakt.

## Voorbeeldcasus

Voor een bestaande verharding met:

* `identificatie`: `123`
* `status`: `Bestaand`
* `geometrie`: `Polygon (X)`

met een `beginGeldigheid` van `05-05-2020`, is er een plan voor verbreding van de verharding. De geometrie zal veranderen van `POLYGON (X)` naar `POLYGON (Y)`.
Het plan heeft als begindatum `11-01-2020` en als einddatum `22-06-2020`. Daarna zal het object weer de status `Bestaand` hebben.

De statussen zijn gebaseerd op die beschreven in [EMSO](https://geonovum.github.io/disgeo-inhoud-2/#levensfasen).

**Extra**

Er bestaat ook een alternatief plan met precies dezelfde geldigheidsperiod voor dezelfde verharding. Dit plan is om de verharding te slopen. Uiteindelijk haalt dit plan het niet, en wordt er gekozen voor het verbreden.

## Werkwijze voor het toevoegen van een nieuwe of alternatieve uitwerking

### In de browser
Ga naar https://app.diagrams.net/ kies bij `Save diagrams to:` "Device" en vervolgens "Create New Diagram". Maak dan je diagram en sla deze op als `.drawio` bestand.

Je kunt ook een kopie maken van een bestaand `.drawio` bestand, deze een nieuwe naam geven en openen via "Open Existing Diagram".

### In VSCode 

Voor gebruikers van VSCode is er een handige extension waarmee je .drawio bestanden vanuit VSCode kunt aanmaken en editen: https://github.com/hediet/vscode-drawio
