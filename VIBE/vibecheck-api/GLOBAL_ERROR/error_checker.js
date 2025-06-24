function globalErrorHandler(err, req, res, next) {
  console.error("An error occurred! Details:", err.stack);

  const statusCode = err.status || 500;

  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Oh no! Something went wrong on our end.'
  });
}


export default globalErrorHandler;
