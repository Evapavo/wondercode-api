const mongoose = require('mongoose');
require('../configs/db.config');
const Source = require('../models/source.model');

const sources = [
  {
    "name": "Hidden Figures",
    "type": "Film",
    "image": "https://pics.filmaffinity.com/hidden_figures-810983135-large.jpg",
    "url": "https://pics.filmaffinity.com/hidden_figures-810983135-large.jpg"
  },
  {
    "name": "Margaret Hamilton",
    "type": "Inspiring Figure",
    "image": "https://pbs.twimg.com/media/CLfShJ5UwAAFbqi.jpg",
    "url": "https://pics.filmaffinity.com/hidden_figures-810983135-large.jpg"
    //"specs": [
      //"4.87 ounces",
      //"12MP camera"
    // ]
  },{
      "name": "Girls who code",
      "type": "Book",
      "image": "https://3zjc852t4swp1lmezl171oga-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/GWC_finalcover.jpg",
      "url": "https://pics.filmaffinity.com/hidden_figures-810983135-large.jpg"
      // "specs": [
      //   "16GB Storage"
      // ]
  }
];

Source.create(sources)
  .then((sources) => {
    mon
    console.info("Seeds success:", sources);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error("Seeds error:", sources);
    mongoose.connection.close();
  });



  //"specs": [
    //"1080p Display",
    //"2GB RAM"
  // ]
// },
