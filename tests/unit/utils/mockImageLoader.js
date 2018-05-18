import faker from 'faker'

export default () => {
  const imagePromise = {
    _then: [],
    _catch: [],
    then: fn => {
      imagePromise._then.push({ fn, ctx: this })
      return imagePromise
    },
    catch: fn => {
      imagePromise._catch.push({ fn, ctx: this })
      return imagePromise
    }
  }

  const imageLoader = () => imagePromise

  imageLoader.resolve = () =>
    imagePromise._then.forEach(fn => fn.fn.call(fn.ctx))

  imageLoader.reject = () =>
    imagePromise._catch.forEach(fn =>
      fn.fn.call(fn.ctx, new Error(faker.lorem.sentence()))
    )

  return imageLoader
}
