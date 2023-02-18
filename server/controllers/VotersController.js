import { Auth0Provider } from "@bcwdev/auth0provider";
import { votersService } from "../services/VotersService.js";
import BaseController from "../utils/BaseController.js";


export class VotersController extends BaseController {
  constructor() {
    super('api/voters')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/upvoters', this.beUpVoter)
      .post('/downvoters', this.beDownVoter)
  }
  async beDownVoter(req, res, next) {
    try {
      const user = req.userInfo
      req.body.voterId = user.id
      const voter = await votersService.beDownVoter(req.body)
      return res.send(voter)
    } catch (error) {
      next(error)

    }
  }
  async beUpVoter(req, res, next) {
    try {
      const user = req.userInfo
      req.body.voterId = user.id
      const voter = await votersService.beUpVoter(req.body)
      return res.send(voter)
    } catch (error) {
      next(error)
    }
  }
}