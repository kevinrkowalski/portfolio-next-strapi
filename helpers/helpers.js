// Fetch data from Database
export const fetchDb = async (endpoint, options) => {
  options = {
    ...options,
    headers: new Headers({
      'Authorization': `Bearer ${process.env.AUTH_TOKEN}`
    })
  }
  const url = process.env.API_URL + endpoint
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

// Convert long text or descriptions into excerpts. Length is equal to the number of sentences to return.
export const getExcerpt = (content, length = 2) => content.split('.').slice(0, length).join('.') + '.'

const isValidUrl = url => {
  try {
    return Boolean(new URL(url))
  } catch (error) {
    return false;
  }
}

// Prefix source url if relative
export const prefixServerUrl = (url) => {
  if (!isValidUrl(url)) {
    return process.env.NEXT_PUBLIC_SERVER_URL + url
  }
  return url
}

// Prefix site url
export const prefixSiteUrl = (url) => process.env.NEXT_PUBLIC_SITE_URL + url