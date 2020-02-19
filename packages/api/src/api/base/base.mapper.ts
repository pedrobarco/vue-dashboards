import { BaseModel } from "./base.model";
import { BaseEntity } from "./base.entity";
import { RawObject } from "../../services/database";

export interface BaseMapper<
  Model extends BaseModel<ModelProps, SerializedObject>,
  ModelProps,
  SerializedObject,
  Entity extends BaseEntity<EntityProps>,
  EntityProps
> {
  toPersistence(m: Model): Promise<Entity> | Entity;
  toDomain(e: RawObject<EntityProps>): Promise<Model>;
}
