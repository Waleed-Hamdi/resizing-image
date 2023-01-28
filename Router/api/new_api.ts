import express from 'express';
import { Request , Response } from 'express';
import path from 'path';
import { existsSync } from "fs";
import resizeImage from '../../utilities/Resize_images';

const new_api = express();

new_api.get('/api/image',(req: Request,res: Response): void =>{
    // res.status(200).send('hello sir   '+ req.query.name);
    const name = String(req.query.name);

    //check if name null or undifined and give user handle error
    if (name === undefined || name === null) {

        res.status(400).send('Bad request, image name is required.');
    
      }

      //check if width or hieght null or undifined and give user handle error
    if (req.query.width === undefined || req.query.hieght  === undefined) {

        res.status(400).send('sir, you should enter the width and hieght.');
    
      }

      //converting width and hieght to integer values

    const hieght: string = String(req.query.hieght);
    const new_hieght = parseInt(hieght);
    const width: string = String(req.query.width);
    const new_width = parseInt(width);
    
    
  // get image location 
    const img_loc = path.resolve('')+`/images/${name}.jpg`;

    // check if we have this image or not 
    if(existsSync(img_loc) === false){

        res.status(404).send('this image is not exist in my folder');
 
     }

      //check width and hieght value and sure it is > 0
     if( new_width <= 0 ){
          
        res.status(404).send('sir, you have to enter positive number for width');
      
      }
        
      
      if( new_hieght <= 0){
            
        res.status(404).send('sir, you have to enter positive number for hieght');
      
      }

     // check if we have this image with this width and hieght 
      if(existsSync(`${path.resolve('./')}/Resized_images/${name}-${new_width}-${new_hieght}.jpg`)){
      
        res.status(200).sendFile(`${path.resolve('./')}/Resized_images/${name}-${width}-${hieght}.jpg`);
  
      }else{
  
          // if it is not exist we will resize it and save it in Resized_images
          resizeImage(name,new_width,new_hieght).then(()=>{
            res.status(200).sendFile(`${path.resolve('')}/Resized_images/${name}-${width}-${hieght}.jpg`);
        });
  
      }
  

});


export default new_api;