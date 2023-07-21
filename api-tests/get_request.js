const axios = require("axios");
const { expect } = require("chai");

describe("GET API Request Tests", async () => {
    it("should be able get user list", async () => {
        const res = await axios.get('https://reqres.in/api/users?page=2');
        console.log(res.data);
        expect(res.data.page).equal(2);
        expect(res.data.per_page).equal(6);
    })
})