export default function handler (req, res){
    const cookies = req.headers.cookie;
    console.log('Кукі отримано: ', cookies);
    res.status(200).json({ cookies });
} 