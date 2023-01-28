import express from 'express';
import sharp from 'sharp';

const res = express.response;

async function resizeImage(name: string,width: number,hieght: number) {

    try {

      await sharp(`./images/${name}.jpg`)
        .resize({
          width: width,
          height: hieght
        }) //save the resized image to new folder called Resized_images
        .toFile(`./Resized_images/${name}-${width}-${hieght}.jpg`);

    } catch (error) {}


  }
   

  export default resizeImage;