import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const state = {
    todo: true,
};

const store = () =>
    new Vuex.Store({
        state,
        actions,
        getters,
        mutations,
    });

export default store;
