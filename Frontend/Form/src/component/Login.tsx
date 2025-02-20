import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const validateInput = (name: string, value: string) => {
    let errorMessage = "";

    const nameRegex = /^[a-zA-Z ]{3,30}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegex = /^\d{10}$/;

    switch (name) {
      case "name":
        if (!nameRegex.test(value)) errorMessage = "Name must be 3-30 letters only.";
        break;
      case "email":
        if (!emailRegex.test(value)) errorMessage = "Invalid email format.";
        break;
      case "phone":
        if (!phoneRegex.test(value)) errorMessage = "Phone number must be exactly 10 digits.";
        break;
      case "password":
        if (!passwordRegex.test(value))
          errorMessage = "Password must have at least 8 chars, 1 letter, 1 number.";
        break;
      default:
        break;
    }

    return errorMessage;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field
    const errorMessage = validateInput(name, value);
    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = Object.keys(formData).reduce((acc, key) => {
      const errorMessage = validateInput(key, formData[key as keyof typeof formData]);
      return { ...acc, [key]: errorMessage };
    }, {} as typeof errors);

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      alert("Form submitted successfully");
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border border-gray-300 rounded-md w-96 space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-2 py-1 border rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block font-medium">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-2 py-1 border rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block font-medium">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-2 py-1 border rounded-md"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block font-medium">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-2 py-1 border rounded-md"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default Login;
