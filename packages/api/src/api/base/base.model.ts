/**
 * Class representing a base model.
 */
export abstract class BaseModel<BaseModelProps, SerializedObject> {
  protected props: BaseModelProps;

  /**
   * @param props - The properties for the particular model type.
   */
  constructor(props: BaseModelProps) {
    this.props = props;
  }

  /**
   * Serialize model.
   */
  abstract serialize(): SerializedObject;
}
