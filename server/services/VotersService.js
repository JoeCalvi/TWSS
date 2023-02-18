import { dbContext } from "../db/DbContext.js"

class VotersService {


  async beDownVoter(body) {
    const voter = await dbContext.Downvoters.create(body)
    return voter
  }


  async beUpVoter(body) {
    const voter = await dbContext.Upvoters.create(body)
    return voter
  }



}




export const votersService = new VotersService()