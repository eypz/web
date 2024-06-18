// api/submit_form.js

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { email, issue } = req.body;

    // Example of handling the form submission (replace with your logic)
    console.log(`Email: ${email}, Issue: ${issue}`);

    // Example response
    res.status(200).json({ message: 'Form submission successful' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
