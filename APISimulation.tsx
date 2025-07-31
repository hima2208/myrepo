const handleCreate = () => {
  console.log('Form Data to be sent:', formData);

  // Simulate backend POST
  fetch('http://mock-backend/api/env-requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then(() => {
      // Redirect based on selected IDE
      const ide = formData.ide;
      if (ide === 'jupyter') {
        window.open('http://<your-ec2-ip>:8888', '_blank');
      } else {
        alert('Other IDEs not yet configured');
      }
    })
    .catch((err) => {
      console.error('Failed to simulate POST', err);
    });
};
