const mongoose = require('mongoose');
require('../configs/db.config');
const Source = require('../models/source.model');

const sources = [
  {
    "name": "Hidden Figures",
    "sourceType": "FILMS",
    "image": "https://www.countryarts.org.au/wp-content/uploads/2017/01/hidden-figures-vertical.jpg",
    "url": "http://shaw.sg/Images/Film/DH473/m-hiddenfigures-v2.jpg"
  },
  {
    "name": "Margaret Hamilton",
    "sourceType": "FIGURES",
    "image": "https://pbs.twimg.com/media/CLfShJ5UwAAFbqi.jpg",
    "url": "http://shaw.sg/Images/Film/DH473/m-hiddenfigures-v2.jpg"

  },
  {
    "name": "Carlos Prado",
    "sourceType": "MENTORS",
    "image": "https://avatars2.githubusercontent.com/u/11295347?s=460&v=4",
    "url": "http://shaw.sg/Images/Film/DH473/m-hiddenfigures-v2.jpg"

  },
  {
    "name": "Girls who code",
    "sourceType": "BOOKS",
    "image": "https://3zjc852t4swp1lmezl171oga-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/GWC_finalcover.jpg",
    "url": "http://shaw.sg/Images/Film/DH473/m-hiddenfigures-v2.jpg"

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
