class BaseService {
  constructor(model) {
    this.model = model;
  }

  create(objects) {
    return this.model.create(objects);
  }

  get() {
    return this.model.find({});
  }

  getOne(id, populate) {
    return this.model.findById(id).populate(populate);
  }
  getOneByValue(property, value) {
    return this.model.findOne({ [property]: value });
  }

  updateOne(id, objects) {
    return this.model.findByIdAndUpdate(id, objects, {
      new: true,
    });
  }
  deleteOne(id) {
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseService;
