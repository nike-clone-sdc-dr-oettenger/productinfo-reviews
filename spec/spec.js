const $ = require('jquery');
const expect = require('chai').expect;
const axios = require('axios');
const NikeReview = require('../db/index.js');

describe('Unit Testing', () => {
  it('Database should have at least 100 records within the Nike Review local database', function(done) {
    NikeReview.find({}).then(data => {
      expect(data.length).to.equal(100);
    });
    done();
  });

  it('A query will create an array of objects with JSON objects with review_star, review_body, shoe_id, review_username, review_location, upstar, downstar props', done => {
    //check hardcoded shoe_id to exist in db to pass test
    NikeReview.find({ shoe_id: 37 }).then(data => {
      expect(data).to.be.an('array');
      expect(data[0]).to.be.an('object');
      expect(data[0].review_star).to.be.a('number');
      expect(data[0].review_body).to.be.a('string');
      expect(data[0].shoe_id).to.be.a('number');
      expect(data[0].review_username).to.be.a('string');
      expect(data[0].review_location).to.be.a('string');
      expect(data[0].upStar).to.be.a('number');
      expect(data[0].downStar).to.be.a('number');
    });
    done();
  });

  it('a query for a shoe can potentially have more than one review', done => {
    NikeReview.find({ shoe_id: 11 }).then(data => {
      expect(data.length).to.equal(2);
    });
    done();
  });
});

describe('Server Test', function() {
  it('should return status code 200 for a valid request', done => {
    axios.get(
      'http://localhost:3000/api/reviews',
      { params: { shoe_id: 37 } },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
      }
    );
    done();
  });

  it('should return a 404 status code for an invalid request', done => {
    axios.get(
      'http://localhost:3000/api/reviews',
      { params: { shoe_id: 105 } },
      (error, response, body) => {
        expect(response.statusCode).to.equal(404);
      }
    );
    done();
  });
});
