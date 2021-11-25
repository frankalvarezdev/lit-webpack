import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('main-app')
class App extends LitElement {
	constructor() {
		super();
	}
	static styles = css`
		h1 {
			background-color: peru;
			padding: 0.8rem;
			border-radius: 0.5rem;
			color: #fff;
		}
	`
	render() {
		return html`
			<h1>Hola mundo</h1>
		`;
	}
}