export default {
  changeCity (state, city) {
    //  state.city等于传入进来的city
    state.city = city
    try {
      //  当用户尝试去改变city时，
      localStorage.city = city
    } catch (e) {}
  }
}
