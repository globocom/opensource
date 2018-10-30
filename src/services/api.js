const getUser = async () => {
  let resp

  try {
    resp = await fetch('/user')
  } catch (error) {
    console.error('[OPENSOURCE] Fail to fetch', error)
  }

  if (resp.status !== 200) {
    return null
  }

  const data = await resp.json()
  return data.result
}

export { getUser }
