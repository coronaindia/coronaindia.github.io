var amChartSateCovCasSeries = [];
var gentAmChartCovCasSeriesDiffObj = jQuery.Deferred();
var indianCharSateCode = {
  "Andaman and Nicobar Islands": "IN-AN",
  "Andhra Pradesh": "IN-AP",
  "Arunachal Pradesh": "IN-AR",
  "Assam": "IN-AS",
  "Bihar": "IN-BR",
  "Chandigarh": "IN-CH",
  "Chhattisgarh": "IN-CT",
  "Dadra and Nagar Haveli": "IN-DN",
  "Daman and Diu": "IN-DD",
  "Delhi": "IN-DL",
  "Goa": "IN-GA",
  "Gujarat": "IN-GJ",
  "Haryana": "IN-HR",
  "Himachal Pradesh": "IN-HP",
  "Jammu and Kashmir": "IN-JK",
  "Jharkhand": "IN-JH",
  "Karnataka": "IN-KA",
  "Kerala": "IN-KL",
  "Ladakh": "IN-LK",
  "Lakshadweep": "IN-LD",
  "Madhya Pradesh": "IN-MP",
  "Maharashtra": "IN-MH",
  "Manipur": "IN-MN",
  "Meghalaya": "IN-ML",
  "Mizoram": "IN-MZ",
  "Nagaland": "IN-NL",
  "Odisha": "IN-OR",
  "Puducherry": "IN-PY",
  "Punjab": "IN-PB",
  "Rajasthan": "IN-RJ",
  "Sikkim": "IN-SK",
  "Tamil Nadu": "IN-TN",
  "Telangana": "IN-TS",
  "Telengana": "IN-TG",
  "Tripura": "IN-TR",
  "Uttar Pradesh": "IN-UP",
  "Uttarakhand": "IN-UT",
  "West Bengal": "IN-WB",
}

var indianCharSateCodeReverse = {
    "IN-AN":"Andaman and Nicobar Islands",
    "IN-AP":"Andhra Pradesh",
    "IN-AR":"Arunachal Pradesh",
    "IN-AS":"Assam",
    "IN-BR":"Bihar",
    "IN-CH":"Chandigarh",
    "IN-CT":"Chhattisgarh",
    "IN-DN":"Dadra and Nagar Haveli",
    "IN-DD":"Daman and Diu",
    "IN-DL":"Delhi",
    "IN-GA":"Goa",
    "IN-GJ":"Gujarat",
    "IN-HR":"Haryana",
    "IN-HP":"Himachal Pradesh",
    "IN-JK":"Jammu and Kashmir",
    "IN-JH":"Jharkhand",
    "IN-KA":"Karnataka",
    "IN-KL":"Kerala",
    "IN-LK":"Ladakh",
    "IN-LD":"Lakshadweep",
    "IN-MP":"Madhya Pradesh",
    "IN-MH":"Maharashtra",
    "IN-MN":"Manipur",
    "IN-ML":"Meghalaya",
    "IN-MZ":"Mizoram",
    "IN-NL":"Nagaland",
    "IN-OR":"Odisha",
    "IN-PY":"Puducherry",
    "IN-PB":"Punjab",
    "IN-RJ":"Rajasthan",
    "IN-SK":"Sikkim",
    "IN-TG":"Tamil Nadu",
    "IN-TS":"Telangana",
    "IN-TS":"Telengana",
    "IN-TR":"Tripura",
    "IN-UP":"Uttar Pradesh",
    "IN-UT":"Uttarakhand",
    "IN-WB":"West Bengal"
}

var cordinatList = {
  indianState: {
    'Andaman and Nicobar Islands': {
      lat: 11.7401,
      long: 92.6586
    },
    'Delhi': {
      lat: 28.6139,
      long: 77.2090
    },
    'Andhra Pradesh': {
      lat: 15.9129,
      long: 79.7400
    },
    'Bihar': {
      lat: 25.0961,
      long: 85.3131
    },
    'Chhattisgarh': {
      lat: 21.2787,
      long: 81.8661
    },
    'Gujarat': {
      lat: 22.2587,
      long: 71.1924
    },
    'Haryana': {
      lat: 29.0588,
      long: 76.0856
    },
    'Himachal Pradesh': {
      lat: 31.1048,
      long: 77.1734
    },
    'Karnataka': {
      lat: 15.3173,
      long: 75.7139
    },
    'Kerala': {
      lat: 10.8505,
      long: 76.2711
    },
    'Madhya Pradesh': {
      lat: 22.9734,
      long: 78.6569
    },
    'Maharashtra': {
      lat: 19.7515,
      long: 75.7139
    },
    'Odisha': {
      lat: 20.9517,
      long: 85.0985
    },
    'Puducherry': {
      lat: 11.9416,
      long: 79.8083
    },
    'Punjab': {
      lat: 31.1471,
      long: 75.3412
    },
    'Rajasthan': {
      lat: 27.0238,
      long: 74.2179
    },
    'Tamil Nadu': {
      lat: 11.1271,
      long: 78.6569
    },
    'Telangana': {
      lat: 18.1124,
      long: 79.0193
    },
    'Chandigarh': {
      lat: 30.7333,
      long: 76.7794
    },
    'Jammu and Kashmir': {
      lat: 33.7782,
      long: 76.5762
    },
    'Ladakh': {
      lat: 34.152588,
      long: 77.577049
    },
    'Uttar Pradesh': {
      lat: 26.8467,
      long: 80.9462
    },
    'Uttarakhand': {
      lat: 30.0668,
      long: 79.0193
    },
    'West Bengal': {
      lat: 22.9868,
      long: 87.8550
    },
    'Goa': {
      lat: 15.2993,
      long: 74.1240
    },
    'Jharkhand': {
      lat: 23.6102,
      long: 85.2799
    },
    'Manipur': {
      lat: 24.6637,
      long: 93.9063
    },
    'Mizoram': {
      lat: 23.1645,
      long: 92.9376
    },
    'Assam': {
      lat: 26.2006,
      long: 92.9376
    },
    'Nagaland': {
      lat: 26.1584,
      long: 94.5624
    },
    'Tripura': {
      lat: 23.9408,
      long: 91.9882
    },
    'Meghalaya': {
      lat: 25.4670,
      long: 91.3662
    },
    'Sikkim': {
      lat: 27.5330,
      long: 88.5122
    },
    'Arunachal Pradesh': {
      lat: 28.2180,
      long: 94.7278
    }
  }
};

