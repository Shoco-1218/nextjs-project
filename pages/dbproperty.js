import queryAsync from '../mysql';
import jwt from 'jsonwebtoken';
import fs, { readFile } from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);


export async function getServerSideProps(){

  let dbdata = await queryAsync(`
    SELECT property.id, property.address, property.image_path, property.inspection, 
    property.bed, property.shower, property.car, agents.name, agents.agents_photo 
    FROM property 
    JOIN agents ON property.agent_id = agents.id;
  `);
    
  let rows = JSON.parse(JSON.stringify(dbdata));

  return {
    props: {
      dbdata
    },
  }
};

function Index(req, res, { rows }){
  let data;
  try{
    data = fs.readFile(__dirname + '/pages/Properties', 'utf-8');
  }catch{
    res.status(404).send('No page found!');
    res.end();
  }

  let arrayOfData = rows.map(row => (
    [
      row.address, 
      row.image_path, 
      row.inspection,
      row.bed, 
      row.shower, 
      row.car, 
      row.name, 
      row.agents_photo
    ]
  ));

  console.log('arrayOfData is' + arrayOfData);

  let str = '';
  for (let i = 0; i < arrayOfData.length; i++){
    str += `
    <div className = "imgs">
        <br>
        <p className = "right">Ultimo Real Estate</p>
        <br>
        <a target="_blank" href="./gallery?id=${arrayOfData[i].id}">
          <img src= '/static/${arrayOfData[i].image_path}' alt="housePicture" 
          style={{width: "100", height: 242;}}>
        </a>
        <br>
        <h5 className = "obi">${arrayOfData[i].name}
          <a href = "#">
            <img src = "/static/${arrayOfData[i].agents_photo}" width = "70px;" height="70px;" style = {{border-radius: "50";}}>
          </a>
        </h5>
        <br>
        <h4>${arrayOfData[i].address}</h4>
        <br>
        <p className = "icons">
          <img src = "/static/bed.png">${arrayOfData[i].bed}
          <img src = "/static/shower.png">${arrayOfData[i].shower}
          <img src = "/static/car.png">${arrayOfData[i].bed}</p>
        <p className = "inspe">
          <img src = "/static/planner.png"> Inspection : ${arrayOfData[i].inspection}</p>
        <br>
    </diV>`
  }
  

  const withAgentsReplaced = data.replace(/@@@property@@@/g, str)
  let tokenPayload = logInCookieTokenPayload(req);

  if(tokenPayload && tokenPayload.role == 'agent'){
    loggedIn2(withAgentsReplaced, tokenPayload, res)
  }else{
    const withGreetingAndAgentsReplaced = withAgentsReplaced.replace(/@@@addForm@@@/g, '');
    finish(withGreetingAndAgentsReplaced, res);
  }
}

export default Index;


// Add property feature
// const addProperty =  async function(req, res){
//   let address = req.body.address;
//   let inspection = req.body.inspection;
//   let image_path = req.body.image_path;
//   let addName = req.body.agentName;
//   let bed = req.body.bed;
//   let shower = req.body.shower;
//   let car = req.body.car;
//   let number = parseInt(req.query.id);

//   let rows = await dbMysql.promisifiedQuery(`SELECT * from agents WHERE name LIKE "${addName}%";`);
//   let card = `
//     <div className = "imgs">
//       <br>
//       <p className = "right">Ultimo Real Estate</p>
//       <br>
//       <a target="_blank" href="./properties/house${number}.html">
//         <img src= /static/${image_path} alt="housePicture" style="width:100%; height: 242px;">
//       </a><br>
//       <h5 className = "obi">${rows[0].name}
//         <a href = "#">
//           <img src = "/static/${rows[0].agents_photo}" width = "70px;" height="70px;" 
//           style = {{border-radius: "50%;"}}>
//         </a>
//       </h5>
//       <br>
//       <h4>${address}</h4><br>
//       <p className = "icons">
//         <img src = "/static/bed.png">${bed}
//         <img src = "/static/shower.png">${shower}
//         <img src = "/static/car.png">${car}
//       </p>
//       <p className = "inspe">
//         <img src = "/static/planner.png"> Inspection : ${inspection}
//       </p>
//       <br>
//     </diV>`;
//   await dbMysql.promisifiedQuery(`
//   INSERT INTO property (agent_id, address, image_path, inspection, 
//     bed, shower, car) 
//     VALUES ('${rows[0].id}','${address}', '${image_path}', '${inspection}', ${bed}, ${shower}, ${car});
//   `);
//   res.send (card);  
//   res.end();
// }

