import { MariaDB } from '../model'
import { isValid } from '../asset/utils'

const router = require('express').Router()
const mariaDB = new MariaDB()

router.post('/', (req, res) => {
    const email = req.query.email
    const password = req.query.password

    if (!isValid(email) || !isValid(password)) {
        res.send('Please enter your email and password correctly')
    } else {
        mariaDB.findUserSync(email, password).then(objUser => {
            if (!objUser) {
                res.send('Wrong email or password. please check again')
                return
            }

            res.send(`로그인 페이지에 오신것을 환영 합니다.: ${JSON.stringify(objUser)} `)
        })
    }
})

router.get('/', (req, res) => {
    res.send(`This is the logout page.`)
})

module.exports = router;
