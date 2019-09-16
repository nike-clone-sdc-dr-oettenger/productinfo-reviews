const NikeReview = require('./index.js');
var faker = require('faker');

const seedScript = numberOfCollections => {
  let json = [];
  for (let i = 0; i < numberOfCollections; i++) {
    let newReview = {};
    newReview.review_star = Math.floor(Math.random() * 6);
    newReview.review_body = faker.lorem.paragraphs(
      (nb = 3),
      (ext_word_list = null)
    );
    newReview.shoe_id = Math.floor(Math.random() * 100);
    newReview.review_username = faker.internet.userName();
    newReview.review_date = faker.date.past();
    newReview.review_location = `${faker.address.city()}, ${faker.address.stateAbbr()}, US `;
    newReview.upStar = Math.floor(Math.random() * 11);
    newReview.downStar = Math.floor(Math.random() * 11);
    newReview.reviewTitle = faker.lorem.paragraph(
      (nb_sentences = 1),
      (variable_nb_sentences = true),
      (ext_word_list = null)
    );
    json.push(newReview);
  }

  if (json.length >= numberOfCollections) {
    NikeReview.insertMany(json, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(
          `you have seeded ${json.length} docs into your mongoose database`
        );
      }
    });
  }
};

seedScript(100);

//review update
