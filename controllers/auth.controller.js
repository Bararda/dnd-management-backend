const { genericController } = require("../util");
const { authService } = require("../util/auth")
const  authController  = {
    login: genericController.post(authService.login),

}
module.exports = authController;