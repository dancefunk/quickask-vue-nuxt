export const useHttp = async (opts) => {
  var opts = opts || {};
  
  const config = useRuntimeConfig()

  let result = await useFetch(opts.url, { baseURL: config.public.baseURL, ...opts })

  return result.data.value
}