import FilterView from '../view/filter-view.js';
import { render } from '../framework/render.js';

export default class FilterPresenter {
  #container = null;
  #filterModel = null;
  #tripModel = null;
  #view = null;

  constructor(container, filterModel, tripModel) {
    this.#container = container;
    this.#filterModel = filterModel;
    this.#tripModel = tripModel;
  }

  init() {
    this.#refresh();
    this.#tripModel.addObserver(() => this.#refresh());
    this.#filterModel.addObserver(() => this.#refresh());
  }

  #refresh() {
    const filters = this.#tripModel.getFilters();
    const newView = new FilterView(filters);
    newView.setFilterChangeHandler((filterType) => {
      this.#filterModel.setFilter(filterType);
    });
    if (this.#view) {
      this.#view.element.replaceWith(newView.element);
      this.#view.removeElement();
    } else {
      render(newView, this.#container);
    }
    this.#view = newView;
  }
}
