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

const updateUser = async user => {
  let resp

  try {
    resp = await fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
    })
  } catch (error) {
    console.error('[OPENSOURCE] Fail to post', error)
  }

  if (resp.status !== 201) {
    return null
  }

  const data = await resp.json()
  return data.result
}

export { getUser, updateUser }
