const cds = require('@sap/cds');
const { GET }= cds.test();
const { expect } = require("chai");
const e = require('express');

describe('getAllNouns', () => {
  it('should return words which are nouns', async () => {
    const {data,status} = await GET('/dictionary/getAllNouns()');
    expect(status).to.equal(200);
    expect(data.value).to.be.an('array');
  })
})