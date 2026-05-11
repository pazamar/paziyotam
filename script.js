const bookingForm = document.getElementById('booking-form');
const bookingResponse = document.getElementById('booking-response');

bookingForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const name = formData.get('name');
  const service = formData.get('service');
  const date = formData.get('date');
  const time = formData.get('time');

  bookingResponse.textContent = `תודה ${name}! קיבלנו את בקשת התור שלך ל־${service} בתאריך ${date} בשעה ${time}. נשוב אליך עם אישור בהקדם.`;
  bookingForm.reset();
});
