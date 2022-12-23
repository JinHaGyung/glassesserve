let app = require('../app');

let PORT = process.env.PORT||4500;

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})
