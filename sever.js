const express=require(`express`);
const bodyParser=require(`body-parser`);
const app=express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  app.post('/resources:id', (req, res) => {
    const { name } = req.body;
    // Create new resource with provided name
    res.status(201).json({ message: `Created resource with name ${name}` });
  });

  app.put('/resources', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // Update resource with provided ID and name
    res.json({ message: `Updated resource with ID ${id} and name ${name}` });
  });
  


  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });