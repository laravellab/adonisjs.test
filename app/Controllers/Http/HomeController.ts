import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class HomeController {
  public async index ({ response }: HttpContextContract) {
    // const user = await User.query().where('id', 1)
    //   .preload('products', (productsQuery) => {
    //     productsQuery.select('*').preload('media')
    //   }).first()
    const user = await User.find(1)
    await user?.load('products', async (builder) => {
      builder.preload('media', (mediaBuilder) => {
        mediaBuilder.select('*')
      })
    })
    await user?.load('products', async (builder) => {
      // builder.preload('media', (mediaBuilder) => {
      //   mediaBuilder.select('*')
      // })
    })
    return response.json({
      view: 'Welcome',
      user: user,
    })
  }

  public async create ({ }: HttpContextContract) { }

  public async store ({ }: HttpContextContract) { }

  public async show ({ }: HttpContextContract) { }

  public async edit ({ }: HttpContextContract) { }

  public async update ({ }: HttpContextContract) { }

  public async destroy ({ }: HttpContextContract) { }
}
