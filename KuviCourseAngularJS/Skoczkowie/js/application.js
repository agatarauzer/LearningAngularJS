'use strict';

var jumperApp = angular.module( 'jumperClasificationApp', [] );

jumperApp.controller( 'jumperTableController', [ '$scope', '$filter' , function( $scope , $filter) {
	
   $scope.addJumper = function() {
      $scope.jumpers.splice( $scope.jumpers.length , 0 , { Name: $scope.jumperName, Nation : $scope.jumperNationality } );
   };

   $scope.editJumper = false;

   $scope.deleteJumper = function( $index ) {
      $scope.jumpers.splice( $index , 1 );
   };

   $scope.jumpers = [
 
 {
   "Name": "STOCH Kamil",
   "Nation": "POL",
   "rank": 1,
   "pts": 1784
 },
 {
   "Name": "FREITAG Richard",
   "Nation": "GER",
   "rank": 2,
   "pts": 1110
 },
 {
   "Name": "TANDE Daniel Andre",
   "Nation": "NOR",
   "rank": 3,
   "pts": 1035
 },
 {
   "Name": "KRAFT Stefan",
   "Nation": "AUT",
   "rank": 4,
   "pts": 1022
 },
 {
   "Name": "JOHANSSON Robert",
   "Nation": "NOR",
   "rank": 5,
   "pts": 994
 },
 {
   "Name": "WELLINGER Andreas",
   "Nation": "GER",
   "rank": 6,
   "pts": 976
 },
 {
   "Name": "FORFANG Johann Andre",
   "Nation": "NOR",
   "rank": 7,
   "pts": 972
 },
 {
   "Name": "KUBACKI Dawid",
   "Nation": "POL",
   "rank": 8,
   "pts": 954
 },
 {
   "Name": "KOBAYASHI Junshiro",
   "Nation": "JPN",
   "rank": 9,
   "pts": 754
 },
 {
   "Name": "ZYLA Piotr",
   "Nation": "POL",
   "rank": 10,
   "pts": 713
 },
 {
   "Name": "STJERNEN Andreas",
   "Nation": "NOR",
   "rank": 11,
   "pts": 686
 },
 {
   "Name": "EISENBICHLER Markus",
   "Nation": "GER",
   "rank": 12,
   "pts": 636
 },
 {
   "Name": "GEIGER Karl",
   "Nation": "GER",
   "rank": 13,
   "pts": 607
 },
 {
   "Name": "HULA Stefan",
   "Nation": "POL",
   "rank": 14,
   "pts": 577
 },
 {
   "Name": "KLIMOV Evgeniy",
   "Nation": "RUS",
   "rank": 15,
   "pts": 544
 },
 {
   "Name": "FANNEMEL Anders",
   "Nation": "NOR",
   "rank": 16,
   "pts": 543
 },
 {
   "Name": "GRANERUD Halvor Egner",
   "Nation": "NOR",
   "rank": 17,
   "pts": 436
 },
 {
   "Name": "KOBAYASHI Ryoyu",
   "Nation": "JPN",
   "rank": 18,
   "pts": 432
 },
 {
   "Name": "PREVC Peter",
   "Nation": "SLO",
   "rank": 19,
   "pts": 430
 },
 {
   "Name": "LEYHE Stephan",
   "Nation": "GER",
   "rank": 20,
   "pts": 401
 },
 {
   "Name": "AMMANN Simon",
   "Nation": "SUI",
   "rank": 21,
   "pts": 394
 },
 {
   "Name": "DAMJAN Jernej",
   "Nation": "SLO",
   "rank": 22,
   "pts": 379
 },
 {
   "Name": "KOT Maciej",
   "Nation": "POL",
   "rank": 23,
   "pts": 363
 },
 {
   "Name": "SEMENIC Anze",
   "Nation": "SLO",
   "rank": 24,
   "pts": 348
 },
 {
   "Name": "HUBER Daniel",
   "Nation": "AUT",
   "rank": 25,
   "pts": 322
 },
 {
   "Name": "HAYBOECK Michael",
   "Nation": "AUT",
   "rank": 26,
   "pts": 276
 },
 {
   "Name": "PEIER Killian",
   "Nation": "SUI",
   "rank": 27,
   "pts": 261
 },
 {
   "Name": "LANISEK Anze",
   "Nation": "SLO",
   "rank": 28,
   "pts": 245
 },
 {
   "Name": "ZAJC Timi",
   "Nation": "SLO",
   "rank": 29,
   "pts": 215
 },
 {
   "Name": "KOUDELKA Roman",
   "Nation": "CZE",
   "rank": 30,
   "pts": 201
 },
 {
   "Name": "WOLNY Jakub",
   "Nation": "POL",
   "rank": 31,
   "pts": 193
 },
 {
   "Name": "BARTOL Tilen",
   "Nation": "SLO",
   "rank": 32,
   "pts": 185
 },
 {
   "Name": "TAKEUCHI Taku",
   "Nation": "JPN",
   "rank": 33,
   "pts": 173
 },
 {
   "Name": "AIGNER Clemens",
   "Nation": "AUT",
   "rank": 34,
   "pts": 166
 },
 {
   "Name": "KORNILOV Denis",
   "Nation": "RUS",
   "rank": 34,
   "pts": 166
 },
 {
   "Name": "KASAI Noriaki",
   "Nation": "JPN",
   "rank": 36,
   "pts": 164
 },
 {
   "Name": "FETTNER Manuel",
   "Nation": "AUT",
   "rank": 37,
   "pts": 159
 },
 {
   "Name": "DESCHWANDEN Gregor",
   "Nation": "SUI",
   "rank": 38,
   "pts": 157
 },
 {
   "Name": "WANK Andreas",
   "Nation": "GER",
   "rank": 39,
   "pts": 153
 },
 {
   "Name": "SATO Yukiya",
   "Nation": "JPN",
   "rank": 40,
   "pts": 150
 },
 {
   "Name": "SCHLIERENZAUER Gregor",
   "Nation": "AUT",
   "rank": 41,
   "pts": 143
 },
 {
   "Name": "ITO Daiki",
   "Nation": "JPN",
   "rank": 42,
   "pts": 142
 },
 {
   "Name": "VASSILIEV Dmitriy",
   "Nation": "RUS",
   "rank": 43,
   "pts": 137
 },
 {
   "Name": "INSAM Alex",
   "Nation": "ITA",
   "rank": 44,
   "pts": 121
 },
 {
   "Name": "BICKNER Kevin",
   "Nation": "USA",
   "rank": 45,
   "pts": 108
 },
 {
   "Name": "PASCHKE Pius",
   "Nation": "GER",
   "rank": 46,
   "pts": 107
 },
 {
   "Name": "LINDVIK Marius",
   "Nation": "NOR",
   "rank": 47,
   "pts": 93
 },
 {
   "Name": "TEPES Jurij",
   "Nation": "SLO",
   "rank": 48,
   "pts": 85
 },
 {
   "Name": "PREVC Domen",
   "Nation": "SLO",
   "rank": 49,
   "pts": 84
 },
 {
   "Name": "SCHMID Constantin",
   "Nation": "GER",
   "rank": 50,
   "pts": 83
 },
 {
   "Name": "BOYD-CLOWES Mackenzie",
   "Nation": "CAN",
   "rank": 51,
   "pts": 82
 },
 {
   "Name": "POPPINGER Manuel",
   "Nation": "AUT",
   "rank": 52,
   "pts": 81
 },
 {
   "Name": "KRANJEC Robert",
   "Nation": "SLO",
   "rank": 53,
   "pts": 73
 },
 {
   "Name": "NAKAMURA Naoki",
   "Nation": "JPN",
   "rank": 53,
   "pts": 73
 },
 {
   "Name": "KOZISEK Cestmir",
   "Nation": "CZE",
   "rank": 55,
   "pts": 64
 },
 {
   "Name": "TOCHIMOTO Shohei",
   "Nation": "JPN",
   "rank": 56,
   "pts": 60
 },
 {
   "Name": "JELAR Ziga",
   "Nation": "SLO",
   "rank": 57,
   "pts": 55
 },
 {
   "Name": "KOFLER Andreas",
   "Nation": "AUT",
   "rank": 58,
   "pts": 53
 },
 {
   "Name": "DEZMAN Nejc",
   "Nation": "SLO",
   "rank": 59,
   "pts": 50
 },
 {
   "Name": "GANGNES Kenneth",
   "Nation": "NOR",
   "rank": 59,
   "pts": 50
 },
 {
   "Name": "JUSTIN Rok",
   "Nation": "SLO",
   "rank": 61,
   "pts": 46
 },
 {
   "Name": "AALTO Antti",
   "Nation": "FIN",
   "rank": 62,
   "pts": 45
 },
 {
   "Name": "BRESADOLA Davide",
   "Nation": "ITA",
   "rank": 62,
   "pts": 45
 },
 {
   "Name": "HVALA Jaka",
   "Nation": "SLO",
   "rank": 62,
   "pts": 45
 },
 {
   "Name": "NAGLIC Tomaz",
   "Nation": "SLO",
   "rank": 65,
   "pts": 43
 },
 {
   "Name": "HAMANN Martin",
   "Nation": "GER",
   "rank": 66,
   "pts": 42
 },
 {
   "Name": "COLLOREDO Sebastian",
   "Nation": "ITA",
   "rank": 67,
   "pts": 39
 },
 {
   "Name": "IWASA Yuken",
   "Nation": "JPN",
   "rank": 68,
   "pts": 38
 },
 {
   "Name": "BJERKEENGEN Fredrik",
   "Nation": "NOR",
   "rank": 69,
   "pts": 36
 },
 {
   "Name": "ALAMOMMO Andreas",
   "Nation": "FIN",
   "rank": 70,
   "pts": 35
 },
 {
   "Name": "ALTENBURGER Florian",
   "Nation": "AUT",
   "rank": 70,
   "pts": 35
 },
 {
   "Name": "ROMASHOV Alexey",
   "Nation": "RUS",
   "rank": 70,
   "pts": 35
 },
 {
   "Name": "ASCHENWALD Philipp",
   "Nation": "AUT",
   "rank": 73,
   "pts": 34
 },
 {
   "Name": "SIEGEL David",
   "Nation": "GER",
   "rank": 73,
   "pts": 34
 },
 {
   "Name": "HLAVA Lukas",
   "Nation": "CZE",
   "rank": 75,
   "pts": 33
 },
 {
   "Name": "ZOGRAFSKI Vladimir",
   "Nation": "BUL",
   "rank": 76,
   "pts": 30
 },
 {
   "Name": "BJOERENG Joacim Oedegaard",
   "Nation": "NOR",
   "rank": 77,
   "pts": 27
 },
 {
   "Name": "STEINER Maximilian",
   "Nation": "AUT",
   "rank": 78,
   "pts": 23
 },
 {
   "Name": "DESCOMBES SEVOIE Vincent",
   "Nation": "FRA",
   "rank": 79,
   "pts": 22
 },
 {
   "Name": "SCHIFFNER Markus",
   "Nation": "AUT",
   "rank": 80,
   "pts": 21
 },
 {
   "Name": "HARADA Yumu",
   "Nation": "JPN",
   "rank": 81,
   "pts": 18
 },
 {
   "Name": "NAZAROV Mikhail",
   "Nation": "RUS",
   "rank": 81,
   "pts": 18
 },
 {
   "Name": "PAVLOVCIC Bor",
   "Nation": "SLO",
   "rank": 81,
   "pts": 18
 },
 {
   "Name": "ZUPANCIC Miran",
   "Nation": "SLO",
   "rank": 81,
   "pts": 18
 },
 {
   "Name": "NOUSIAINEN Eetu",
   "Nation": "FIN",
   "rank": 85,
   "pts": 17
 },
 {
   "Name": "SCHULER Andreas",
   "Nation": "SUI",
   "rank": 86,
   "pts": 16
 },
 {
   "Name": "TROFIMOV Roman Sergeevich",
   "Nation": "RUS",
   "rank": 86,
   "pts": 16
 },
 {
   "Name": "WOHLGENANNT Ulrich",
   "Nation": "AUT",
   "rank": 86,
   "pts": 16
 },
 {
   "Name": "MURANKA Klemens",
   "Nation": "POL",
   "rank": 89,
   "pts": 15
 },
 {
   "Name": "PILCH Tomasz",
   "Nation": "POL",
   "rank": 89,
   "pts": 15
 },
 {
   "Name": "ITO Kenshiro",
   "Nation": "JPN",
   "rank": 91,
   "pts": 13
 },
 {
   "Name": "RHOADS William",
   "Nation": "USA",
   "rank": 92,
   "pts": 12
 },
 {
   "Name": "KANTYKA Przemyslaw",
   "Nation": "POL",
   "rank": 93,
   "pts": 11
 },
 {
   "Name": "RINGEN Sondre",
   "Nation": "NOR",
   "rank": 94,
   "pts": 9
 },
 {
   "Name": "TOLLINGER Elias",
   "Nation": "AUT",
   "rank": 94,
   "pts": 9
 },
 {
   "Name": "JANDA Jakub",
   "Nation": "CZE",
   "rank": 96,
   "pts": 8
 },
 {
   "Name": "LARINTO Ville",
   "Nation": "FIN",
   "rank": 96,
   "pts": 8
 },
 {
   "Name": "LEAROYD Jonathan",
   "Nation": "FRA",
   "rank": 96,
   "pts": 8
 },
 {
   "Name": "HUBER Stefan",
   "Nation": "AUT",
   "rank": 99,
   "pts": 6
 },
 {
   "Name": "STURSA Vojtech",
   "Nation": "CZE",
   "rank": 99,
   "pts": 6
 },
 {
   "Name": "TKACHENKO Sergey",
   "Nation": "KAZ",
   "rank": 99,
   "pts": 6
 },
 {
   "Name": "ZNISZCZOL Aleksander",
   "Nation": "POL",
   "rank": 99,
   "pts": 6
 },
 {
   "Name": "HOERL Jan",
   "Nation": "AUT",
   "rank": 103,
   "pts": 5
 },
 {
   "Name": "BRASME Paul",
   "Nation": "FRA",
   "rank": 104,
   "pts": 4
 },
 {
   "Name": "CHOI Seou",
   "Nation": "KOR",
   "rank": 104,
   "pts": 4
 },
 {
   "Name": "MIETUS Krzysztof",
   "Nation": "POL",
   "rank": 104,
   "pts": 4
 },
 {
   "Name": "WASEK Pawel",
   "Nation": "POL",
   "rank": 104,
   "pts": 4
 },
 {
   "Name": "GLASDER Michael",
   "Nation": "USA",
   "rank": 108,
   "pts": 3
 },
 {
   "Name": "STEKALA Andrzej",
   "Nation": "POL",
   "rank": 108,
   "pts": 3
 },
 {
   "Name": "AIGRO Artti",
   "Nation": "EST",
   "rank": 110,
   "pts": 2
 },
 {
   "Name": "LEITNER Clemens",
   "Nation": "AUT",
   "rank": 110,
   "pts": 2
 },
 {
   "Name": "NOMME Martti",
   "Nation": "EST",
   "rank": 110,
   "pts": 2
 },
 {
   "Name": "MUMINOV Sabirzhan",
   "Nation": "KAZ",
   "rank": 113,
   "pts": 1
 }
];
			}]);