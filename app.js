const  express =require("express") ;
const  dotenv =require("dotenv") ;
const  path =require("path") ;
import { fileURLToPath } from "url";

dotenv.config();

const app =express();

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname( __filename);

 //Portfolio\dist
app.use(express.static(path.join( __dirname,'./Portfolio/dist')))
app.use('*',function(req,res){
    res.sendFile(path.join( __dirname,'/dist/index.html'))
})


const PORT =process.env.PORT;

app.listen(PORT,()=>{console.log(`Server is up oand Runnging on ${process.env.PORT}`);
})
