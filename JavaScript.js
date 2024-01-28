
class AppSidebarButton extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {
      const template = document.getElementById('Mailbutton');
      const clone = document.importNode(template.content, true);
      this.shadowRoot.appendChild(clone);


        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'styles.css';
        this.shadowRoot.appendChild(link);


        const text = this.getAttribute('text');
        const unreadCount = this.getAttribute('unreadcount');

        this.shadowRoot.querySelector('h3').innerText = text;
    }
}

window.customElements.define('app-sidebar-button', AppSidebarButton);