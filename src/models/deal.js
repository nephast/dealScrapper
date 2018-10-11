import uuid from 'uuidv4';

class Deal {
  constructor() {
    this.id = uuid();
    this.dealId = undefined;
    this.dealPicture = undefined;
    this.createdOn = undefined;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  setDealId(dealId) {
    this.dealId = dealId;
    return this;
  }

  setDealPicture(dealPicture) {
    this.dealPicture = dealPicture;
    return this;
  }

  setCreatedOn(createdOn) {
    this.createdOn = new Date(createdOn);
    return this;
  }
}

export {
  Deal
};
