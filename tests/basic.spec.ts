import supertest from 'supertest'
import { expect } from 'chai'

describe('Sample API call', () => {
  it('sample it block', async () => {
      
    let response = await supertest('https://api.sampleapis.com').get('/coffee/iced')
    
    // console.log(JSON.stringify(response))
    expect(response.status).to.equal(200)
  })
})
