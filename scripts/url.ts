export const createTranslateUrl = (text: string) => `https://translate.google.co.kr/?hl=ko&sl=en&tl=ko&text=${encodeURIComponent(text)}&op=translate`

export const createCarbonUrl = (code: string) =>
  `https://carbon.now.sh/?bg=rgba(171,%20184,%20195,%201)&t=material&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=10px&ph=9px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&ts=false&code=${encodeURIComponent(code)}`

export const createSnippetUrl = (codeName: string) => `/snippets/${codeName}.md`

export const createGithubUrl = (codeName: string) => `https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/${codeName}.md`
