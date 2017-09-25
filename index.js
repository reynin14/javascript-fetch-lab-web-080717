function getIssues() {
  let token = getToken();
  const repo = 'reynin14/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    },
  }).then(res => res.json())
  .then(json => console.log(json))
}

function showIssues(json) {
}

function createIssue() {
  let token = getToken()
  const repo = 'reynin14/javascript-fetch-lab'
  let body = document.getElementById('body').value
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    },
    method: 'post',
    body: JSON.stringify(body)
  }).then(res => res.json())
  .then(json => console.log(json))
  debugger
}

function showResults(json) {
  const issueDiv = document.querySelector()
}

function forkRepo() {
  let token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/fork`, {
    headers: {
      Authorization: `token ${token}`
    },
    method: 'post'
  }).then(res => res.json())
  .then(json => console.log(json));
}

function showForkedRepo(resp){

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
