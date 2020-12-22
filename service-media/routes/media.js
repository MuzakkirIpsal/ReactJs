const express = require('express');
const router = express.Router();

const isBase64 = require('is-base64');
const base64Img = require('base64-img');

/* Tambah models */
const { Media } = require('../models');
    

/* GET Image */

router.get('/', async (req, res) => {
    const media = await Media.findAll({
        attributes: ['id','image']

});


    const mappedMedia = media.map((m) => {
        m.image = `${req.get('host')}/images/${m.image}`;
        return m ;
    });

    return res.json({
        status : 'success',
        data : mappedMedia
    });
});

/* Post image */
router.post('/', (req, res) => { 
    const image = req.body.image;
    
    /* validasi tipe gambar base64 */
    if (!isBase64(image, { mimeRequired: true})) {
            return res.status(400).json({ status  :'error', message :'invalid based64' });
        }
    
    base64Img.img(image, './public/images', Date.now(), async (err, filepath) => {
        if (err) {
            return res.status(400).json({ status: 'error',message : err.message });
        }

            /*  file name image di split bentuk array*/
            // const filename = filepath.split('\\').pop().split('/').pop();
    const filename = filepath.split("\\").pop().split("/").pop();

            /* menyimpan file image */
    const media = await Media.create({ image: `images/${filename}` });

    return res.json({
        status: 'success',
        data: {
        id : media.id,
        image :`${req.get('host')}/images/${filename}`
        }
                    //message : 'oke berhasil'
    });

    })
});

module.exports = router;





