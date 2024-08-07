import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

describe('Just make success', () => {
    it('Success test', () => {
        assert.deepStrictEqual(true, true)
    })
})