import yaml from 'yaml'

export const getConfig = async () => {
  const isProduction = process.env.NODE_ENV !== 'development'
  const path = isProduction ? '/micro/epipeline-customer-manage-system/' : '/'
  const response = await fetch(path + 'config.yaml')
  console.log('yaml file: ', response)
  if (!response.ok) {
    throw new Error('Failed to fetch config')
  }

  const text = await response.text()
  const config = yaml.parse(text)

  return config
}
