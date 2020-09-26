import Visit from '../models/Visit';

class VisitService {

  static async create(params) {
    let { newEntity } = params;
    try {
      const entityCreated = await Visit.create(newEntity);
      return entityCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getAll(params) {
    const { criterions } = params;

    try {
      const { rows } = await Visit.findAndCountAll({ ...criterions });
      return { rows, count: rows.length };
    } catch (error) {
      throw error;
    }
  }

  static async getById(params) {
    const { id } = params;

    try {
      const entity = await Visit.findOne({ where: { id } })
      return entity;
    } catch (error) {
      throw error;
    }
  }

}

export default VisitService;