const { Router } = require('express');

const router = new Router();

const submit = async (req, res) => {
  res.send({success: true, message: "Form has been submitted"})
}
router.post('/api/form', submit);

module.exports = router;
