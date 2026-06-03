export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !emailRegex.test(formData.email)
  ) {
    errors.email =
      "Please enter a valid email";
  }

  if (!formData.subject.trim()) {
    errors.subject =
      "Subject is required";
  }

  if (!formData.message.trim()) {
    errors.message =
      "Message is required";
  }

  return errors;
};
