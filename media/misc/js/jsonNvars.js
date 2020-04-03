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
