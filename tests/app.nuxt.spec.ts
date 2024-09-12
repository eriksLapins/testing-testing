
import { registerEndpoint, renderSuspended } from '@nuxt/test-utils/runtime'
import App from '../app.vue';

import { describe, expect, it } from 'vitest';
import { $fetch as $utilsFetch, createTestContext, setup } from '@nuxt/test-utils/e2e';


registerEndpoint('/some/test/endpoint', () => ({
  test: 'test-field'
}))

describe('App nuxt', async () => {
  createTestContext({})
  it('fetch that doesn\'t work with registerEndpoint', async () => {
      const response = await $utilsFetch('/some/test/endpoint');

      expect(JSON.stringify(response)).toBe(JSON.stringify({data: {
          some: 'test-field'
      }}))
  });
  it('fetch that works with registerEndpoint', async () => {
      const response = await $fetch('/some/test/endpoint')

      expect(JSON.stringify(response)).toBe(JSON.stringify({data: {
          some: 'test-field'
      }}));
  })
  it('renders the app', async () => {
      const component = await renderSuspended(App, { route: '/' })
      expect(component.html()).toMatchInlineSnapshot('Hello test-field');
  })
})

