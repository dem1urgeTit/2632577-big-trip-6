import TripModel from './model/trip-model.js';
import FilterModel from './model/filter-model.js';
import TripPresenter from './presenter/trip-presenter.js';
import FiltersPresenter from './presenter/filter-presenter.js';
import Api from './api.js';

const api = new Api();

const tripEventsSection = document.querySelector('.trip-events');
const tripInfoContainer = document.querySelector('.trip-main__trip-info');

const tripModel = new TripModel(api);
const filterModel = new FilterModel();

const filtersContainer = document.querySelector('.trip-controls__filters');
const filtersPresenter = new FiltersPresenter(filtersContainer, tripModel);
filtersPresenter.init();

const tripPresenter = new TripPresenter(tripModel, filterModel);
tripPresenter.init();
