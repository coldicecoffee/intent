//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);
describe("Shopping Cart Tests", () => {
  beforeEach(done => {
    chai
      .request(server)
      .get("/initCart")
      .end((err, res) => {
        done();
      });
  });
  describe("Add 'ABCDABAA' to the cart", () => {
    it("it should get a total of $32.40", done => {
      let ids = "ABCDABAA";
      for (const id of ids) {
        chai
          .request(server)
          .post("/addItems/" + id)
          .end((err, res) => {
            res.should.have.status(200);
          });
      }
      chai
        .request(server)
        .get("/retrieveTotal")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("total").eql("32.40");
          done();
        });
    });
  });
  describe("Add 'CCCCCCC' to the cart", () => {
    it("it should get a total of $7.25", done => {
      let ids = "CCCCCCC";
      for (const id of ids) {
        chai
          .request(server)
          .post("/addItems/" + id)
          .end((err, res) => {
            res.should.have.status(200);
          });
      }
      chai
        .request(server)
        .get("/retrieveTotal")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("total").eql("7.25");
          done();
        });
    });
  });
  describe("Add 'ABCD' to the cart", () => {
    it("it should get a total of $15.40", done => {
      let ids = "ABCD";
      for (const id of ids) {
        chai
          .request(server)
          .post("/addItems/" + id)
          .end((err, res) => {
            res.should.have.status(200);
          });
      }
      chai
        .request(server)
        .get("/retrieveTotal")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("total").eql("15.40");
          done();
        });
    });
  });
});
