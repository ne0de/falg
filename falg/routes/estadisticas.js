var express = require('express');
var router = express.Router();
var infoEstadisticas = require('../public/html/estadisticas/estadisticas.json')

router.get('/', function(req, res, next) {
  res.send(infoEstadisticas);
});
router.get('/:tipo', function(req, res, next) {
  res.send(infoEstadisticas.req.params);
});
router.post('/:tipo', function(req, res, next) {

    infoEstadisticas.req.params.push(req.body);

  res.send({
    status : true,
    response : infoEstadisticas
  });
});

module.exports = router;
