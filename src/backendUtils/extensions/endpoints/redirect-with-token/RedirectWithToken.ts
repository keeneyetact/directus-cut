/**
 Create the file: extensions/endpoints/redirect-with-token/index.js

 const directusCut = require('directus-cut');
 module.exports = function registerEndpoint(router) {
    directusCut.RedirectWithToken.configureRouter(router);
 };

 For example: https://<PUBLIC_URL>/api/auth/login/<AUTH_PROVIDER>?redirect=https://<PUBLIC_URL>/api/redirect-with-token?redirect=http://127.0.0.1?access_token=
 This will get the access_token and will redirect the user to:
 http://127.0.01?access_token=XXXXXXXXX
 */
export default class RedirectWithToken {
  private static configureRouter(router: any) {
    router.get('/', (req: any, res: any) => {
      const refresh_token = req.cookies.directus_refresh_token;
      const redirect = req.query.redirect;
      const redirectURL = redirect + refresh_token;
      res.redirect(redirectURL);
    });
  }

  static registerEndpoint() {
    return RedirectWithToken.configureRouter.bind(null);
  }
}
