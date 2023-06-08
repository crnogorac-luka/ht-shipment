class Audit {
    constructor(id, createdBy, createdDate, changedBy, changedDate, entityVersion, tagId, spanId, changeReason, sourceSystem, sourceSystemUser, characteristics) {
      this.id = id;
      this.createdBy = createdBy;
      this.createdDate = createdDate;
      this.changedBy = changedBy;
      this.changedDate = changedDate;
      this.entityVersion = entityVersion;
      this.tagId = tagId;
      this.spanId = spanId;
      this.changeReason = changeReason;
      this.sourceSystem = sourceSystem;
      this.sourceSystemUser = sourceSystemUser;
      this.characteristics = characteristics;
    }
  }