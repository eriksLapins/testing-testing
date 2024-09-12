import {it, expect, describe} from 'vitest';
import { registerEndpoint } from '@nuxt/test-utils/runtime';
import { $fetch as $utilsFetch, createTestContext, setup } from '@nuxt/test-utils';

createTestContext({
    browser: false
})

registerEndpoint('/some/test/endpoint', () => ({
    data: {
        some: 'test'
    }
}))

describe('App', async () => {
    it('fetch that doesn\'t work with registerEndpoint', async () => {
        const response = await $utilsFetch('/some/test/endpoint');
        console.log('utils response', response);
        expect(JSON.stringify(response)).toBe(JSON.stringify({data: {
            some: 'test'
        }}))
    })
})

describe('App 2', async () => {
    it('fetch that works with registerEndpoint', async () => {
        const response = await $fetch('/some/test/endpoint')

        console.log('fetch response', response);
        expect(JSON.stringify(response)).toBe(JSON.stringify({data: {
            some: 'test'
        }}));
    })
})