import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

describe('Just make fail', () => {
    it('Fail test', () => {
        assert.deepStrictEqual(true, false)
    })
})