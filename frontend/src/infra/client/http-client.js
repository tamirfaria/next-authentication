export async function httpClient(url, options) {
  return fetch(url, {
    ...options,
    headers: { ...options.headers, "Content-Type": "application/json" },
    body: options.body ? JSON.stringify(options.body) : null,
  }).then(async (response) => ({
    ok: response.ok,
    body: await response.json(),
  }));
}
