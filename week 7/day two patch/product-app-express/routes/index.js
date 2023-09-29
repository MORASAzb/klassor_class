var express = require('express');
var router = express.Router();

const productList = []
let nextId = 1;
/* GET home page. */
router.get('/products', function(req, res, next) {
  setTimeout(() => {
    return res.json([...productList])
  }, 1000)
});

router.get('/products/:id', function(req, res, next) {
  try {
    const foundItem = findInProductList(req.params.id)
    if (foundItem) {
      return res.json({
        ...foundItem
      })
    }
    else {
      return res.json({
        status: 'error',
        message: 'not-found'
      }).statusCode(400);
    }
  }
  catch (e) {
    return res.json({
      status: 'error',
      message: e
    }).statusCode(500);
  }
});

router.put('/products/:id', function(req, res, next) {
  try {
    const foundItem = findInProductList(req.params.id)
    if (foundItem) {
      const dataToUpdate = {
        ...req.body,
        _id: foundItem._id
      }
      updateInProductList(req.params.id, dataToUpdate)

      return res.json(dataToUpdate)
    }
    else {
      return res.json({
        status: 'error',
        message: 'not-found'
      }).statusCode(400);
    }
  }
  catch (e) {
    return res.json({
      status: 'error',
      message: e
    }).statusCode(500);
  }
});

router.patch('/products/:id', function(req, res, next) {
  try {
    const foundItem = findInProductList(req.params.id)
    if (foundItem) {
      const dataToUpdate = {
        ...foundItem,
        ...req.body,
        _id: foundItem._id
      }
      updateInProductList(req.params.id, dataToUpdate)

      return res.json(dataToUpdate)
    }
    else {
      return res.json({
        status: 'error',
        message: 'not-found'
      }).statusCode(400);
    }
  }
  catch (e) {
    return res.json({
      status: 'error',
      message: e
    }).statusCode(500);
  }
});

router.delete('/products/:id', function(req, res, next) {
  try {
    const foundIndex = productList.findIndex(item => item._id == req.params.id)
    if (foundIndex != -1) {
      productList.splice(foundIndex, 1)
      return res.json({})
    }
    else {
      return res.json({
        status: 'error',
        message: 'not-found'
      }).statusCode(400);
    }
  }
  catch (e) {
    return res.json({
      status: 'error',
      message: e
    }).statusCode(500);
  }
});


router.post('/products', function(req, res, next) {
  const data = {
    ...req.body,
    _id: nextId++
  }
  productList.push(data)

  setTimeout(() => {
    return res.status(201).json({
      status: 'ok',
      data,
    });
  }, 1000)
});


function findInProductList(id) {
  return productList.find(item => item._id == id)
}

function updateInProductList(id, data) {
  const foundIndex = productList.findIndex(item => item._id == id)
  if (foundIndex) {
    productList.splice(foundIndex, 1, data)
    console.log({ productList })
  }
}

module.exports = router;
