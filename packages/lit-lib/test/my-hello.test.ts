import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { MyHello } from '../src/MyHello.js';
import '../src/my-hello.js';

describe('MyHello', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<MyHello>(html`<my-hello></my-hello>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MyHello>(html`<my-hello></my-hello>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<MyHello>(html`<my-hello header="attribute header"></my-hello>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MyHello>(html`<my-hello></my-hello>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
