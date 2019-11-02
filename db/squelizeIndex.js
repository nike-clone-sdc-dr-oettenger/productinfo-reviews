const Sequelize = require('sequelize');
const faker = require('faker');

const sequelize = new Sequelize('nikeReviews', 'root', 'password', {
  host: '35.160.204.116',
  dialect: 'mysql',
  logging: false
});

sequelize.authenticate().then(() => {
  console.log('yea buddfy');
}).catch((err) => {
  console.log('********************************* ah fuck ******************************** \n', err);
})



var obj = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  shoe_id: {
    type: Sequelize.INTEGER
  },
  review_star: {
    type: Sequelize.INTEGER
  },
  review_body: {
    type: Sequelize.STRING
  },
  review_username: {
    type: Sequelize.STRING
  },
  review_date: {
    type: Sequelize.STRING
  },
  review_location: {
    type: Sequelize.STRING
  },
  upStar: {
    type: Sequelize.INTEGER
  },
  downStar: {
    type: Sequelize.INTEGER
  },
  review_title: {
    type: Sequelize.STRING
  },
}



const Reviews = sequelize.define('review', obj)

Reviews.sync()
//.sync creates database


const getFromSql = function(id) {
  console.log('**************************************** \n', id)
  return Reviews.findOne({ where: {id: id} }).then(project => {
    console.log(`found ur project: \n ${project}`)
    return project;
  }).catch(function(err) {
    console.log('failed to retrieve from db \n', err);
  })
}

const postToSql = function(obj) {
  return Reviews.upsert(obj).then(function(prod) {
    console.log('inserted a docdsfdsfsdf \n')
  }).catch(function(err) {
    console.log('failed to insert to db');
  })
}

const putToSql = function(obj) {
  return Reviews.upsert(obj).then(function() {
    console.log('updated a doc')
  }).catch(function(err) {
    console.log('failed to update a doc')
  })
}

const deleteFromSql = function(id) {
  return Reviews.destroy({
    where: {
      id: id
    }
  }).then(function() {
    console.log('successfully deleted doc')
  }).catch(function(err) {
    console.log('failed to delete doc');
  })
}

const insert2k = function(index) {
  if (index < 2) {
  var tempArr = [];
  for (let b = 0; b < 2000; b ++) {
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
  Reviews.bulkCreate(tempArr).then(function() {
    index ++;
    console.log('inserted ' + (index * 2000) + ' records into db')
    insert2k(index)
  });
  } else {
    console.log('it finally worked');
  }
}



//insert2k(0);
module.exports = {
  getFromSql,
  postToSql,
  deleteFromSql,
  putToSql
}








































