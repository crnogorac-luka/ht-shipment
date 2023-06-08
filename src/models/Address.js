class Address {
    constructor(description, id, href, addressRole, streetNr, streetNrSuffix, streetNrLast, streetNrLastSuffix,
      streetName, streetType, streetSuffix, postcode, locality, city, stateOrProvince, country, geoCode, fullAddressName,
      characteristics, location, subAddresses, note, audit, addressSpecRef) {
      this.description = description;
      this.id = id;
      this.href = href;
      this.addressRole = addressRole;
      this.streetNr = streetNr;
      this.streetNrSuffix = streetNrSuffix;
      this.streetNrLast = streetNrLast;
      this.streetNrLastSuffix = streetNrLastSuffix;
      this.streetName = streetName;
      this.streetType = streetType;
      this.streetSuffix = streetSuffix;
      this.postcode = postcode;
      this.locality = locality;
      this.city = city;
      this.stateOrProvince = stateOrProvince;
      this.country = country;
      this.geoCode = geoCode;
      this.fullAddressName = fullAddressName;
      this.characteristics = characteristics;
      this.location = location;
      this.subAddresses = subAddresses;
      this.note = note;
      this.audit = audit;
      this.addressSpecRef = addressSpecRef;
    }
  }