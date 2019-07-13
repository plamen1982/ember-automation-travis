import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sample-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<SampleComponent />`);
    assert.equal(this.element.querySelector('h1').textContent.trim(), 'Hello!!!');
    assert.equal(this.element.querySelector('p').textContent.trim(), 'I am a test!');
  });
});
