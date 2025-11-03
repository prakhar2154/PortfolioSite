import ContactSection from '../ContactSection';

export default function ContactSectionExample() {
  return (
    <ContactSection
      email="shagunsinha2506@gmail.com"
      phone="0000000000"
      location="Nagpur, Maharashtra, India"
      onSubmit={(data) => console.log('Form submitted:', data)}
    />
  );
}
