export default class View {
  _data; // data is recipe here
  render(data) {
    this._data = data;
    this._clear();

    const markup = this._genrateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    const markup = `
      <div class="spinner">
      <svg>
        <use href="src/img/icons.svg_icon-loader"></use>
      </svg>
    </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderError(message) {
    const markup = ` <div class="error">
                              <div>
                                <svg>
                                  <use href="${icons}svg_icon-alert-triangle"></use>
                                </svg>
                              </div>
                              <p>${message}</p>
                            </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  rendermessage(message) {
    const markup = ` <div class="message">
                              <div>
                                <svg>
                                  <use href="${icons}svg_icon-smile"></use>
                                </svg>
                              </div>
                              <p>${message}</p>
                            </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
