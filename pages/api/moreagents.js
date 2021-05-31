import queryAsync from "../../mysql";

let agentNumber = 6;

async function getMoreAgents (req, res){

  let rows = await queryAsync(
    `SELECT * FROM agents LIMIT 3 OFFSET ${agentNumber}`
  );

  res.status(200).json({
    rows
  });

  agentNumber += 3;
}

export default getMoreAgents;