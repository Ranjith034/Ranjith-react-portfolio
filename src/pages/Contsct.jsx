import { Button, Paper, TextField, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Email regex for simple validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Validation
    if (!name || !email || !subject || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'All fields are required',
        text: 'Please fill in all the details before sending.',
        confirmButtonColor: '#ff4a4a',
        background: '#1e1e1e',
        color: '#fff',
      });
      return;
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        confirmButtonColor: '#ff4a4a',
        background: '#1e1e1e',
        color: '#fff',
      });
      return;
    }

    // If all valid, send email
    emailjs
      .sendForm('service_wkz0w08', 'template_1yt0v0s', form.current, 'H1AopsFhcRlgRjYmU')
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent',
            text: 'Your message has been successfully sent!',
            confirmButtonColor: '#4aa1ff',
            background: '#1e1e1e',
            color: '#fff',
          });
          form.current.reset();
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong. Please try again.',
            confirmButtonColor: '#ff4a4a',
            background: '#1e1e1e',
            color: '#fff',
          });
        }
      );
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div 
     initial={{ x: 100, opacity: 0 }}   // Start off-screen right
      animate={{ x: 0, opacity: 1 }}     // Animate to position
      transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={4} style={{ padding: '2rem', maxWidth: '600px', width: '100%', background: 'transparent' }}>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'white' }}>
          Contact <span className="text-blue-700">Me</span>
        </Typography>

        <form ref={form} onSubmit={sendEmail}>
          {['name', 'email', 'subject', 'message'].map((field, idx) => (
            <TextField
              key={idx}
              fullWidth
              label={field === 'name' ? 'Name' : field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type={field === 'email' ? 'email' : 'text'}
              multiline={field === 'message'}
              rows={field === 'message' ? 4 : undefined}
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#fff' },
                  '&:hover fieldset': { borderColor: '#ccc' },
                  '&.Mui-focused fieldset': { borderColor: '#4aa1ff' },
                },
              }}
            />
          ))}

          <Button
            variant="contained"
            type="submit"
            fullWidth
            style={{ marginTop: '1.5rem', background: '#004ccb', color: 'white' }}
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </motion.div>
  );
};

export default Contact;
