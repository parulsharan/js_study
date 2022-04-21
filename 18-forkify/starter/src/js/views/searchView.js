class SearchView {
  #parentEL = document.querySelector('.search');
  getquery() {
    return this.#parentEL.querySelector('.search_field').value;
  }
  addHandlerSearch(handler) {
    this.#parentEL.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
