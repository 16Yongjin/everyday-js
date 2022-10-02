export type SnippetData = ReturnType<typeof parseSnippet>

export const parseDescription = (snippet: string) => {
  const lines = snippet.split('\n')

  const endOfMeta = lines.indexOf('---', 1)
  const startOfCode = lines.indexOf('```js')

  const description = lines.slice(endOfMeta + 1, startOfCode - 1).join('\n').trim()
  return description
}

export const parseCode =  (snippet: string) => {
  const lines = snippet.split('\n')
  const startOfCode = lines.indexOf('```js')
  const endOfCode = lines.indexOf('```', startOfCode + 1)

  const code = lines.slice(startOfCode + 1, endOfCode).join('\n').trim()
  return code
}

export const parseExample = (snippet: string) => {
  const lines = snippet.split('\n')
  const startOfCode = lines.indexOf('```js')
  const startOfExample = lines.indexOf('```js', startOfCode + 1)
  const endOfExample = lines.indexOf('```', startOfExample + 1)

  const example = lines.slice(startOfExample + 1, endOfExample).join('\n').trim()
  return example
}

export const parseSnippet = (snippet: string) => {
  return { 
    description: parseDescription(snippet), code: parseCode(snippet), example: parseExample(snippet) }
}
