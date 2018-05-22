const processPost = post => ({
  thumbnailUrl: post.thumbnail,
  title: post.document.title,
  url: post.document.url,
  siteLogoUrl: post.document.site.logos['150x150'],
})

export const fetchFeed = async () => {
  const response = await fetch(
    'https://sphere-dev.outbrain.com/api/v1/recommendations/documents?limit=10',
    {
      method: 'GET',
      headers: {Authorization: 'API_KEY c2e75315550543fdbf0a85e9a96a458e'},
    })
  const results = await response.json()
  let resultsArray = results.items.map(processPost)
  return resultsArray
}
