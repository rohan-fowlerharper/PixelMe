# Pixels 🎨🖌️

Pixels is a small web application that allows users to draw pixel art, but also complete a paint-by-numbers Nyan Cat image. The application is built using Next, React, and Redux. It's running in deployment and can be found here [pixels.roh.codes](https://pixels.roh.codes)

## Loose list of features:

- 🖱️ Left click to draw/Right click to erase
- 🎨 Colour picker (based on the colour palette of the template, if available)
- 🌈 Selected colour influences app theme
- 👁️‍🗨️ Toggle template visibility (if available)

## To run the repository:

### Install and run it locally

```bash
git clone git@github.com:rohan-fowlerharper/pixelme.git
cd pixelme

npm install
npm run dev

# Development server will run at http://localhost:3000
```

### Or use Docker

  
```bash
docker pull rohanfh/pixels:latest
docker run -p 3000:3000 rohanfh/pixels:latest

# Production build will run at http://localhost:3000
```
