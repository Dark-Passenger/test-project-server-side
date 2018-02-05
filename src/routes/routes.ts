import { Router, Request, Response, NextFunction } from 'express';

export class APIRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getHandler(request: Request, response: Response, next: NextFunction) {
      response.send({
          name : "dhruv"
      });
    }

  public postHandler(request: Request, response: Response, next: NextFunction) {
      let data = request.body;
      data['msg'] = 'this msg was modified';
      response.send(data);
    }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getHandler)
        .post('/', this.postHandler);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const routes = new APIRouter();
routes.init();

export default routes.router;