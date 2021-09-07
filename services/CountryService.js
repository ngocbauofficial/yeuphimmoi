const resource = `api/moviecountry`;
export default ({$axios}, inject) => {
    inject('getCountryNavigation', async (param) => await $axios.get(`${resource}/List`,{params:param}))
   
}