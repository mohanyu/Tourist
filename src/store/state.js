let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}

export default {
  // city: '上海'
  city: defaultCity //  默认值优先从localStorage中获取
}
