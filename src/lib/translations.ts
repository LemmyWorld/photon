import i18n, { type Config } from 'sveltekit-i18n'

const config: Config = {
  loaders: [
    {
      locale: 'en',
      key: '',
      loader: async () => (await import('./i18n/en.json')).default,
    },
    {
      locale: 'et',
      key: '',
      loader: async () => (await import('./i18n/et.json')).default,
    },
    {
      locale: 'fi',
      key: '',
      loader: async () => (await import('./i18n/fi.json')).default,
    },
    {
      locale: 'fr',
      key: '',
      loader: async () => (await import('./i18n/fr.json')).default,
    },
    {
      locale: 'de',
      key: '',
      loader: async () => (await import('./i18n/de.json')).default,
    },
    {
      locale: 'he',
      key: '',
      loader: async () => (await import('./i18n/he.json')).default,
    },
    {
      locale: 'pt',
      key: '',
      loader: async () => (await import('./i18n/pt.json')).default,
    },
    {
      locale: 'zh-Hans',
      key: '',
      loader: async () => (await import('./i18n/zh-Hans.json')).default,
    },
    {
      locale: 'zh-Hant',
      key: '',
      loader: async () => (await import('./i18n/zh-Hant.json')).default,
    },
  ],
  fallbackLocale: 'en',
}

export const aliases = new Map([
  ['zh-CN', 'zh-Hans'],
  ['zh-TW', 'zh-Hant'],
  ['en-US', 'en'],
  ['en-GB', 'en'],
  ['en-AU', 'en'],
  ['en-CA', 'en'],
  ['fr-FR', 'fr'],
  ['fr-CA', 'fr'],
  ['fr-BE', 'fr'],
  ['de-DE', 'de'],
  ['de-AT', 'de'],
  ['de-CH', 'de'],
  ['pt-BR', 'pt'],
  ['pt-PT', 'pt'],
  ['fi-FI', 'fi'],
  ['et-EE', 'et'],
  ['he-IL', 'he'],
])

export const { t, locale, locales, loading, loadTranslations } = new i18n(
  config
)
