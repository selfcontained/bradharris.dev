const template = document.createElement('template');
template.innerHTML = `
<style>
.container {}

.container .checkbox {
  opacity: 0;
  position: absolute;
}

.container .label {
  width: 25px;
  height: 10px;
  background-color: var(--color-text);
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
}

.container .ball {
  width: 16px;
  height: 16px;
  background-color: var(--color-bg);
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.container .checkbox:checked+.label .ball {
  transform: translateX(15px);
}

.container .dark-label,
.container .light-label {
  font-size: 12px;
  font-weight: 400;
  color: var(--color-bg);
  font-family: var(--font-fam-headings);
}
</style>
<div class="container">
  <input type="checkbox" class="checkbox" id="dm-toggle">
  <label for="dm-toggle" class="label">
    <div class='ball'></div>
    <span class="dark-label">D</span>
    <span class="light-label">L</span>
  </label>
</div>
`;
class DarkModeToggle extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$container = this.shadowRoot.querySelector('.container');
    this.$toggle = this.shadowRoot.querySelector('input[type="checkbox"]')

    this.prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    this.darkModeEnabled = this.getInitialValue();

    this.$toggle.checked = this.darkModeEnabled;
    this.setDarkModeEnabled(this.darkModeEnabled);

    this.$toggle.addEventListener('change', () => {
      this.setDarkModeEnabled(!this.darkModeEnabled);
    });
  }

  getInitialValue() {
    const storageSetting = localStorage.getItem(this.key);

    let initialValue = false
    // use whatever is in storage if present
    if(storageSetting !== null) {
      initialValue = storageSetting === "true";
    }else {
      // otherwise fall back to os preferences
      initialValue = this.prefersDark.matches;
    }

    return initialValue;
  }

  get key() {
    return this.getAttribute('key');
  }

  get darkmodeClass() {
    return this.getAttribute('darkmode-class');
  }

  setDarkModeEnabled(value) {
    this.darkModeEnabled = value;

    document.documentElement.classList.toggle(this.darkmodeClass, value);
    localStorage.setItem(this.key, JSON.stringify(value));
  }

}

window.customElements.define('dark-mode-toggle', DarkModeToggle);
