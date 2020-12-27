/* panggil json web token */

const jwt = require ('jsonwebtoken');

/*  variabel baru jwt */

const JWT_SECRET ='bwamicro123';

/* cara membuat basic token dengan proses syncronous */

    // const token =jwt.sign({ data : { kelas :'bwamicro' } }, JWT_SECRET);
    // console.log(token);

    //set expired time token
    const token =jwt.sign(
        { data : { kelas :'bwamicro' } }, 
        JWT_SECRET,
        { expiresIn: '5m' });
        
    console.log(token);

//cara membuat basic token dengan proses asyncronus 

    // jwt.sign({ data : { kelas :'bwamicro' } }, JWT_SECRET, (err, token) => {
        // console.log(token);
        // });
        // console.log('aaaaaaa');


    // jwt.sign({ data : { kelas :'bwamicro' } },  JWT_SECRET, { expiresIn: '5m'}, (err, token) => {
    //     console.log(token);
    //     });

// cara verivikasi token
    //cara pertama

        const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiYndhbWljcm8ifSwiaWF0IjoxNjA5MDUyMTY2LCJleHAiOjE2MDkwNTI0NjZ9.7BRWyE9qMOUiLDnVJSK_hn9sGxjfz2zGKueuuzTnAfY';
        // jwt.verify(token1, JWT_SECRET, (err, decoded) =>{
        //      if (err) {
        //         console.log(err.message);
        //         return
        //     }

        //     console.log(decoded);
        // });


        // // tes error 
        // const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiYndhbWljcm8ifSwiaWF0IjoxNjA4Mjg0MjIyLCJleHAiOjE2MDgyODQ1MjJ9.4SJDx3enRBiaUT-sf_K0WLtQyMnTnL8A0ztjQI5f6j0';
        // jwt.verify(token1, '3423423423432', (err, decoded) =>{
        //     if (err) {
        //         console.log(err.message);
        //         return
        //     }

        //     console.log(decoded);
        // });

    //cara ke 2

    try {
        const decoded = jwt.verify(token1, JWT_SECRET);
        console.log(decoded)
        
    } catch (error) {
        
        console.log(error.message);
    }
    