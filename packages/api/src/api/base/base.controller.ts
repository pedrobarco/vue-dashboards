import { Response } from "express";
import { BaseModel } from "./base.model";

/**
 * Class representing a base controller.
 */
export abstract class BaseController {
  /**
   * Constructor for a request response.
   *
   * @param res - The express response object.
   * @param statusCode - The http response status code.
   * @param models - The models to be sent.
   * @returns The json response with the status code and serialized models.
   */
  private static sendJson<
    Model extends BaseModel<BaseModelProps, SerializedObject>,
    BaseModelProps,
    SerializedObject
  >(res: Response, statusCode: number, models?: Model | Model[]): Response {
    const result = (): SerializedObject | SerializedObject[] | null => {
      if (models && models instanceof Array) {
        return models.map(m => m.serialize());
      }
      if (models) {
        return models.serialize();
      }
      return null;
    };
    return res.status(statusCode).json(result());
  }

  /**
   * Sends a response that says the request was successful.
   *
   * @param res - The express response object.
   * @param models - The found models.
   * @returns The json response with the 200 status code.
   */
  protected static success<
    Model extends BaseModel<BaseModelProps, SerializedObject>,
    BaseModelProps,
    SerializedObject
  >(res: Response, models: Model | Model[]): Response {
    return BaseController.sendJson(res, 200, models);
  }

  /**
   * Sends a response that says the resource was created successfully.
   *
   * @param res - The express response object.
   * @param models - The created models.
   * @returns The json response with the 201 status code.
   */
  protected static created<
    Model extends BaseModel<BaseModelProps, SerializedObject>,
    BaseModelProps,
    SerializedObject
  >(res: Response, models: Model | Model[]): Response {
    return BaseController.sendJson(res, 201, models);
  }

  /**
   * Sends a response that says taht the resource wasn't found.
   *
   * @param res - The express response object.
   * @returns The json response with the 404 status code.
   */
  protected static notFound(res: Response): Response {
    return BaseController.sendJson(res, 404);
  }

  /**
   * Sends a response that says there was a server error.
   *
   * @param res - The express response object.
   * @returns The json response with the 500 status code.
   */
  protected static serverError(res: Response): Response {
    return BaseController.sendJson(res, 500);
  }

  /**
   *
   * Permit to send a dynamic error message wwith code.
   *
   * @param res - The express response object.
   * @param status - The error status code.
   * @param errorMessage - The error message.
   * @returns The json response with the error status code.
   */
  protected static sendError(
    res: Response,
    status: number,
    errorMessage: string
  ): Response {
    if (status === 200) {
      throw new Error("Use sendError just to send errors, not responses");
    }
    return res.status(status).send(errorMessage);
  }
}
