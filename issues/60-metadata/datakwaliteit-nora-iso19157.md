# Gegevenskwaliteit NORA vs ISO 19157

Gegevenskwaliteit is een relevant onderwerp in het kader van de SOR. [Vanuit de Architectuurvisie](https://docs.geostandaarden.nl/disgeo/vv-al-arch-20210216/#gegevenskwaliteit) wordt het volgende gezegd over gegevenskwaliteit:
>Het doel van de component Gegevenskwaliteit is om de afgesproken kwaliteitsindicatoren vast te leggen, te meten en monitoren wat de waarde van deze indicatoren is en zowel de indicatoren als de gemeten waarden beschikbaar te stellen voor bronhouders, afnemers en andere betrokkenen, zoals toezichthouders en beleidsverantwoordelijke.

>Met kwaliteitsindicatoren kan de algehele kwaliteit van de opgeslagen gegevens gemonitord worden. De opslag bevat naast de feitelijke gegevens ook proces- en metagegevens (zie opslag). Dit betekent dat de kwaliteitsindicatoren naast de kwaliteit van de gegevens zelf ook resultaten kunnen geven over bijvoorbeeld gemiddelde duur van verwerking door bronhouder (procesgegevens) of meta-gegevens van de gegevens zelf.

Dit onderwerp is ook gekoppeld aan metadata, aangezien je bepaalde informatie over gegevenskwaliteit kunt opnemen in metadata. Echter kunnen deze stappen alleen worden genomen wanneer een concreet kwaliteitsraamwerk is beschreven. Dit wordt uitgebreid besproken in ISO 25012. Zo'n raamwerk bestaat uit kwaliteitsdimensies, indicatoren en meetfuncties. Een kwaliteitsdimensie is een aspect dat wordt gebruikt om indicatoren te categoriseren. Voorbeelden van kwaliteitsdimensies zijn: juistheid, nauwkeurigheid, compleetheid en consistentie. Een kwaliteitsdimensie kan worden onderverdeeld in kwaliteitsattributen (indicatoren) - deze zijn iets specifieker van aard. Voorbeelden van indicatoren voor de dimensie 'juistheid' zijn: classificatie juistheid, thematische juistheid, positionele juistheid. Om kwaliteit te beschrijven moeten de indicatoren meetbaar worden gemaakt. Hiervoor worden meetfuncties gespecificeerd. Voorbeelden van meetfuncties voor de indicator 'positionele juistheid' zijn: linear error probable (LEP), root mean square error (RMSE), circular standard deviation (CSE). Hoe je deze meetfuncties toepast in de context van een dataset wordt beschreven in kwaliteitseisen. Middels kwaliteitsmetingen kan worden nagegaan of aan een kwaliteitseis wordt voldaan. De resultaten van zulke metingen kunnen worden vastgelegd in een kwaliteitsrapport. 

Hoewel een kwaliteitsraamwerk dus heel generiek kan zijn (procesgegevens, systeem-afhankelijke gegevens), kan het ook specifiek ingaan op geometrische of topologische controles van de gegevens zelf. We hebben het dan over de inherente gegevenskwaliteit. Met dit voor ogen is een vergelijk uitgevoerd tussen NORA indicatoren en indicatoren uit de ISO 19157. Hierbij worden de 'kwaliteitseisen' uit EMSO gekoppeld aan de juiste indicatoren. In het vervolg kunnen geschikte meetfuncties worden gezocht voor deze eisen, en kan de vastlegging van deze eisen verder worden uitgewerkt.  

## Juistheid / Nauwkeurigheid

|  NORA Kwaliteitsattribuut  |                                                             ISO 19157 Kwaliteitsattribuut                                                             |
|:--------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|                            |                                                                                                                                                       |
| Classificatie juistheid    | DQ_ThematicClassificationCorrectness                                                                                                                  |
| Thematische juistheid      | DQ_ThematicAccuracy (DQ_NonQuantitativeAttributeCorrectness   & DQ_QuantitativeAttributeAccuracy)                                                     |
| Positionele juistheid      | DQ_PositionalAccuracy (DQ_AbsoluteExternalPositionalAccuracy   & DQ_RelativeInternalPositionalAccuracy &   DQ_GriddedDataPositionalAccuracy)          |
|                            | DQ_AccuracyOfATimeMeasurement                                                                                                                         |

## Compleetheid

|  NORA Kwaliteitsattribuut  |                                                             ISO 19157 Kwaliteitsattribuut                                                             |
|:--------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|                            |                                                                                                                                                       |
| Ruimtelijke dekking        | ?                                                                                                                                                     |
| Attribuut compleetheid     | DQ_CompletenessOmission > DQ_Scope.level = feature,   DQ_Scope.levelDescription = attribuutX                                                          |
| Dataset compleetheid       | DQ_CompletenessOmission > DQ_Scope.level = dataset                                                                                                    |
| Historie compleetheid      | ?                                                                                                                                                     |
| Identificeerbaarheid       | DQ_CompletenessOmission > DQ_Scope.level = dataset / feature,   DQ_Scope.levelDescription = identificatie attribuut                                   |
| Metadata compleetheid      | DQ_CompletenessOmission > DQ_Scope.level = dataset / feature /   attribute, DQ_Scope.levelDescription = metadataAttribuutX,   metadataAttribuutY, etc |
| Overcompleetheid           | DQ_CompletenessComission > DQ_Scope.level = dataset/featuretype                                                                                       |

## Validiteit

|  NORA Kwaliteitsattribuut  |                                                             ISO 19157 Kwaliteitsattribuut                                                             |
|:--------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|                            |                                                                                                                                                       |
| Geometrische validiteit    |                                                                                                                                                       |
| Domeinvaliditeit           |                                                                                                                                                       |
| Formaatvaliditeit          |                                                                                                                                                       |
|                            | DQ_TemporalValidity                                                                                                                                   |

## Consistentie

|  NORA Kwaliteitsattribuut  |                                                             ISO 19157 Kwaliteitsattribuut                                                             |
|:--------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|                            |                                                                                                                                                       |
| Topologische consistentie  |                                                                                                                                                       |
| Homogeniteit               |                                                                                                                                                       |
| Referentiële integriteit   |                                                                                                                                                       |
|                            | DQ_TemporalConsistency                                                                                                                                |
| Logische consistentie      |                                                                                                                                                       |
|                            | DQ_TopologicalConsistency                                                                                                                             |
|                            | DQ_ConceptualConsistency                                                                                                                              |
|                            | DQ_DomainConsistency                                                                                                                                  |
|                            | DQ_FormatConsistency                                                                                                                                  |

## Overige dimensies

|     Kwaliteitsdimensie     |  NORA Kwaliteitsattribuut | ISO 19157 Kwaliteitsattribuut |
|:--------------------------:|:-------------------------:|:-----------------------------:|
| Actualiteit                | Update frequentie         |                               |
| Actualiteit                | Versheid                  |                               |
| Precisie                   | Geometrische precisie     |                               |
| Precisie                   | Opslagprecisie            |                               |
| Plausibiliteit             | Authenticiteit            |                               |
| Plausibiliteit             | Bewijsbaarheid            |                               |
| Plausibiliteit             | Reputatie                 |                               |
| Plausibiliteit             | Waarschijnlijkheid        |                               |
| Traceerbaarheid            | Gebruiksinzicht           |                               |
| Traceerbaarheid            | Herleidbaarheid           |                               |
| Traceerbaarheid            | Reproduceerbaarheid       |                               |
| Begrijpelijkheid           | Duidelijkheid             |                               |
| Gebruik                    |                           | DQ_UsabilityElement 			 |
| Metakwaliteit              |                           | DQ_Confidence                 |
| Metakwaliteit              |                           | DQ_Representativity           |
| Metakwaliteit              |                           | DQ_Homogeneity                |

## Opmerkingen
