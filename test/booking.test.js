const chai = require('chai');

const expect = chai.expect;
const url = `http://localhost:4000/`;
const request = require('supertest')(url);

describe('GraphQL', () => {
    it('Creates a new room', (done) => {
        request.post('/graphql')
        .send({ query: '{ room(id: 2) { id name description } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            res.body.room.should.have.property('id')
            res.body.room.should.have.property('name')
            res.body.room.should.have.property('description')
            done();
        })
    })

    it('Returns all users', (done) => {
        request.post('/graphql')
        .send({ query: '{ rooms { id name description } }' })
        .expect(200)
        .end((err, res) => {
            // res will contain array of all users
            if (err) return done(err);
            // assume there are a 100 users in the database
            expect(res.body.data.rooms).to.have.lengthOf(7);
        })  
    })
});