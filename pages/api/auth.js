import queryAsync from "../../mysql";
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

async function auth(req, res) {
  let data = req.body;

  if(data.action === "login") {
    let email = data.email;
    let pass = data.password;
    let hash = crypto.createHash('sha256').update(pass).digest('base64');
    
    let rows = await queryAsync(`
      SELECT * FROM register WHERE email LIKE "${email}"`
    );

    try{
      if(rows.length > 0 && rows[0].password == hash) {
        let token = jwt.sign({email: email, role: rows[0].role}, 'ShokoDidIt');
        res.setHeader('Set-Cookie', `logInCookie=${token}; Path=/;`);
        res.statusCode = 200; 
        res.end();
      }else{
        res.statusCode = 401;
        res.end();
      }
    } catch(err) {
      res.statusCode = 401;
      res.end();
    }
  } else if (data.action === "register") {
    let name = data.name;
    let email = data.email;
    let pass = data.password;
    let hash = crypto.createHash('sha256').update(pass).digest('base64');

    await queryAsync(`
    INSERT INTO register (name, email, password, role) 
    VALUES('${name}', '${email}', '${hash}', '' )`
    );
    res.statusCode = 200;
    res.end();
  } else {
    res.redirect('/index');
    res.end();
  }
}


export default auth