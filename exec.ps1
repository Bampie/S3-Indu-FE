docker build --rm -t s3-frontend:3.0.0 .
docker run -p 3000:3000 --pid=host s3-frontend:3.0.0