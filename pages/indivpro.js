import queryAsync from '../mysql';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

function logInCookieTokenPayload(req) {
  try{
      let cookie = req.header('Cookie');
      const regex = /logInCookie\=([A-Za-z0-9\.\_\-]+)/;
      let token = cookie.match(regex)[1];
      let decoded;
      decoded = jwt.verify(token, 'ShokoDIDit');
      return decoded;
    }catch{
      return null;
  }
}

function finish(body, res) {
  res.send(body);
  res.end();
}

function loggedIn2(withAgentsReplaced, tokenPayload, res){
  let addForm = `
  <h2 style = "text-align: center; margin-top: 50px">Add more property</h2>
    <div className = "addProperty">
      <form action = "/moreproperty" method = "POST" id = "moreProperty">
        <div className = "marginTop">
          <label for = "address">Address of Property</label><br>
          <input id = "address" type = "text" name = "address" 
                  placeholder="Property Address" size="36" required>
        </div>
        <div className = "marginTop">
          <label for = "inspection">Inspection Date</label><br>
          <input id = "inspection" type = "text" name = "inspection" 
                  placeholder="Open xx/xx/ xx:xxam/pm" size="36"  required>
        </div>
        <div className = "marginTop">
          <label for = "image_path">Tytle of the Image File</label><br>
          <input id = "image_path" type = "text" name = "image_path" 
                  placeholder="example.jpg" size="36"  required>
        </div>
        <div className = "marginTop">
          <label for = "agentName">Agent's name</label>
          <input id = "agentName" type = "text" name = "agentName" 
                  placeholder="Full name" size="36"  required>
        </div>
        <div className = "marginTop">
          <label >The number of Bed Rooms</label>
          <div id="radio">
            1 <input type="radio" name="bed" value="1" >
            2 <input type="radio" name="bed" value="2" >
            3 <input type="radio" name="bed" value="3" >    
            4 <input type="radio" name="bed" value="4" >    
            5 <input type="radio" name="bed" value="5" >    
          </div> 
        </div>
        <div className = "marginTop">
          <label >The number of Shower Rooms</label>
          <div id="radio">
            1 <input type="radio" name="shower" value="1" >
            2 <input type="radio" name="shower" value="2" >
            3 <input type="radio" name="shower" value="3" >    
            4 <input type="radio" name="shower" value="4" >    
            5 <input type="radio" name="shower" value="5" >    
          </div> 
        </div>
        <div className = "marginTop">
          <label >The number of Car Parking</label>
          <div id="radio">
            1 <input type="radio" name="car" value="1" >
            2 <input type="radio" name="car" value="2" >
            3 <input type="radio" name="car" value="3" >    
            4 <input type="radio" name="car" value="4" >    
            5 <input type="radio" name="car" value="5" >    
          </div> 
        </div>
        <button type = 'submit' id = "addPropertyBtn">OK</button>
      </form>
    </div>`;
  let withGreetingAndAgentsReplaced = 
        withAgentsReplaced.replace(/@@@addForm@@@/g, addForm);
  finish(withGreetingAndAgentsReplaced, res)
}




async function individualProperty(req, res){
  let idNumber = parseInt(req.query.id);
  let query = `SELECT * FROM property WHERE id = ${idNumber};`;
  let rows = await dbMysql.promisifiedQuery(query);
  let agentID = rows[0].agent_id;

  let agentQuery = `SELECT name, agents_photo   FROM  agents WHERE id = ${agentID}`;
  let agentRows = await dbMysql.promisifiedQuery(agentQuery);
  res.render('gallery.ejs', {
    address: rows[0].address,
    houseImage: rows[0].image_path,
    shower: rows[0].shower,
    bed: rows[0].bed,
    car: rows[0].car,
    inspection: rows[0].inspection,
    name: agentRows[0].name,
    agents_photo: agentRows[0].agents_photo
  });
  res.end();
}