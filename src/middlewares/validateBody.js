import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false, 
    });
    next();
  } catch (err) {
    const errors = err.details?.map(detail => ({
      message: detail.message,
      path: detail.path.join('.'),
      type: detail.type,
    })) || [];

   
    res.status(400).json({
      status: 400,
      message: 'Validation error',
      errors,
    });
  }
};