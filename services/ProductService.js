const resource = `api/movieproduct`;
export default ({$axios}, inject) => {
    inject('getProductHomePageTop', async (param) => await $axios.get(`${resource}/ListHomePageTop`, {params:param}))
    inject('getProductHomePageCenter', async (param) => await $axios.get(`${resource}/ListHomePageCenter`, {params:param}))
    inject('getEpisodeByEpisodeNumber', async (param) => await $axios.get(`${resource}/GetEpisodeByEpisodeNumber`, {params:param}))
}