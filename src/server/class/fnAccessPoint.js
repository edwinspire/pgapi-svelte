//const Router = require("express-promise-router");
const db = require("./pgexpress");
const { Token } = require("./Tokendb");
const { Response } = require("./Response");
export class AccessPoint {
  constructor(custom_response) {
    if (!(custom_response.prototype instanceof Response)) {
      throw new Error("custom_response must be instance of Response");
    }
    this.pgAPIEndPoints = [];
    this.CustomResponse = new Response();
    this.TokenDB = new Token();
    if (custom_response) {
      this.CustomResponse = new custom_response();
    }
  }

  async _pgAPIEndPoints() {
    let query = {
      name: 'api.view_endpoints_methods',
      text: `SELECT * FROM api.view_endpoints_methods WHERE endpoint_enabled = TRUE AND method_enabled = TRUE;`,
      values: [],
    };
    let respg = await db.query(query);
    console.log(idata, respg.rows);
  }

  async Middleware(req, res, next) {
    if (!req.originalUrl.startsWith("/pgapi")) {
      next();
    } else {
      try {

        let user = await this.TokenDB.getUserFromRequest(req);

        const myURL = new URL("https://" + req.hostname + req.originalUrl);
        //console.log(myURL);
        let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

        let idata = {
          cookies: req.cookies,
          body: req.body,
          query: req.query,
          method: req.method,
          pathname: myURL.pathname,
          ipclient: ip,
          headers: req.headers,
          user: user,
          //  token: toke_user
        };

// Obtener el endpoind



        let query = {
          name: idata.method,
          text: `SELECT api.fn_access_point($1::JSON)`,
          values: [JSON.stringify(idata)],
        };
        let respg = await db.query(query);
        //console.log(idata, respg.rows);
        if (respg.rows.length > 0) {
          let r = respg.rows[0].fn_access_point;

          if (r.status == "401") {
            res.cookie(
              "TOKEN_USER",
              {},
              {
                expire: 1,
              }
            );

            res.status(401).location("/").end();
          } else if (r.data && r.data.EXECUTE) {
            this.CustomResponse.execute(r.data.EXECUTE, r.data, req, res);
          } else {
            res.status(r.status).json(r.data);
          }
        } else {
          res.status(204).json([]);
        }
      } catch (e) {
        console.trace(e);
        res.status(500).json(e);
      }
    }
  }
}
