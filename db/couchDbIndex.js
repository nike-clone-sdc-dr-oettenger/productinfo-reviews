const nano = require('nano')('http://localhost:5984');
const faker = require('faker');

// nano.db.create('nike_reviews2').then(function() {
//   console.log('created nike database');
// }).catch(function(err) {
//   console.log('failed to create db \n', err);
// });

const nike = nano.use('nike_reviews')

const insertToCouch = function(obj) {
  return nike.insert(obj).then(function() {
    console.log('inserted into db')
  })
}

const getFromCouch = function(shoeId) {  
  const q = {
    selector: {
      shoe_id: { "$eq": shoeId}      
    },
    fields: [ "shoe_id", "review_star", "review_body", "review_username", "review_location", "upStar", "downStar", "review_title"],
    limit:1
  };
  return nike.find(q).then((docs) => {
    //console.log('finally returned a promise', docs);
    return docs;
  })
}

const deleteFromCouch = function(shoeId) {
  
}

const insertABunch = function(index) {
  if (index < 5000) {
    var tempArr = [];
    for (let i = 0; i < 2000; i ++) {
      var star = Math.floor(Math.random() * 6);
      var body = faker.lorem.paragraphs(
        (nb = 1),
        (ext_word_list = null)
      ).slice(0, 250);
      var id = Math.floor(Math.random() * 100);
      var username = faker.internet.userName();
      var date = faker.date.past().toString();
      
      var location = `${faker.address.city()}, ${faker.address.stateAbbr()}, US `;
      var upStar = Math.floor(Math.random() * 11);
      var downStar = Math.floor(Math.random() * 11);
      var reviewTitle = faker.lorem.sentence(
        (nb_words = 6),
        (variable_nb_words = true)
      ).toString();    
      tempArr.push({
        shoe_id: id,
        review_star: star,
        review_body: body,
        review_username: username,
        review_date: date,
        review_location: location,
        upStar: upStar,
        downStar: downStar,
        review_title: reviewTitle
      });  
    }
    nike.bulk({docs: tempArr}).then(function() {
      index ++;
      console.log(`inserted ${index * 2000} docs`);
      insertABunch(index)
    }).catch(function(err, one, two, three) {
      console.log('DAMMIT \n', err, one, two, three);
    })
  } else {
    console.log('first try son');
  }
}

// const insertTwo = function() {
//   var arr = [{a: 1, b: 2},
//              {c: 3, d: 4}]
  
// }

//insertABunch(0);

module.exports = {
  getFromCouch,
  insertToCouch
}

