function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
  }
  
  //country with default default value
  describe_city("ISlamabad");
  describe_city("Lahore");
  //specified vountry.
  describe_city("Munich", "Germany");
  