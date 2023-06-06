const GoogleMap = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52962.10679216854!2d-118.17162273983453!3d33.93774129976148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cc4c1e082291%3A0x9140a72616789d0a!2sDowney%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1684918780171!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: '0' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default GoogleMap;
