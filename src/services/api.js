import get from "lodash/get"

const apiUrl = process.env.GATSBY_API_URL || "http://localhost:3000"

async function getUser() {
  let resp
  try {
    resp = await fetch(`${apiUrl}/user`, {
      credentials: "include",
    })
  } catch (error) {
    console.error(`[API_ERROR] Fail to fetch user`, error)
    return null
  }

  if (resp.status !== 200) {
    return null
  }

  let user
  try {
    const data = await resp.json()
    user = data.result
  } catch (error) {
    console.error(`[API_ERROR] Invalid response format`, error)
    return null
  }

  return user
}

async function updateUser(user) {
  let resp

  try {
    resp = await fetch(`${apiUrl}/subscribe`, {
      method: "POST",
      body: JSON.stringify(user),
      credentials: "include",
    })
  } catch (error) {
    console.error("[OPENSOURCE] Fail to save user data", error)
    return null
  }

  if (resp.status !== 201) {
    return null
  }

  const data = await resp.json()
  return data.result
}

async function getEdition() {
  let resp

  try {
    resp = await fetch(`${apiUrl}/edition`)
  } catch (error) {
    console.error("[OPENSOURCE] Fail to fetch edition", error)
    return null
  }

  if (resp.status !== 200) {
    return null
  }

  const data = await resp.json()
  return data.result
}

async function getCoders() {
  let resp

  try {
    resp = await fetch(`${apiUrl}/status`)
  } catch (error) {
    console.error("[OPENSOURCE] Fail to fetch coders", error)
    return null
  }

  if (resp.status !== 200) {
    return null
  }

  const data = await resp.json()
  return data.result
}

async function haveOpenEdition(){
  try{
    //const resp  = await fetch(`${apiUrl}/haveOpenEdition`)
    //const data = await resp.json()
    return true;
  }catch(error){
    return false;
  }

  return false;
}

async function getProjects() {
  const { projects } = (await getEdition()) || []
  const data =
    (projects || []).map((project, index) => {
      let base = {
        id: index,
        name: project.name,
        shortDescription: project.description,
        featured: project.featured,
        repoURL: project.repositoryUrl,
        siteURL: project.website,
        docsURL: project.documentationUrl,
        image: {
          publicURL: project.imageUrl,
        },
      }
      if (project.featured) {
        base.repoNumbers = {
          stars: get(project, "stats.repository.stars.totalCount", 0),
          prs: get(project, "stats.repository.pullRequests.totalCount", 0),
          issues: get(project, "stats.repository.issues.totalCount", 0),
          commits: get(
            project,
            "stats.repository.object.commit.history.totalCount",
            0
          ),
        }
      }
      return base
    }) || []
  return data
}

export { getUser, updateUser, getCoders, getEdition, getProjects, haveOpenEdition }
