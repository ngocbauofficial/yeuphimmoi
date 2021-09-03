const resource = `api/moviecategory`;
export default ({$axios}, inject) => {
    inject('getCategoryNavigation', async (param) => await $axios.post(`${resource}/List`,param))
   
}