// const axios = require("axios");
// const { expect } = require("chai");

// describe("GET API Request Tests", async () => {
//     it("should be able get user list", async () => {
//         const res = await axios.get('https://reqres.in/api/users?page=2');
//         console.log(res.data);
//         expect(res.data.page).equal(2);
//         expect(res.data.per_page).equal(6);
//     })
// });


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