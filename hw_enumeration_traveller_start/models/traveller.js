const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const findByTransport = this.journeys.filter((journey)=> {
    return journey.transport === transport;
  })
  return findByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const byMinDistance = this.journeys.filter((journey)=> {
    if (journey.distance >= minDistance){
      return journey;
    };
  });
  return byMinDistance;
}

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distTravelled = this.journeys.map((journey)=> {
    return journey.distance;
  });
  const totalDist = distTravelled.reduce((total, distance) =>{
    return total + distance;
  });
  return totalDist
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return Array.from(new Set(this.journeys.map(journey => journey.transport)))
};

Traveller.prototype.getUniqueModesOfTransport = function () {
 const transpArr = this.journeys.map((journey)=>{
   return journey.transport;
 });

 function uniqueList(transport, index, self) {
   return self.indexOf(transport) === index;
 };

 uniqueTransport = transpArr.filter(uniqueList);
  return uniqueTransport
};

module.exports = Traveller;
