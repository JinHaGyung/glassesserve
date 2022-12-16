let app = require('../app');

let port = process.env.PORT||4500;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})
