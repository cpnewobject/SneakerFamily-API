import send from '../config/MailConfig'
import mement from 'moment'

class LoginController {
    constructor () {}
    async forget(ctx) {
        const { body } = ctx.request
        console.log(body)
        try {
            // body.username -> database -> email
            let result = await send({
                code: '1234',
                expire: mement().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                email: body.username,
                user: 'chenpeng'
            })
            ctx.body = {
                code: 200,
                data: result,
                msg: '邮件发送成功！'
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export default new LoginController()