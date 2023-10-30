const response = (res, result, status, message, pagination) => {
  const resultPrint = {};
  if (status === 200 || status === 201 || status === 204 ) {
    resultPrint.status = "success";
  } else {
    resultPrint.status = "error";
  }
  resultPrint.statusCode = status;
  resultPrint.data = result;
  resultPrint.message = message || null;
  resultPrint.pagination = pagination || {};
  res.status(status).json(resultPrint);
};

module.exports = { response };
