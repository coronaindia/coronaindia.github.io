$(document).ready(function() {
  var options = {
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

  var hackerList = new List('hacker-list', options);

  hackerList.add([{
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

  ]);

});
