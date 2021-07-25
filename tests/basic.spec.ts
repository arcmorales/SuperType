import supertest from 'supertest'
import Ajv from 'ajv'
import { expect } from 'chai'

const ajv = new Ajv()

const schema = {
    "type": "array",
    "additionalItems": true,
    "items": {
        "type": "object",
        "required": [
            "id"
        ],
        "properties": {
            "title": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "ingredients": {
                "type": "array",
                "additionalItems": true,
                "items": {
                    "type": "string"
                }
            },
            "id": {
                "type": "integer"
            }
        },
        "additionalProperties": true
    }
}



describe('Sample API call', () => {
  it('sample it block', async () => {
    const response = await supertest('https://api.sampleapis.com').get('/coffee/iced')
    const schemaReference = ajv.compile(schema)
    const valid = schemaReference(response.body)
    console.log(`ajv ${valid}`)
    console.log(schemaReference.errors)

    expect(valid).to.equal(true)
    expect(response.status).to.equal(200)
  })
})
