import imageLoader from '@/libs/imageLoader'
import faker from 'faker'

describe('imageLoader', () => {
  beforeEach(() => {})
  test('returns a promise', () => {
    expect(imageLoader()).toBeInstanceOf(Promise)
  })

  test('resolves when image loaded', async () => {
    class Image {
      constructor() {
        setTimeout(() => this.onload(), 10)
      }
    }

    global.Image = Image

    await expect(imageLoader(faker.internet.url())).resolves.toBeUndefined()
  })

  test('rejects when image load fails', async () => {
    class Image {
      constructor() {
        setTimeout(() => this.onerror(new Error(faker.lorem.sentence())), 10)
      }
    }

    global.Image = Image

    await expect(imageLoader(faker.internet.url())).rejects.toThrow()
  })
})
