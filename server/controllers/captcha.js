const { Router } = require('express');
const axios = require('axios')

const router = new Router();

const verifyCaptha = async (req, res) => {
  const { recaptchaToken } = req.body;
  try {
    // Verify the token with the Google reCAPTCHA API
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: process.env.RECAPTCHA_SECRET,
        response: recaptchaToken,
      },
    });
    if (response.data?.success) {
      // Handle form submission
      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid reCAPTCHA token' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
router.post('/api/verify-recaptcha', verifyCaptha);

module.exports = router;
