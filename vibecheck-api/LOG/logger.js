function requestLogger(req,res,next)
{
    const timestamp=new Date().toISOString();
    console.log(`[${timestamp}] --- ${req.method} request to ${req.originalUrl}`);
}

export default requestLogger;