var googleMapStyles = null;

var googleMapStanderedStyles = [
  {
    "featureType": "administrative.country",
    "stylers": [
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "stylers": [
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

var googleMapDarkStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "stylers": [
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "stylers": [
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

var mapMarkerIcon=null;

var mapMarkerIconRed="media/images/marker.svg";

var mapMarkerIconBlue="media/images/navigationBlue.svg";

var graphsLabelsColor=null;

var markerInfoStateColor="black";

var govConListJsoptions = {
  valueNames: [
    'place',
    'phoneNo',
    {
      data: ['id']
    },
    {
      name: 'timestamp',
      attr: 'data-timestamp'
    },
    {
      name: 'link',
      attr: 'href'
    },
  ]
};

var govContactJson=  [
  {
    place: 'Andaman & Nicobar Islands',
    phoneNo: ' 03192-232102',
    id: 2,
    timestamp: '1337',
    link: '#!'
  },

  {
    place: 'Arunachal Pradesh',
    phoneNo: ' 9436055743',
    id: 3,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Assam',
    phoneNo: ' 6913347770',
    id: 4,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Bihar',
    phoneNo: ' 9436055743',
    id: 5,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Chandigarh ',
    phoneNo: ' 9779558282',
    id: 6,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Chhattisgarh',
    phoneNo: ' 104',
    id: 7,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Dadra & Nagar Haveli/Daman & Diu',
    phoneNo: ' 104',
    id: 8,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Delhi',
    phoneNo: ' 011-22307145',
    id: 9,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Goa',
    phoneNo: ' 104',
    id: 10,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Gujarat',
    phoneNo: ' 104',
    id: 11,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Haryana',
    phoneNo: ' 8558893911',
    id: 12,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Himachal Pradesh',
    phoneNo: ' 104',
    id: 13,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Jammu & Kashmir',
    phoneNo: ' 01912520982, 0194-2440283',
    id: 14,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Jharkhand',
    phoneNo: ' 104',
    id: 15,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Karnataka',
    phoneNo: ' 104',
    id: 16,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Kerala',
    phoneNo: ' 0471-2552056',
    id: 17,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Ladakh',
    phoneNo: ' 01982256462',
    id: 18,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Lakshadweep',
    phoneNo: ' 104',
    id: 19,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Madhya Pradesh',
    phoneNo: ' 0755-2527177',
    id: 20,
    timestamp: '1337',
    link: '#'
  },
  {
    place: 'Maharashtra',
    phoneNo: ' 020-26127394',
    id: 21,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Manipur',
    phoneNo: ' 3852411668',
    id: 22,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Meghalaya',
    phoneNo: ' 108',
    id: 23,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Mizoram',
    phoneNo: ' 102',
    id: 24,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Nagaland',
    phoneNo: ' 7005539653',
    id: 25,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Odisha',
    phoneNo: ' 9439994859',
    id: 26,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Puducherry',
    phoneNo: ' 104',
    id: 27,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Punjab',
    phoneNo: ' 104',
    id: 28,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Rajasthan',
    phoneNo: ' 0141-2225624',
    id: 29,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Sikkim',
    phoneNo: ' 104',
    id: 30,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Tamil Nadu',
    phoneNo: ' 044-29510500',
    id: 31,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Telangana',
    phoneNo: ' 104',
    id: 32,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Tripura',
    phoneNo: ' 0381-2315879',
    id: 33,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Uttarakhand',
    phoneNo: ' 104',
    id: 34,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'Uttar Pradesh',
    phoneNo: ' 18001805145',
    id: 35,
    timestamp: '1337',
    link: '#!'
  },
  {
    place: 'West Bengal',
    phoneNo: ' 800313444222, 03323412600',
    id: 36,
    timestamp: '1337',
    link: '#!'
  }

];

var bodyCutomScrollThemeClass=null;

var cutomScrollThemeClassTyp1=null;

var lineChart1=null;
var lineChart2=null;
var lineChart3=null;
var ncovDoughnut=null;
var nCoVSatesCasesAmChart =null;
var divOverlayScrollbarsInstances = null;
var bodyOverlayScrollbarsInstances = null;
