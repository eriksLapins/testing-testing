import {it, expect, describe} from 'vitest';
import { $fetch as $utilsFetch, createTestContext, setup } from '@nuxt/test-utils/e2e';
import { renderSuspended } from '@nuxt/test-utils/runtime';
import App from '../app.vue';

describe('App e2e', async () => {
    createTestContext({})
    it('fetch that doesn\'t work with registerEndpoint', async () => {
        const response = await $utilsFetch('/some/test/endpoint');
        console.log('utils response', response);
        expect(JSON.stringify(response)).toBe(JSON.stringify({data: {
            some: 'test'
        }}))
    });
    it('fetch that works with registerEndpoint', async () => {
        const response = await $fetch('/some/test/endpoint')

        console.log('fetch response', response);
        expect(JSON.stringify(response)).toBe(JSON.stringify({data: {
            some: 'test'
        }}));
    })

    it('renders the app', async () => {
        const component = await renderSuspended(App, { route: '/' })
        expect(component).toBeDefined();
    })
})