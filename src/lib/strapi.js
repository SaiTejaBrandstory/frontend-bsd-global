function buildUrl(path) {
  const baseUrl = process.env.STRAPI_URL ?? 'http://localhost:1337'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}

export async function fetchFromStrapi(path, { init = {}, revalidate = 0 } = {}) {
  try {
  const headers = {
    'Content-Type': 'application/json',
    ...(process.env.STRAPI_API_TOKEN
      ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }
      : {}),
    ...init.headers,
  }

  const response = await fetch(buildUrl(path), {
    ...init,
    headers,
    cache: 'no-store', // Disable caching completely
    next: { revalidate, ...(init.next ?? {}) },
  })

  if (!response.ok) {
    // Return null for 404 (content not found/unpublished) or 403 (permissions not configured) instead of throwing
    if (response.status === 404 || response.status === 403) {
        // 404 is expected when content is unpublished - don't log error
        return null
      }
      // Log errors only for actual server errors (500, 400)
      if (response.status === 500 || response.status === 400) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Strapi request issue (${response.status}): ${response.statusText}. URL: ${buildUrl(path)}`);
        }
      return null
    }
    throw new Error(`Strapi request failed: ${response.status} ${response.statusText}`)
  }

  return response.json()
  } catch (error) {
    // Handle network errors (ECONNREFUSED, timeout, etc.) gracefully
    // Return null instead of throwing to allow the app to continue
    if (error.code === 'ECONNREFUSED' || error.message?.includes('fetch failed')) {
      return null
    }
    // Re-throw other errors
    throw error
  }
}
