import { DocumentReference } from "@google-cloud/firestore";
import { BaseModel } from "./base.model";

/**
 * Interface representing a base repo.
 */
export interface BaseRepo<
  Model extends BaseModel<ModelProps, SerializedObject>,
  ModelProps,
  SerializedObject
> {
  toDocRef(m: Model): DocumentReference;
  findOne(id: string): Promise<Model>;
  findAll(): Promise<Model[]>;
  create(m: Model): Promise<Model>;
  update(m: Model): Promise<Model>;
  delete(id: string): Promise<void>;
  exists(id: string): Promise<boolean>;
}
