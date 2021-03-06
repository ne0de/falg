var express = require('express');
var router = express.Router();
var infoEstadisticas = require('../public/html/estadisticas/estadisticas.json')
const { render, response } = require('../app');

router.get('/', function(req, res, next) {
  res.send(infoEstadisticas);
});

router.get('/:tipo', function(req, res, next) {
    res.send(req.params.tipo);
});

router.post('/:tipo', function(req, res, next) { 

    switch(req.params.tipo){
      case "infoPartidas":
        infoEstadisticas.infoPartidas.push(req.body);  
      break;
      case "clases":
        infoEstadisticas.clases.push(req.body);  
      break;
      case "jugadores":
        infoEstadisticas.jugadores.push(req.body);  
      break;
    }

  res.send({
    status : true,
    response : infoEstadisticas 
  });
});

router.get('/cosa', function(req, res, next) {
  res.render('estadisticas')
});

module.exports = router;
