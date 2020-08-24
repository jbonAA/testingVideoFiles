const extractFrames = require('ffmpeg-extract-frames')
const asset = require('/Users/jessbon/Downloads/')


const extractionFunction = async (asset) => {
    await extractFrames({
        input: `${asset}`,
        output: './frames/screenshot-%i.jpg'
    })
}

extractionFunction()