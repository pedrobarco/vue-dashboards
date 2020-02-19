import uuidv4 from "uuid/v4";

import DocumentReference = FirebaseFirestore.DocumentReference;

export type PlainMapDocRef = {
  [key: string]: DocumentReference[];
};
export type PlainMapNumber = {
  [key: string]: number;
};
/**
 * Class representing a base entity.
 */
export abstract class BaseEntity<BaseEntityProps> {
  public readonly id: string;

  protected readonly props: BaseEntityProps;

  /**
   * @param props - The properties for the particular entity type.
   * @param id - The entity id.
   */
  constructor(props: BaseEntityProps, id?: string) {
    this.id = id || uuidv4();
    this.props = props;
  }

  /**
   * @returns The entity properties.
   */
  public getProps(): BaseEntityProps {
    return this.props;
  }
}
