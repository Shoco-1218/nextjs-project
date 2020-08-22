import queryAsync from "../../mysql";

async function addMore(req, res) {
  try {
    let address = req.body.address;
    let inspection = req.body.inspection;
    let image_path = req.body.image_path;
    let agentName = req.body.agentName;
    let car = req.body.car;
    let shower = req.body.shower;
    let bed = req.body.bed;
    
    let agentData = await queryAsync(`SELECT * FROM agents WHERE name LIKE '${agentName}';`);
    let agentId = agentData[0].id;
  
    await queryAsync(`INSERT INTO property (agent_id, address, image_path, inspection, 
    bed, shower, car) 
  VALUES (${agentId},"${address}", "${image_path}", "${inspection}", ${car}, ${shower}, ${bed});`);
  
    res.statusCode = 200;
    console
    res.end();
  } catch {
    console.error();
  }


}

export default addMore