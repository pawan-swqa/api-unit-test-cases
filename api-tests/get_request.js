const axios = require("axios");
const { expect } = require("chai");

describe("GET API Request Tests", async () => {
    it("should be able get test data as test and status code as 200", async () => {
        const res = await axios.get('http://localhost:3000/api/v1/test/get-api/test');
        console.log(res.data , 'response==============');
        expect(res.data.data).equal('testData');
        expect(res.data.code).equal(200);
        expect(res.data.status).equal('success');
    })
})