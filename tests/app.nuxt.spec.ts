
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

