const dataStore = new Datastore();

function processData() {
  let chartData = dataStore.get("chartData");
  let dataSets = [];
  let dataSet1 = [];
  let dataSet2 = [];
  for (let i = 0; i < chartData.date.length; i++) {
    let dataPoint1 = [chartData.date[i], chartData.stockPrice[i]];
    dataSet1.push(dataPoint1);
    let dataPoint2 = [chartData.date[i], chartData.volume[i]];
    dataSet2.push(dataPoint2);
  }
  dataSets.push(dataSet1);
  dataSets.push(dataSet2);
  return dataSets;
}
