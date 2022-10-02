Detects the preferred language of the current user.

- Use `Navigator.language` or the first value of `Navigator.languages` if available, otherwise return `defaultLang`.
- Omit the second argument, `defaultLang`, to use `'en-US'` as the default language code.