import 'regenerator-runtime/runtime'
import { html, LitElement, customElement, property } from 'lit-element'

/**
 * This component is referenced within the page symbol
 */
@customElement('c6o-login')
export class Login extends LitElement {

    render() {
        return html`
            <p>Hey I'm login</p>
        `
    }
}

/**
 * the test-app-component can be used to load any named symbol from builder.io
 */
@customElement('test-app-component')
export class Component extends LitElement {

    @property({type: String})
    name

    render() {
        return html`
            <builder-component
                name=${this.name}
                api-key="e889f09fd60f4c0ea34d2538e0096f38">
                <p>Loading...</p>
            </builder-component>
        `
    }
}

@customElement('test-nav-bar')
export class NavBar extends LitElement {

    render() {
        return html`
            <test-app-component name="nav-bar"></test-app-component>
        `
    }
}

@customElement('test-page')
export class Page extends LitElement {

    render() {
        return html`
            <test-app-component name="page"></test-app-component>
        `
    }

    // createRenderRoot() {
    //     return this
    // }
}
