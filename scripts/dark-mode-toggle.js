const template = document.createElement('template');
template.innerHTML = `
<style>
input[type="checkbox"] {
  opacity: 0;
  position: absolute;
}

.label {
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

.ball {
  width: 16px;
  height: 16px;
  background-color: var(--color-bg);
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

input[type="checkbox"]:checked+.label .ball {
  transform: translateX(15px);
}

.dark-label,
.light-label {
  font-size: 12px;
  font-weight: 400;
  color: var(--color-bg);
  font-family: var(--font-fam-headings);
}
</style>
<div>
  <input type="checkbox" id="dm-toggle">
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
    this.$toggle = this.shadowRoot.querySelector('input[type="checkbox"]')
    this.prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.setDarkModeEnabled(this.getInitialValue());

    this.$toggle.addEventListener('change', (e) => {
      this.setDarkModeEnabled(e.target.checked);
    });

    this.prefersDark.addListener((evt) => {
      this.setDarkModeEnabled(evt.matches);
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
    this.$toggle.checked = value;
    document.documentElement.classList.toggle(this.darkmodeClass, value);
    localStorage.setItem(this.key, JSON.stringify(value));
  }

}

window.customElements.define('dark-mode-toggle', DarkModeToggle);
