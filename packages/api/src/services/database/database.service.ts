import { Firestore, DocumentReference } from "@google-cloud/firestore";
import { BaseEntity } from "../../api/base/base.entity";
import { logger } from "../../lib/logger";

import WhereFilterOp = FirebaseFirestore.WhereFilterOp;

const firestore = new Firestore();

export type RawObject<EntityProps> = { id: string; props: EntityProps };
export type FirebaseFilter = {
  field: string;
  op: WhereFilterOp;
  value: string | number;
};

/**
 * Class representing the database service (Google Cloud Firestore).
 */
export abstract class DatabaseService<
  Entity extends BaseEntity<EntityProps>,
  EntityProps
> {
  private db = firestore;

  private readonly collection: string;

  /**
   * Initializes the database client.
   *
   * @param collection - The database collection name.
   */
  protected constructor(collection: string) {
    this.collection = collection;
  }

  /**
   * Save an entity into the database.
   *
   * @param entity - The entity being saved.
   */
  protected async saveEntity(entity: Entity): Promise<RawObject<EntityProps>> {
    const docRef = this.getDocumentReference(entity.id);
    const result = await docRef.create(entity.getProps());
    if (!result) {
      throw new Error("entity wasn't created");
    }
    return { id: docRef.id, props: entity.getProps() };
  }

  /**
   * Save entities into the database.
   *
   * @param entities - The entities being saved.
   * @returns A boolean status of the operation.
   */
  protected async saveEntities(entities: Entity[]): Promise<boolean> {
    try {
      const batch = this.db.batch();

      entities.forEach(async entity => {
        const docRef = this.getDocumentReference(entity.id);
        batch.create(docRef, entity.getProps());
      });

      await batch.commit();

      return true;
    } catch (e) {
      logger.error(e);
      return false;
    }
  }

  /**
   * Get an entity from the database collection.
   *
   * @param id - The entity id.
   * @returns An object that represents an Entity.
   */
  protected async getEntity(id: string): Promise<RawObject<EntityProps>> {
    const docRef = this.getDocumentReference(id);
    const docSnap = await docRef.get();
    if (!docSnap.exists) {
      throw new Error("doc doesn't exist");
    }
    const docData = docSnap.data();
    if (docData === undefined) {
      throw new Error("docData is undefined");
    }
    return { id: docSnap.id, props: docData as EntityProps };
  }

  /**
   * Get entity using firebase filter.
   *
   * @param filters - FirebaseNumberFilter | FirebaseStringFilter.
   * @returns DocData - Promise<RawObject<EntityProps>[]>.
   */
  protected async getEntityWithFilter(
    filters: FirebaseFilter[]
  ): Promise<RawObject<EntityProps>[]> {
    const docData: RawObject<EntityProps>[] = [];
    let docRef: FirebaseFirestore.Query = this.db.collection(this.collection);

    filters.forEach(filter => {
      docRef = docRef.where(filter.field, filter.op, filter.value);
    });
    const snapshot = await docRef.get();

    if (snapshot.empty) {
      throw new Error("doc it's empty");
    }
    snapshot.forEach(doc =>
      docData.push({ id: doc.id, props: doc.data() as EntityProps })
    );
    return docData;
  }

  /**
   * Get all entities from the database collection.
   *
   * @returns A list of objects that represent an Entity.
   */
  protected async getAllEntities(): Promise<RawObject<EntityProps>[]> {
    const collection = this.db.collection(this.collection);
    logger.debug("Getting all documents from %s collection", this.collection);
    const result = await collection.get();
    if (!result) {
      throw new Error("collection doesn't exist");
    }
    const objs: RawObject<EntityProps>[] = [];
    result.forEach(docSnap => {
      const docData = docSnap.data();
      if (docSnap.exists && docData !== undefined) {
        objs.push({ id: docSnap.id, props: docData as EntityProps });
      }
    });
    if (!objs.length) {
      throw new Error("docData is undefined");
    }
    return objs;
  }

  /**
   * Update an entity in the database.
   *
   * @param entity - The entity being updated.
   */
  protected async updateEntity(
    entity: Entity
  ): Promise<RawObject<EntityProps>> {
    const docRef = this.getDocumentReference(entity.id);
    const result = await docRef.update(entity.getProps());
    if (!result) {
      throw new Error("doc doesn't exist");
    }
    return { id: docRef.id, props: entity.getProps() };
  }

  /**
   * Delete an entity in the database.
   *
   * @param id - The entity id.
   */
  protected async deleteEntity(id: string): Promise<void> {
    const docRef = this.getDocumentReference(id);
    const result = await docRef.delete();
    if (!result) {
      throw new Error("doc doesn't exist");
    }
  }

  /**
   * Delete some entities in the database.
   *
   * @param entities - The entities being updated.
   * @returns Void - Promise<void>.
   */
  protected async deleteEntities(entities: Entity[]): Promise<boolean> {
    try {
      const batch = this.db.batch();

      entities.forEach(async entity => {
        const docRef = this.getDocumentReference(entity.id);
        batch.delete(docRef);
      });

      await batch.commit();

      return true;
    } catch (e) {
      logger.error(e);
      return false;
    }
  }

  /**
   * Delete all entities in the database.
   *
   * @returns Void - Promise<void>.
   * @param deleteEvery - Flag to determine if delete every entity or only fidelity resources.
   */
  protected async deleteAllEntities(
    deleteEvery = false
  ): Promise<RawObject<EntityProps>[]> {
    try {
      const batch = this.db.batch();
      const objs: RawObject<EntityProps>[] = [];

      let entitiesToDelete;
      if (!deleteEvery) {
        entitiesToDelete = await this.db
          .collection(this.collection)
          .where("idFidelity", ">", 0)
          .get();
      } else {
        entitiesToDelete = await this.db.collection(this.collection).get();
      }

      entitiesToDelete.forEach(doc => {
        const docData = doc.data();
        objs.push({ id: doc.id, props: docData as EntityProps });
        batch.delete(doc.ref);
      });

      await batch.commit();

      return objs;
    } catch (e) {
      logger.error(e);
      throw new Error("Can not delete all");
    }
  }

  /**
   * Get document reference from a document path.
   *
   * @param id - The document id.
   * @returns The `${collection}/${document}` reference.
   */
  public getDocumentReference(id: string): DocumentReference {
    return this.db.doc(`${this.collection}/${id}`);
  }

  // Not used functions
  // TO DO: check if function is needed
  /*  /!**
 * Updates entities in the database.
 *
 * @param entity - The entity being updated.
 * @returns An object that represents an Entity.
 *!/
protected async updateEntities(
  entity: Entity
): Promise<RawObject<EntityProps>> {
  const docRef = this.getDocumentReference(entity.id);
  const result = await docRef.update(entity.getProps());
  if (!result) {
    throw new Error();
  }
  return { id: docRef.id, props: entity.getProps() };
} */
}
