const mongoose = require('mongoose');
require('../configs/db.config');
const Source = require('../models/source.model');

const sources = [
  {
    "name": "Hidden Figures",
    "sourceType": "FILMS",
    "image": "https://ia.media-imdb.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "url": "http://shaw.sg/Images/Film/DH473/m-hiddenfigures-v2.jpg"
    "text": "This is the storie of three black women..."
  },
  {
    "name": "Margaret Hamilton",
    "sourceType": "FIGURES",
    "image": "https://pbs.twimg.com/media/CLfShJ5UwAAFbqi.jpg",
    "url": "http://shaw.sg/Images/Film/DH473/m-hiddenfigures-v2.jpg"
    "text": "This is the storie of three black women..."
  },
  {
    "name": "Carlos Prado",
    "sourceType": "MENTORS",
    "image": "https://avatars2.githubusercontent.com/u/11295347?s=460&v=4",
    "url": "http://shaw.sg/Images/Film/DH473/m-hiddenfigures-v2.jpg"
    "text": "This is the storie of three black women..."
  },
  {
    "name": "Girls who code",
    "sourceType": "BOOKS",
    "image": "https://3zjc852t4swp1lmezl171oga-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/GWC_finalcover.jpg",
    "url": "http://shaw.sg/Images/Film/DH473/m-hiddenfigures-v2.jpg"
    "text": "This is the storie of three black women..."
  }

  {
    "name": "Steve Jobs",
    "sourceType": "QUOTES",
    "image": "https://avatars2.githubusercontent.com/u/11295347?s=460&v=4",
    "url": "http://shaw.sg/Images/Film/DH473/m-hiddenfigures-v2.jpg"
    "text": "This is the storie of three black women..."
  },

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
