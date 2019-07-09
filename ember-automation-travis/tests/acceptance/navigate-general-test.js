import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | navigate /general', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /general', async function(assert) {
    await visit('/general');
    assert.equal(this.element.querySelector('h3').textContent.trim(), 'General');
    assert.equal(currentURL(), '/general');
  });
});
