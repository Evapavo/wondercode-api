const mongoose = require('mongoose');
require('../configs/db.config');
const Source = require('../models/source.model');

const sources = [
  {
    "name": "Hidden Figures",
    "sourceType": "FILMS",
    "image": "https://pics.filmaffinity.com/hidden_figures-810983135-large.jpg",
    "url": "https://pics.filmaffinity.com/hidden_figures-810983135-large.jpg"
  },
  {
    "name": "Margaret Hamilton",
    "sourceType": "FIGURES",
    "image": "https://pbs.twimg.com/media/CLfShJ5UwAAFbqi.jpg",
    "url": "https://pics.filmaffinity.com/hidden_figures-810983135-large.jpg"

  },{
      "name": "Girls who code",
      "sourceType": "BOOKS",
      "image": "https://3zjc852t4swp1lmezl171oga-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/GWC_finalcover.jpg",
      "url": "https://pics.filmaffinity.com/hidden_figures-810983135-large.jpg"

  }
];

Source.create(sources)
  .then((sources) => {
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
