
import queryAsync from "../../mysql";

let x = 6;

async function getMoreAgents (req, res){

  let rows = await queryAsync(
    `SELECT * FROM agents LIMIT 3 OFFSET ${x}`
  );

  res.status(200).json({
    rows
  });

  x += 3;
}

export default getMoreAgents