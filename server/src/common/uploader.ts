import { BadRequestException } from '@nestjs/common';
import { v2, UploadApiResponse } from 'cloudinary';
import {} from 'multer';

const {
  CLOUDINARY_API_KEY: api_key,
  CLOUDINARY_API_SECRET: api_secret,
  CLOUDINARY_NAME: cloud_name,
} = process.env;

v2.config({
  cloud_name,
  api_key,
  api_secret,
});

export async function upload(
  file: Express.Multer.File,
): Promise<UploadApiResponse> {
  if (!file) throw new BadRequestException('File is not exist');
  return await new Promise((resolve, reject) => {
    const stream = v2.uploader.upload_stream(
      { folder: 'the_record' },
      (error, result) => {
        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
        if (error) return reject(error);
        if (result) return resolve(result);
      },
    );

    stream.end(file.buffer);
  });
}
