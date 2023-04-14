import { createStore } from 'vuex';

import state from '@/store/state';
import * as getters from '@/store/getters';
import * as mutations from '@/store/mutations';

export default createStore({
  state,
  getters,
  mutations,
});
