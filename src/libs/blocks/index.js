import config from '@/config'

export const getBlockTypes = () => Object.keys(config.blocks)
export const getBlockLabel = blockType => config.blocks[blockType].label
export const getBlockIcon = blockType => config.blocks[blockType].icon
export const getBlockDescription = blockType =>
  config.blocks[blockType].description
