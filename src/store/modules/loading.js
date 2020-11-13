const loading = {
  state: {
    isloading: false
  },
  mutations: {
    setIsLoading(state, isloading) {
      state.isloading = isloading;
    }
  },
  actions: {
    setIsLoading(state, isloading) {
      state.commit("setIsLoading", isloading);
    }
  },
  getters: {
    loaded(state) {
      return state.isloading;
    }
  }
};
export default loading;
