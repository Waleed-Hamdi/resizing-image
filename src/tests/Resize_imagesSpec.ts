
import { existsSync } from 'fs';
import path from 'path';
import supertest from 'supertest';
import resizeImage from '../../utilities/Resize_images';

const request = supertest(resizeImage);

describe('Test resizing function', () => {
  it('test rezizing image', async () => {
     await resizeImage('1',200,300);
     let response = false;
      if(existsSync(`${path.resolve('./')}/Resized_images/1-200-300.jpg`)){
        response = true;
      }
    expect(response).toBeTrue;
  })

});
